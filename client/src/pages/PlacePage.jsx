import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import LocationAddress from "../LocationAddress";
import { HiBuildingLibrary, HiCheckBadge, HiHome } from "react-icons/hi2";
import { PiCertificate, PiCouch } from "react-icons/pi";
import { IoWifi } from "react-icons/io5";
import { FaStar, FaSwimmingPool } from "react-icons/fa";
import { MdOutlineBedroomChild } from "react-icons/md";
import { HiHomeModern } from "react-icons/hi2";
import { MdApartment } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { MdDeck } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { PiBedBold } from "react-icons/pi";
import { MdOutlineYard } from "react-icons/md";

export default function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    if (!id) return;
    axios.get("/places/" + id).then((response) => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) return "";

  return (
    <div className=" mt-4 mx-8 px-12 pt-4 ">
      {/* <h1 className="text-2xl">{place.title}</h1> */}
      {/* <LocationAddress>{place.address}</LocationAddress> */}
      <div className="w-full h-full">
        <PlaceGallery place={place} />
      </div>

      <div className=" mt-8 gap-8 grid grid-cols-1  md:grid-cols-[2fr_1fr]">
        <div>
          <h1 className="text-2xl">{place.title}</h1>
          <div className="text-primary my-2"> Property Type</div>
          <div className="flex gap-2 items-center font-semibold">
            <FaStar /> 4.42 ·{" "}
            <span className="underline cursor-pointer"> 61 Reviews </span>
          </div>
          <LocationAddress>{place.address}</LocationAddress>
          <div className="font-semibold">
            1 Km Away from{" "}
            <span className="underline cursor-pointer">Monash</span>
          </div>
          <div className="my-4">
            <h2 className="fonr-semibold text-2xl">Description</h2>
            {place.description}
          </div>
          {/* Check-in: {place.checkIn} <br />
          Check-out: {place.checkOut} <br />
          Max number of guests: {place.maxGuests} */}
          <h3 className="fonr-semibold text-2xl">What this place offers</h3>
          <div className="grid  grid-cols-3 gap-2 md:grid-cols-4 py-4">
            <label className="flex items-baseline gap-2">
              <HiHome /> House
            </label>
            <label className="flex items-baseline gap-2">
              <HiHomeModern /> Modern House
            </label>
            <label className="flex items-baseline gap-2">
              <MdApartment /> Apartment
            </label>
            <label className="flex items-baseline gap-2">
              <IoWifi /> Wi Fi included
            </label>
            <label className="flex items-baseline gap-2">
              <PiCertificate /> NSFAS Accredited
            </label>
            <label className="flex items-baseline gap-2">
              <MdOutlineBedroomChild /> Bachelor
            </label>
            <label className="flex items-baseline gap-2">
              <PiBedBold /> 1* Bedroom
            </label>
            <label className="flex items-baseline gap-2">
              <GoPeople /> Shared
            </label>
            <label className="flex items-baseline gap-2">
              <PiCouch /> Furnished
            </label>
            <label className="flex items-baseline gap-2">
              <MdOutlineYard /> Yard
            </label>
            <label className="flex items-baseline gap-2">
              <FaSwimmingPool /> Swimming Pool
            </label>
            <label className="flex items-baseline gap-2">
              <CgGym /> Gym
            </label>
            <label className="flex items-baseline gap-2">
              <MdDeck /> Deck
            </label>
          </div>
          <h2 className="fonr-semibold text-2xl">Things to know</h2>
          {place.description}
        </div>
        <div className="  sticky">
          <BookingWidget place={place} />
        </div>
        {/* <div className="mt-2 text-sm gray-800 leading-4">
          <h2 className="fonr-semibold text-2xl">Things to know</h2>
          {place.extraInfo}
        </div> */}
      </div>
    </div>
  );
}
