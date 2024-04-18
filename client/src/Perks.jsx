import PropTypes from "prop-types";
import { FaSwimmingPool } from "react-icons/fa";
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
        <IoWifi />
        <input
          type="checkbox"
          checked={selected.includes("wifi")}
          name="wifi"
          onChange={checkboxClick}
        />
        <span>Wi-Fi</span>
      </label>
      <label className="m-2 border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("parking")}
          name="parking"
          onChange={checkboxClick}
        />
        <span>Free Parking</span>
      </label>
      <label className="m-2 border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("tv")}
          name="tv"
          onChange={checkboxClick}
        />
        <span>TV</span>
      </label>
      <label className="m-2  border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <FaSwimmingPool />
        <input
          type="checkbox"
          checked={selected.includes("pool")}
          name="pool"
          onChange={checkboxClick}
        />
        <span>Pool</span>
      </label>
      <label className="m-2 border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <input
          type="checkbox"
          checked={selected.includes("pets")}
          name="pets"
          onChange={checkboxClick}
        />
        <span>Pets</span>
      </label>
    </>
  );
}
