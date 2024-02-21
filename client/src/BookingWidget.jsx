import { useContext, useEffect, useState } from "react";
import { differenceInCalendarDays } from "date-fns"
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";



export default function BookingWidget({ place }) {

    const [checkIn, setCheckIn] = useState();
    const [checkOut, setCheckOut] = useState();
    const [numberOfGuests, setNumberOfGuests] = useState();
    const [name, setName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [redirect, setRedirect] = useState() ;
    const {user} = useContext(UserContext)

 useEffect(() => {
    if(user) {
        setName(user.name)
    }
 }, [user])

    let numberOfDays = 0;
    if (checkIn && checkOut) {
        numberOfDays = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
    }

    async function bookPlace() {
        const response = await axios.post('/bookings', {
            checkIn,
            checkOut,
            numberOfGuests,
            name,
            phoneNumber,
            place: place._id,
            price: numberOfDays * place.price
        });
        const bookingID = response.data._id;
        setRedirect(`/account/bookings/${bookingID}`);
    }
    

    if(redirect){
       return  <Navigate to ={redirect} />
    }

    return (
        <div className="my-2">
            <div className="bg-white shadow p-4 rounded-2xl">
                <div className="text-2xl text-center">
                    Price: R{place.price} / pernight
                </div>
                <div className=" border rounded-2xl mt-4">
                    <div className="flex items-center justify-evenly">
                        <div className=" px-4 py-3 ">
                            <label > Check in: </label>
                            <input type="date" value={checkIn} onChange={ev => setCheckIn(ev.target.value)} />
                        </div>
                        <div className=" px-4  py-3 border-l ">
                            <label > Check out: </label>
                            <input type="date" value={checkOut} onChange={ev => setCheckOut(ev.target.value)} />
                        </div>
                    </div>
                    <div className=" px-2  items-center justify-evenly  border-t flex ">
                        Guests:
                        <input className="border border-transparent"
                            type="number"
                            placeholder={"Max guests " + place.maxGuests}
                            value={numberOfGuests} onChange={ev => setNumberOfGuests(ev.target.value)} />
                    </div>
                    {numberOfDays > 0 && (
                        <div className=" py-4 px-4  items-center justify-evenly  border-t  ">
                            Your Name:
                            <input className=""
                                type="text"
                                value={name} onChange={ev => setName(ev.target.value)} />
                             Your Phone Number:
                            <input className=""
                                type="text"
                                value={phoneNumber} onChange={ev => setPhoneNumber(ev.target.value)} />
                        </div>
                    )
                    }
                </div>
                <button onClick={bookPlace} className="primary mt-4">Book This Place</button>

                <div className="">
                    {numberOfDays > 0 ? (

                        <div className="text-gray-500 flex">
                            <span className=" underline ">R{place.price} x {numberOfDays} nights</span> &nbsp; &nbsp; &nbsp; &nbsp;
                            <span className="">Total: R{numberOfDays * place.price}</span>
                        </div>


                    ) : (
                        numberOfDays === 0 ? null : (
                            <div className="text-red-500">
                                Number of days must be greater than 0.
                            </div>
                        )
                    )}

                </div>
            </div>
        </div>
    );
}