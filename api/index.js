const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const app = express();
const User = require('./models/User.js');
const bcrypt = require('bcryptjs');
const bcryptSalt = bcrypt.genSaltSync(6);
const jwt = require("jsonwebtoken");
const jwtSec = "hdnckjweiwke";
const cookieParser = require('cookie-parser');
const imageDownlader = require('image-downloader') ;
const multer = require('multer') ;
const fs = require('fs');
const Place = require('./models/Place.js') ;
const BookingModel = require('./models/Booking.js');
const { rejects } = require('assert');


app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + "/uploads"));
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}
));

mongoose.connect(process.env.MONGO_URL);




app.get(
    '/test', (req, res) => { res.json('test GET ok'); }

);

app.post(
    '/register', async (req, res) => {
        const { name, email, password } = req.body;

        try {
            const userDoc = await User.create({
                name,
                email,
                password: bcrypt.hashSync(password, bcryptSalt)
            });
            res.json({ userDoc });
        }  /* END TRY */
        catch (e) {
            res.status(422).json(e);
        } /* END CATCH */



    });


app.post(
    '/login', async (req, res) => {
        const { email, password } = req.body;
        const userDoc = await User.findOne({ email })
        if (userDoc) {
            const passCheck = bcrypt.compareSync(password, userDoc.password)
            if (passCheck) {
                jwt.sign({
                    email: userDoc.email,
                    id: userDoc._id,
                    
                }, jwtSec, {}, (err, token) => {
                    if (err) throw err;
                    res.cookie('token', token).json(userDoc)
                });

            } else {
                res.status(422).json("Invalid password ");
            }
            // res.json('found')
        }
        else {
            res.json('not found')
        }
    });

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, jwtSec, {}, async (err, userData) => {

            if (err) throw err;
            const {name, email, _id} = await User.findById(userData.id) ;
            res.json({name, email, _id}) ;

        });
    } else {
        res.json(null);
    }
    // res.json({ token });

})

app.post('/logout', (req,res) => {

    res.cookie('token', '').json(true) ;
})

app.post('/upload-by-link', async(req,res) => {
    const {link} = req.body;
    const newName = Date.now() + '.jpg' ;
    await imageDownlader.image({
        url: link,
        dest: __dirname + '/uploads/' + newName
    }) ;
    res.json(newName) ;
})
const photosMiddleware = multer({dest: 'uploads'});

app.post('/upload', photosMiddleware.array('photos', 100),(req, res) => {
    const uploadedFiles = [];
    for(let i = 0 ; i < req.files.length; i++)
    {
        const {path, originalname} = req.files[i];
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1] ;
        const newPath = path + '.' + ext ;
        fs.renameSync(path, newPath); 
        uploadedFiles.push(newPath.replace('uploads/', ''));
    }
    res.json(uploadedFiles) ;
})

app.post('/places/new', async (req, res) => {

    const { token } = req.cookies;
  
  
    jwt.verify(token, jwtSec, {}, async (err, userData) => {
      if (err) throw err;
  
      const { placeData } = req.body;
      
      const placeDoc = await Place.create({
        owner: userData.id,  
        title: placeData.title,
        address: placeData.address,
        photos: placeData.addedPhotos,
        description: placeData.description, 
        perks: placeData.perks,
        extraInfo: placeData.extraInfo,
        checkIn: placeData.checkIn,
        checkOut: placeData.checkOut, 
        maxGuests: placeData.maxGuests,
        price: placeData.price 
      });
  
    //   console.log(placeDoc);
      res.json(placeDoc);
    });
  
  });

app.get('/user-places', (req,res) => {
    const {token} = req.cookies ;
    jwt.verify(token, jwtSec, {}, async (err, userData) => {
        const{id} = userData;
        res.json (await Place.find({owner:id}) ) 
    });

})

app.get('/places/:id', async (req,res) => {
    // res.json(req.params)
    const {id} = req.params ;
    res.json(await Place.findById(id)) ;

}) 

app.put('/places/:id', async (req, res) =>{


    const {token} = req.cookies ;
    const {id, title, address, addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests, price} = req.body ;
    // const { placeData } = req.body;

    jwt.verify(token, jwtSec, {}, async (err, userData) => {
        
        const placeDoc = await Place.findById(id) ;
        if(userData.id === placeDoc.owner.toString())
        {
            placeDoc.set({ 
                title, address, photos: addedPhotos, description, perks, extraInfo, checkIn, checkOut, maxGuests, price
            }) ;
            await placeDoc.save() ;
            res.json('ok');
        }
    });

}) ;

 app.post( '/bookings', async (req,res) => {
    const userData = await getUserData(req) ;
    const {place, checkIn, checkOut, phoneNumber, name, numberOfGuests, price} = req.body ;
     BookingModel.create({
    place, checkIn, checkOut, phoneNumber, name, numberOfGuests, price, 
    user: userData.id 
    }).then(( doc) => {
       res.json(doc) ;
    }).catch((err) => {
        throw err;
    })

 })


app.get('/places', async (req,res) => {
    res.json(await Place.find() )
})

function getUserData(req){
    
    return new Promise((resolve, reject) => {
        jwt.verify(req.cookies.token, jwtSec, {}, async (err, userData) => {

            if(err) throw err;

            resolve(userData);
        })

    })
    


}

app.get('/bookings', async (req,res) => {

   const userData = await getUserData(req) ;
   res.json( await Booking.find({user: userData.id}))
    
})

app.listen(4000);