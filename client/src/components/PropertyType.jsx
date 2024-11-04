import { MdApartment, MdHome, MdBusiness, MdSchool } from "react-icons/md";
import PropTypes from "prop-types";
import { useState } from "react";

PropertyType.propTypes = {
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function PropertyType({ selected, onChange }) {
  const [selectedProperty, setSelectedProperty] = useState("");

  const propertyTypes = [
    { name: "House", icon: <MdHome /> },
    { name: "Apartment Block", icon: <MdApartment /> },
    { name: "Flat let", icon: <MdBusiness /> },
    { name: "Student Residence", icon: <MdSchool /> },
  ];

  const handleClick = (property) => {
    onChange(property);
    setSelectedProperty(property);
  };

  return (
    <div className="flex justify-center items-center gap-4 pt-2">
      {propertyTypes.map((property) => (
        <div
          className={`cursor-pointer flex flex-col items-center justify-center max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:hover:bg-gray-200 ${
            selectedProperty === property.name && "bg-gray-100"
          }`}
          onClick={() => handleClick(property.name)}
        >
          <input type="text" className="hidden" value={property.name} />
          {property.icon} {property.name}
        </div>
      ))}
    </div>
  );
}
