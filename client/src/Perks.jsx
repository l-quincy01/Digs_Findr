import PropTypes from "prop-types";
import { FaSwimmingPool } from "react-icons/fa";
import { MdOutlineBedroomChild } from "react-icons/md";
import { HiHome, HiHomeModern } from "react-icons/hi2";
import { MdApartment } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { MdDeck } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { PiBedBold, PiCertificate, PiCouch } from "react-icons/pi";
import { MdOutlineYard } from "react-icons/md";
import { IoWifi } from "react-icons/io5";

// Inside your functional component:
Perks.propTypes = {
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function Perks({ selected, onChange }) {
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
        <HiHome />
        <input
          type="checkbox"
          checked={selected.includes("House")}
          name="House"
          onChange={checkboxClick}
        />
        <span>House</span>
      </label>

      <label className="m-2 border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <HiHomeModern />
        <input
          type="checkbox"
          checked={selected.includes("Modern House")}
          name="Modern House"
          onChange={checkboxClick}
        />
        <span>Modern House</span>
      </label>

      <label className="m-2 border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <MdApartment />
        <input
          type="checkbox"
          checked={selected.includes("Apartment")}
          name="Apartment"
          onChange={checkboxClick}
        />
        <span>Apartment</span>
      </label>

      <label className="m-2 border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <IoWifi />
        <input
          type="checkbox"
          checked={selected.includes("Wi Fi included")}
          name="Wi Fi included"
          onChange={checkboxClick}
        />
        <span>Wi Fi included</span>
      </label>

      <label className="m-2 border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <PiCertificate />
        <input
          type="checkbox"
          checked={selected.includes("NSFAS Accredited")}
          name="NSFAS Accredited"
          onChange={checkboxClick}
        />
        <span>NSFAS Accredited</span>
      </label>

      <label className="m-2 border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <MdOutlineBedroomChild />
        <input
          type="checkbox"
          checked={selected.includes("Bachelor")}
          name="Bachelor"
          onChange={checkboxClick}
        />
        <span>Bachelor</span>
      </label>

      <label className="m-2 border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <PiBedBold />
        <input
          type="checkbox"
          checked={selected.includes("1 Bedroom")}
          name="1 Bedroom"
          onChange={checkboxClick}
        />
        <span>1 Bedroom</span>
      </label>

      <label className="m-2 border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <GoPeople />
        <input
          type="checkbox"
          checked={selected.includes("Shared")}
          name="Shared"
          onChange={checkboxClick}
        />
        <span>Shared</span>
      </label>

      <label className="m-2 border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <PiCouch />
        <input
          type="checkbox"
          checked={selected.includes("Furnished")}
          name="Furnished"
          onChange={checkboxClick}
        />
        <span>Furnished</span>
      </label>

      <label className="m-2 border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <MdOutlineYard />
        <input
          type="checkbox"
          checked={selected.includes("Yard")}
          name="Yard"
          onChange={checkboxClick}
        />
        <span>Yard</span>
      </label>

      <label className="m-2 border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <FaSwimmingPool />
        <input
          type="checkbox"
          checked={selected.includes("Swimming Pool")}
          name="Swimming Pool"
          onChange={checkboxClick}
        />
        <span>Swimming Pool</span>
      </label>

      <label className="m-2 border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <CgGym />
        <input
          type="checkbox"
          checked={selected.includes("Gym")}
          name="Gym"
          onChange={checkboxClick}
        />
        <span>Gym</span>
      </label>

      <label className="m-2 border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <MdDeck />
        <input
          type="checkbox"
          checked={selected.includes("Deck")}
          name="Deck"
          onChange={checkboxClick}
        />
        <span>Deck</span>
      </label>
    </>
  );
}
