import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingWidget from "../../components/Property/BookingWidget";
import PlaceGallery from "../../components/Property/PlaceGallery";
import LocationAddress from "../../components/Property/LocationAddress";
import { IoWifi } from "react-icons/io5";
import {
  PiCertificate,
  PiHouseLineThin,
  PiCouch,
  PiStudentBold,
  PiTelevisionSimpleThin,
  PiUsersThree,
  PiBuildingApartment,
} from "react-icons/pi";
// import { IoBedOutline, IoWifi } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
// import { MdOutlineBedroomChild } from "react-icons/md";
// import { HiHome, HiHomeModern } from "react-icons/hi2";
// import { MdApartment } from "react-icons/md";
// import { CgGym } from "react-icons/cg";
// import { MdDeck } from "react-icons/md";
// import { GoPeople } from "react-icons/go";
// import { PiBedBold } from "react-icons/pi";
// import { MdOutlineYard } from "react-icons/md";
// import { TbFridge } from "react-icons/tb";
// import { LuMicrowave } from "react-icons/lu";
// import { GiToaster } from "react-icons/gi";
// import { BsPersonLinesFill } from "react-icons/bs";
import { IoBedOutline } from "react-icons/io5";

import { LuMicrowave } from "react-icons/lu";
import { TbFridge } from "react-icons/tb";
import { GiToaster } from "react-icons/gi";

import { FaRegUser } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa";

import Comments from "../../components/Comments";

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

  const placeOffersIconMap = {
    "Wi Fi included": IoWifi,
    Furnished: PiCouch,
    "NSFAS Accredited": PiCertificate,
    House: PiHouseLineThin,
    Yard: FaRegBuilding,
    Apartment: PiBuildingApartment,
  };

  const furnitureIncludedIconMap = {
    Fridge: TbFridge,
    Tv: PiTelevisionSimpleThin,
    Microwave: LuMicrowave,
    Bed: IoBedOutline,
    Couch: PiCouch,
    Toaster: GiToaster,
  };
  const preferredIconMap = {
    Undergraduate: FaRegUser,
    "Post Graduate": PiStudentBold,
    "Young Professionals": PiUsersThree,
    "Exchange Student": BsPersonLinesFill,
    Other: FaRegUser,
  };

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
          <div className="text-primary my-2">
            {" "}
            {place.propertyType + " " + place.webRef}{" "}
          </div>
          <div className="flex gap-2 items-center font-semibold">
            <FaStar /> 4.42 ·{" "}
            <span className="underline cursor-pointer"> 61 Reviews </span>
          </div>
          <LocationAddress>{place.address}</LocationAddress>
          <div className="font-semibold">
            {place.availability}
            {/* <span className="underline cursor-pointer">Rhodes Univeristy</span> */}
          </div>
          <div className="my-4">
            <h2 className="fonr-semibold text-2xl">Description</h2>
            {place.description}
          </div>

          <h3 className="fonr-semibold text-2xl">What this place offers</h3>
          <div className="grid  grid-cols-3 gap-2 md:grid-cols-4 py-4">
            {Object.entries(placeOffersIconMap).map(
              ([property, IconComponent]) =>
                (place.placeOffers.includes(property) ||
                  place.preferredTenants.includes(property)) && (
                  <label className="flex items-baseline gap-2" key={property}>
                    <IconComponent /> {property}
                  </label>
                )
            )}
          </div>
          <h2 className="fonr-semibold text-2xl">Things to know</h2>
          {place.extraInfo}
          <h2 className="fonr-semibold text-2xl mt-4 mb-2">
            Furniture & appliances included
          </h2>
          <div className="grid grid-cols-2 grid-flow-row gap-4 mb-6">
            {Object.entries(furnitureIncludedIconMap).map(
              ([property, IconComponent]) =>
                (place.placeOffers.includes(property) ||
                  place.preferredTenants.includes(property)) && (
                  <label className="flex items-baseline gap-2" key={property}>
                    <IconComponent /> {property}
                  </label>
                )
            )}
          </div>
          <button className=" bg-white border flex gap-2 items-center justify-center p-6 text-sm font-semibold">
            Show all
          </button>
          <h2 className="fonr-semibold text-md my-4 font-bold">
            Preffered tenants{" "}
          </h2>

          <div className="grid grid-cols-2 grid-flow-row gap-4 mb-6">
            {Object.entries(preferredIconMap).map(
              ([property, IconComponent]) =>
                (place.placeOffers.includes(property) ||
                  place.preferredTenants.includes(property)) && (
                  <label className="flex items-baseline gap-2" key={property}>
                    <IconComponent /> {property}
                  </label>
                )
            )}
          </div>
        </div>
        <div className="  sticky">
          <BookingWidget place={place} />
        </div>

        <div className="border-t  pt-4">
          <div className="text-2xl mb-4">Comments Section</div>
          <div className=" grid grid-cols-2 items-center justify-center gap-6 min-w-full  ">
            <Comments amount={2} />
            <Comments amount={2} />
          </div>
        </div>
      </div>
    </div>
  );
}
