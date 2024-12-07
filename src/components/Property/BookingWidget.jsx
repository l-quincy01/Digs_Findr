import { useContext, useEffect, useState } from "react";

import axios from "axios";
import { Navigate } from "react-router-dom";
// import { UserContext } from "../context/UserContext";

import { IoMdInformationCircleOutline } from "react-icons/io";

import { FaRegFlag, FaRegHeart } from "react-icons/fa";
import { UserContext } from "../../context/UserContext.tsx";
import { Button } from "../ui/button.tsx";
import { IoBookmark } from "react-icons/io5";

export default function BookingWidget({ place }) {
  // const [checkIn, setCheckIn] = useState();
  // const [checkOut, setCheckOut] = useState();
  // const [numberOfGuests, setNumberOfGuests] = useState();
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const [redirect, setRedirect] = useState();
  const [showAgent, setShowAgent] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setPhoneNumber(user.phoneNumber);
      setEmail(user.email);
      setMessage(
        "Hi, " +
          place.agentName +
          ", I am interested in this property (Web Ref: " +
          place.webRef +
          ") please contact me."
      );
    }
  }, [user]);

  const handleShowAgents = () => {
    setShowAgent(true);
  };
  const handleHideAgents = () => {
    setShowAgent(false);
  };

  let numberOfDays = 0;

  async function bookPlace() {
    const response = await axios.post("/bookings", {
      // checkIn,
      // checkOut,
      // numberOfGuests,
      name,
      phoneNumber,
      place: place._id,
      price: numberOfDays * place.price,
    });
    const bookingID = response.data._id;
    setRedirect(`/account/bookings/${bookingID}`);
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="my-2 sticky">
      <div className=" shadow rounded-2xl">
        <div className="p-10">
          <div className="text-xl  text-left font-bold ">
            Price: R {place.price}{" "}
            <span className="text-sm font-semibold text-gray-500">
              {" "}
              / month
            </span>
          </div>

          <div className="  rounded-2xl mt-6">
            <div className="  items-center justify-evenly  border-t  ">
              Your Name:
              <input
                className=""
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
              />
              Your Phone Number:
              <input
                className=""
                type="text"
                placeholder="082 100 0000"
                value={phoneNumber}
                onChange={(ev) => setPhoneNumber(ev.target.value)}
              />
              Your Email:
              <input
                className=""
                type="text"
                placeholder="you@example.com"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
              />
              Message:
              <textarea
                value={message}
                onChange={(ev) => setMessage(ev.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="flex flex-row gap-2 items-start justify-start">
            <div className="flex flex-col gap-1">
              <Button onClick={bookPlace} className="">
                Send Enquiry
              </Button>

              {!showAgent && (
                <Button onClick={handleShowAgents} className="  ">
                  Show Agent
                </Button>
              )}

              {showAgent && (
                <>
                  <Button onClick={handleHideAgents} className=" ">
                    Hide Agent
                  </Button>
                  <div className="py-4 px-4 items-center justify-evenly border-t">
                    Name: {" " + place.agentName} <br />
                    Number: {" " + place.agentContact}
                  </div>
                </>
              )}
            </div>

            <Button onClick={bookPlace} className="  ">
              Save <IoBookmark />
            </Button>
          </div>

          <div className=" border-t mt-2 py-2">
            <span className=" font-bold"> PamGolding</span>
            <div className="flex">
              <img
                className=" w-1/4  rounded-full  "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyprjrXx_niDRK3eAQ425eqkDHSdca7_Gv852ZWm80Q_Pfkg2rYv3AAMMYqAxNV_PzeaM&usqp=CAU"
                alt="Landlord image"
              />
            </div>
          </div>
        </div>
        {/* <div className="flex items-center gap-2 w-full h-1/6 border-t-1 border-black rounded-b-2xl font-bold p-4">
          <IoMdInformationCircleOutline
            className=" right-12 absolute cursor-pointer"
            size={24}
          />
        </div> */}
      </div>
      <div className="flex underline gap-3 items-center justify-center my-5 cursor-pointer">
        <FaRegFlag /> Report Listing
      </div>
    </div>
  );
}
