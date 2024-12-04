import { useEffect, useState } from "react";
import AccountNavigation from "../../components/AccountPage/AccountNavigation";
import axios from "axios";
import PlaceImg from "../../components/Property/PlaceImg";
import { differenceInCalendarDays, format } from "date-fns";
import { Link } from "react-router-dom";

export default function BookingsPage() {
  const [bookings, setBookings] = useState();

  useEffect(() => {
    axios.get("/bookings").then((response) => {
      setBookings(response.data);
    });
  }, []);

  return (
    <div>
      <AccountNavigation />
      <div>
        {bookings?.length > 0 &&
          bookings.map((booking) => (
            <Link
              to={`/account/bookings/${booking._id}`}
              key={booking._id}
              className=" my-4 cursor-pointer flex gap-4 bg-gray-200 rounded-xl overflow-hidden "
            >
              <div className="w-48 ">
                <PlaceImg place={booking.place} />
              </div>
              <div className="py-3">
                <h2 className="text-xl border-b border-gray-300 mb-2">
                  {booking.place.title}
                </h2>

                <div className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                  {format(new Date(booking.checkIn), "yyyy-MM-dd")} to{" "}
                  {format(new Date(booking.checkOut), "yyyy-MM-dd")}
                </div>

                <div className="   py-1">
                  <span className=" text-gray-500 border-b border-gray-300">
                    {" "}
                    {booking.place.price} ZAR x{" "}
                    {differenceInCalendarDays(
                      new Date(booking.checkOut),
                      new Date(booking.checkIn)
                    )}{" "}
                    nights
                  </span>{" "}
                  <span className="text-gray-500 right-40">
                    {booking.place.price *
                      differenceInCalendarDays(
                        new Date(booking.checkOut),
                        new Date(booking.checkIn)
                      )}{" "}
                    ZAR{" "}
                  </span>
                  <br />
                  <span className=" text-gray-500 border-b border-gray-300">
                    Service fee : 0 ZAR
                  </span>
                  <br />
                  <span className="border-b border-gray-600">
                    {" "}
                    Total before taxes: {booking.price} ZAR{" "}
                  </span>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
