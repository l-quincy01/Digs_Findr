import { useEffect, useState } from "react";
import AccountNavigation from "./AccountNavigation";
import axios from "axios";
import PlaceImg from "../PlaceImg";
import { differenceInCalendarDays, format } from "date-fns";

export default function BookingsPage() {
    const [bookings, setBookings] = useState();

    useEffect(() => {
        axios.get('/bookings').then(response => {
            setBookings(response.data);
        });
    }, []);

    return (
        <div>
            <AccountNavigation />
            <div>
                {bookings?.length > 0 && bookings.map(booking => (
                    <div key={booking._id} className="flex gap-4 bg-gray-200 rounded-xl overflow-hidden ">
                        <div className="w-48 h-full">
                            <PlaceImg place={booking.place} />
                        </div>
                        <div className="py-3">
                            <h2 className="text-xl border-b border-gray-300 mb-2">{booking.place.title}</h2>
                           <div className=" border-b border-gray-600 py-2">
                           <span className="border-b border-gray-300"> {booking.place.price} ZAR x {differenceInCalendarDays(new Date(booking.checkOut), new Date(booking.checkIn))} nights
                            </span> <span className="right-40">{booking.place.price}</span>
                            <br />
                            <span className="border-b border-gray-300">Service fee : 0 ZAR</span>
                           </div>
                            Total before taxes: ZAR {booking.price}
                            <br />
                            {format(new Date(booking.checkIn), 'yyyy-MM-dd')} to {format(new Date(booking.checkOut), 'yyyy-MM-dd')}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
