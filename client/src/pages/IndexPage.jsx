import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";



export default function IndexPage() {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        axios.get("/places").then(response => {
            setPlaces(response.data);
        })
    }, []);

    return (

        <div className="  gap-8 gap-y-10 mt-10 grid grid-cols-2 md:gird-cols-3 lg:grid-cols-4">

            {places.length > 0 && places.map(place => (
                <Link to={'/place/' + place._id} className="cursor-pointer">
                    <div className= "mb-2 bg-gray-500 rounded-2xl flex">

                        {place.photos?.[0] && (
                            <img className = "rounded-2xl object-cover aspect-square" src={"http://localhost:4000/uploads/" + place.photos?.[0]} alt="" />
                        )}
                    </div>
                    <div>
                   
                    <h3 className="font-bold"> {place.address}</h3>
                    <h2 className="text-sm text-gray-500"> {place.title} </h2>
                    <div className="mt-1"> <span className="font-semibold text-md">R{place.price} </span> night</div>
                    </div>

                   
                </Link>
                

            ))}



        </div>


    );

}
