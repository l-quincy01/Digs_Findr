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
import { FaHeart } from "react-icons/fa6";
import { IoMdMap } from "react-icons/io";

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
    <>
      <div className="  items-center  justify-center overflow-x-auto mt-4 p-2">
        <h2 className=" text-xl text-center font-semibold content-center mb-2">
          Popular rental agencies in your area
        </h2>
        <div className=" mb-4 flex  flex-row  items-center  justify-center  gap-10 p-3  hover:text-neutral-800 transition cursor-pointer">
          <div className="justify-center flex-col">
            <img
              className=" rounded-sm w-16 h-9 "
              src={
                "https://s3-eu-west-1.amazonaws.com/askremax/770/0eb03656-6ca3-05f6-300c-8aad530aa2f4.jpg"
              }
              alt=""
            />
            <div className="font-medium text-sm text-center"> Remax</div>
          </div>
          <div className="justify-center items-center flex-col">
            <img
              className=" rounded-sm w-16 h-9 "
              src={
                "https://sloepwes.co.za/storage/2022/06/Seeff-Logo-PNG-900x357.png"
              }
              alt=""
            />
            <div className="font-medium text-sm text-center"> Seef</div>
          </div>
          <div className="justify-center items-center  flex-col">
            <img
              className=" rounded-sm w-16 h-9 "
              src={
                "https://www.wpcc.co.za/wp-content/uploads/2019/05/Pam-Golding-New-Logo.jpg"
              }
              alt=""
            />
            <div className="font-medium text-sm text-center"> Pam Golding</div>
          </div>
          <div className="justify-center items-center  flex-col">
            <img
              className=" rounded-sm w-16 h-9 "
              src={"	https://www.wizebuy.co.za/images/logo.gif"}
              alt=""
            />
            <div className="font-medium text-sm text-center"> Wize Buy</div>
          </div>
          <div className="justify-center items-center  flex-col">
            <img
              className=" rounded-sm w-16 h-9 "
              src={
                "https://www.arlon.co.za/assets/media/logo.043015e66fc28df9d51dcfc66ce66154.png"
              }
              alt=""
            />
            <div className="font-medium text-sm text-center">
              {" "}
              Arlon properties
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" px-20  gap-8 gap-y-10  grid grid-cols-2 md:gird-cols-3 lg:grid-cols-4">
          {places.length > 0 &&
            places.map((place) => (
              <Link key={place._id} to={"/place/" + place._id} className="">
                <div className="mb-2 bg-gray-500 rounded-2xl flex">
                  {/* HEAFRT NOT SHOWING */}
                  <FaHeart
                    className="
            relative
            top-3
            right-3 z-0
            text-gray-400
             border-white
          "
                  />
                  {place.photos?.[0] && (
                    <img
                      className="rounded-lg object-cover aspect-square w-full h-full"
                      src={"http://localhost:4000/uploads/" + place.photos?.[0]}
                      alt=""
                    />
                  )}
                </div>

                <div className=" ">
                  <h3 className=" text-md font-medium flex justify-between truncate">
                    {" "}
                    {place.title}{" "}
                  </h3>

                  <h2 className="text-sm text-gray-500">
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
                      <span className="font-semibold text-sm">
                        {" "}
                        R{place.price}{" "}
                      </span>
                      <span className=" font-semibold text-sm"> / month</span>
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
        <div className=" inset-x-0  w-full bottom-10 fixed  z-50  flex items-center justify-center">
          <button className=" flex justify-center items-center gap-3 z-55 fixed bg-black text-white p-3 rounded-2xl ">
            <Link to="/map" className=" flex justify-center items-center gap-3">
              Show Map <IoMdMap />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
