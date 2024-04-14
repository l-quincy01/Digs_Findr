import { useContext, useEffect, useState } from "react";
import { differenceInCalendarDays } from "date-fns";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { LuCalendarDays } from "react-icons/lu";
import { IoMdInformationCircleOutline, IoMdStopwatch } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";
import { LuBadgeCheck } from "react-icons/lu";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaRegFlag, FaRegHeart } from "react-icons/fa";

export default function BookingWidget({ place }) {
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();
  const [numberOfGuests, setNumberOfGuests] = useState();
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [redirect, setRedirect] = useState();
  const [showAgent, setShowAgent] = useState(false);
  const [agentName, setAgentName] = useState();
  const [agentPhoneNumber, setAgentPhoneNumber] = useState();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  const handleShowAgents = () => {
    setShowAgent(true);
  };
  const handleHideAgents = () => {
    setShowAgent(false);
  };

  let numberOfDays = 0;

  if (checkIn && checkOut) {
    numberOfDays = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }

  async function bookPlace() {
    const response = await axios.post("/bookings", {
      checkIn,
      checkOut,
      numberOfGuests,
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
      <div className="bg-white shadow rounded-2xl">
        <div className="p-4">
          <div className="text-xl  text-left font-bold ">
            Price: R {place.price}{" "}
            <span className="text-sm font-semibold text-gray-500">
              {" "}
              / month
            </span>
          </div>
          {/* <div className=" border rounded-2xl mt-4">
          <div className="flex items-center justify-evenly">
            <div className=" px-4 py-3 ">
              <label> Check in: </label>
              <input
                type="date"
                value={checkIn}
                onChange={(ev) => setCheckIn(ev.target.value)}
              />
            </div>
            <div className=" px-4  py-3 border-l ">
              <label> Check out: </label>
              <input
                type="date"
                value={checkOut}
                onChange={(ev) => setCheckOut(ev.target.value)}
              />
            </div>
          </div>
          <div className=" px-2  items-center justify-evenly  border-t flex ">
            Guests:
            <input
              className="border border-transparent"
              type="number"
              placeholder={"Max guests " + place.maxGuests}
              value={numberOfGuests}
              onChange={(ev) => setNumberOfGuests(ev.target.value)}
            />
          </div>
          {numberOfDays > 0 && (
            <div className=" py-4 px-4  items-center justify-evenly  border-t  ">
              Your Name:
              <input
                className=""
                type="text"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
              />
              Your Phone Number:
              <input
                className=""
                type="text"
                value={phoneNumber}
                onChange={(ev) => setPhoneNumber(ev.target.value)}
              />
            </div>
          )}
        </div> */}

          {/* <div className="mt-2">
          {numberOfDays > 0 ? (
            <div className="text-gray-500 flex">
              <span className=" underline ">
                R{place.price} x {numberOfDays} nights
              </span>{" "}
              &nbsp; &nbsp; &nbsp; &nbsp;
              <span className="">Total: R{numberOfDays * place.price}</span>
            </div>
          ) : numberOfDays === 0 ? null : (
            <div className="text-red-500">
              Number of days must be greater than 0.
            </div>
          )}
        </div> */}

          <div className="  rounded-2xl mt-6">
            <div className=" py-4 px-4  items-center justify-evenly  border-t  ">
              Your Name:
              <input
                className=""
                type="text"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
              />
              Your Phone Number:
              <input
                className=""
                type="text"
                value={phoneNumber}
                onChange={(ev) => setPhoneNumber(ev.target.value)}
              />
              Your Email:
              <input
                className=""
                type="text"
                value={phoneNumber}
                //   onChange={(ev) => setPhoneNumber(ev.target.value)}
              />
              Message:
              <input
                className=""
                type="text"
                value={phoneNumber}
                //   onChange={(ev) => setPhoneNumber(ev.target.value)}
              />
            </div>
          </div>
          <div className="grid gap-x-4 grid-cols-[2fr_1fr] ]">
            <button onClick={bookPlace} className="primary my-2 flex-grow">
              Send Enquiry
            </button>
            <button
              onClick={bookPlace}
              className=" bg-white border flex gap-2 items-center justify-center flex-grow h-full"
            >
              Save <FaRegHeart />
            </button>

            <div>
              {!showAgent && (
                <button onClick={handleShowAgents} className="primary w-2/3 ">
                  Show Agent Contact numbers
                </button>
              )}

              {showAgent && (
                <>
                  <button onClick={handleHideAgents} className="primary w-2/3 ">
                    Hide Agent Contact numbers
                  </button>
                  <div className="py-4 px-4 items-center justify-evenly border-t">
                    Name: AGENT NAME <br />
                    Number: AGENT NUMBER
                  </div>
                </>
              )}
            </div>
          </div>

          <div className=" border-t mt-2 py-2">
            <span className=" font-bold">Landlord Name</span>
            <div className="flex">
              <img
                className=" w-1/4  rounded-full  "
                src="https://digsconnect.imgix.net/profile_pictures/image_cropper_1599924511152.jpg?fit=crop&h=200&ixlib=python-4.0.0&w=200"
                alt="Landlord image"
              />
              <div className=" flex flex-col justify-center ml-4">
                <label className="flex gap-2 items-baseline">
                  <LuCalendarDays /> Joined Digs Findr{" "}
                  <span className="font-bold"> Feb 2024</span>
                </label>
                <label className="flex gap-2 items-baseline">
                  <IoMdStopwatch /> Response Time
                  <IoMdInformationCircleOutline className="scale-125 right-12 absolute cursor-pointer" />
                </label>
                <label className="flex gap-2 items-baseline">
                  <BiMessageDetail /> Reply Rate{" "}
                  <IoMdInformationCircleOutline className="scale-125 right-12 absolute cursor-pointer" />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 w-full h-1/10 bg-cyan-600 text-white rounded-b-2xl font-bold p-4">
          <LuBadgeCheck />
          Trusted Landlord
          <IoMdInformationCircleOutline className="scale-125 right-12 absolute cursor-pointer" />
        </div>
      </div>
      <div className="flex underline gap-3 items-center justify-center my-5 cursor-pointer">
        <FaRegFlag /> Report Listing
      </div>
    </div>
  );
}
