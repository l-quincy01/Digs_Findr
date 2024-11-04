import PropTypes from "prop-types";
import { IoBedOutline } from "react-icons/io5";
import { PiCouch, PiTelevisionSimpleThin } from "react-icons/pi";

import { LuMicrowave } from "react-icons/lu";
import { TbFridge } from "react-icons/tb";
import { GiToaster } from "react-icons/gi";

// Inside your functional component:
Furniture.propTypes = {
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function Furniture({ selected, onChange }) {
  function checkboxClick(ev) {
    const { checked, name } = ev.target;
    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange([...selected.filter((selectedName) => selectedName !== name)]);
    }
  }
  return (
    <>
      <label className="m-2 border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <TbFridge />
        <input
          type="checkbox"
          checked={selected.includes("Fridge")}
          name="Fridge"
          onChange={checkboxClick}
        />
        <span>Fridge</span>
      </label>

      <label className="m-2 border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <PiTelevisionSimpleThin />
        <input
          type="checkbox"
          checked={selected.includes("Tv")}
          name="Tv"
          onChange={checkboxClick}
        />
        <span>Tv</span>
      </label>

      <label className="m-2 border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <LuMicrowave />
        <input
          type="checkbox"
          checked={selected.includes("Microwave")}
          name="Microwave"
          onChange={checkboxClick}
        />
        <span>Microwave</span>
      </label>

      <label className="m-2 border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <IoBedOutline />
        <input
          type="checkbox"
          checked={selected.includes("Bed")}
          name="Bed"
          onChange={checkboxClick}
        />
        <span>Bed</span>
      </label>

      <label className="m-2 border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <PiCouch />
        <input
          type="checkbox"
          checked={selected.includes("Couch")}
          name="Couch"
          onChange={checkboxClick}
        />
        <span>Couch</span>
      </label>

      <label className="m-2 border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <GiToaster />
        <input
          type="checkbox"
          checked={selected.includes("Toaster")}
          name="Toaster"
          onChange={checkboxClick}
        />
        <span>Toaster</span>
      </label>
    </>
  );
}
