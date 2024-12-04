import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  PiCouchLight,
  PiCertificate,
  PiHouseLineThin,
  PiBuildingApartment,
  PiWarehouse,
  PiStudentBold,
} from "react-icons/pi";
import { IoWifi } from "react-icons/io5";
import { FaRegBuilding, FaRegUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { IoMdMap } from "react-icons/io";

export default function PropertyCards({
  placeID,
  photos,
  title,
  address,
  propertyType,
  webRef,
  availability,
  price,
  placeOffers,
  preferredTenants,
}) {
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

  return (
    <>
      <Link key={placeID} to={"/place/" + placeID} className="">
        <div className="mb-2 bg-gray-500 rounded-2xl flex">
          <FaHeart className="relative top-3 right-3 z-0 text-gray-400 border-white" />
          {photos?.[0] && (
            <img
              className="rounded-lg object-cover aspect-square w-full h-fullk"
              src={"http://localhost:4000/uploads/" + photos[0]}
              alt=""
            />
          )}
        </div>

        <div>
          <h3 className="text-md font-medium flex justify-between truncate">
            {title}
          </h3>
          <h2 className="text-sm text-gray-500">
            {address ? (
              address
            ) : (
              <span className="text-sm">{propertyType + " " + webRef}</span>
            )}
          </h2>
          <span className="text-gray-500 text-sm">{availability}</span>
          <div className="mt-1 flex justify-between">
            <span>
              <span className="font-semibold text-sm">R{price}</span>
              <span className="font-semibold text-sm"> / month</span>
            </span>
            <div className="flex gap-2">
              {Object.entries(iconMap).map(
                ([property, IconComponent]) =>
                  (placeOffers.includes(property) ||
                    preferredTenants.includes(property)) && (
                    <IconComponent key={property} />
                  )
              )}
            </div>
          </div>
        </div>
      </Link>

      <div className=" inset-x-0  w-full bottom-10 fixed  z-50  flex items-center justify-center">
        <button className=" flex justify-center items-center gap-3 z-55 fixed bg-black text-white p-3 rounded-2xl ">
          <Link to="/map" className=" flex justify-center items-center gap-3">
            Show Map <IoMdMap />
          </Link>
        </button>
      </div>
    </>
  );
}

// Prop validation
PropertyCards.propTypes = {
  placeID: PropTypes.string.isRequired,
  photos: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  address: PropTypes.string,
  propertyType: PropTypes.string.isRequired,
  webRef: PropTypes.string,
  availability: PropTypes.string,
  price: PropTypes.number.isRequired,
  placeOffers: PropTypes.arrayOf(PropTypes.string).isRequired,
  preferredTenants: PropTypes.arrayOf(PropTypes.string).isRequired,
};
