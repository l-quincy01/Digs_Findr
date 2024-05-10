import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoWifi } from "react-icons/io5";
import {
  PiCouchLight,
  PiCertificate,
  PiHouseLineThin,
  PiBuildingApartment,
  PiWarehouse,
  PiStudentBold,
} from "react-icons/pi";
import { FaRegBuilding, FaRegUser } from "react-icons/fa";

export default function IndexPage() {
  const [places, setPlaces] = useState([]);

  const iconMap = {
    "Wi Fi included": IoWifi,
    Furnished: PiCouchLight,
    "NSFAS Accredited": PiCertificate,
    House: PiHouseLineThin,
    "Student Residence": FaRegBuilding,
    Apartment: PiBuildingApartment,
    "Flat Let": PiWarehouse,
    Undergraduate: FaRegUser,
    "Post Graduate": PiStudentBold,
  };

  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces(response.data);
    });
  }, []);

  return (
    <div className=" p-10  gap-8 gap-y-10 mt-10 grid grid-cols-2 md:gird-cols-3 lg:grid-cols-4">
      {places.length > 0 &&
        places.map((place) => (
          <Link
            key={place._id}
            to={"/place/" + place._id}
            className="cursor-pointer  shadow-lg rounded-xl "
          >
            <div className="mb-2 bg-gray-500 rounded-2xl flex">
              {place.photos?.[0] && (
                <img
                  className="rounded-t-xl object-cover aspect-square w-full h-full"
                  src={"http://localhost:4000/uploads/" + place.photos?.[0]}
                  alt=""
                />
              )}
            </div>
            <div className=" p-4">
              <h3 className=" text-lg font-semibold flex justify-between">
                {" "}
                {place.title}{" "}
              </h3>

              <h2 className="text-lg text-gray-500">
                {/* Site Listed Property AND non Site listed properties */}
                {place.address ? (
                  place.address
                ) : (
                  <span className=" text-sm">
                    {place.propertyType + " " + place.webRef}
                  </span>
                )}{" "}
              </h2>
              <span className="text-gray-500 text-sm">
                {place.availability}
              </span>

              <div className="mt-1 flex justify-between ">
                {" "}
                <span>
                  <span className="font-semibold text-lg">
                    {" "}
                    R{place.price}{" "}
                  </span>
                  <span className=" text-md"> / month</span>
                </span>{" "}
                <div className="flex gap-2">
                  {Object.entries(iconMap).map(
                    ([property, IconComponent]) =>
                      (place.placeOffers.includes(property) ||
                        place.preferredTenants.includes(property)) && (
                        <IconComponent key={property} />
                      )
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
