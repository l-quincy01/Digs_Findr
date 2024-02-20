import { useEffect, useState } from "react";
import AccountNavigation from "./AccountNavigation";
import axios from "axios";

export default function BookingsPage() {

    const [booking, setBooking] = useState() ;

    useEffect(() => {
        axios.get('/bookings').then(response => {
            setBooking(response.data);
        })
    }, [])

    return (

        <div>
        <AccountNavigation/>
        <div>
          { bookings?.length > 0 && bookings.map( booking =>(
              <div>
                  {booking.checkIn} {'->'} {booking.checkOut}
              </div>
          ))}
        </div>
      </div>
      
    );
}