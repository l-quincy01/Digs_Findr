import PropTypes from "prop-types";

import { PiStudentBold, PiUsersThree } from "react-icons/pi";

import { FaRegUser } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

// Inside your functional component:
PrefferedTenants.propTypes = {
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function PrefferedTenants({ selected, onChange }) {
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
        <FaRegUser />
        <input
          type="checkbox"
          checked={selected.includes("Undergraduate")}
          name="Undergraduate"
          onChange={checkboxClick}
        />
        <span>Undergraduate</span>
      </label>

      <label className="m-2 border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <PiStudentBold />
        <input
          type="checkbox"
          checked={selected.includes("Post Graduate")}
          name="Post Graduate"
          onChange={checkboxClick}
        />
        <span>Post Graduate</span>
      </label>

      <label className="m-2 border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <PiUsersThree />
        <input
          type="checkbox"
          checked={selected.includes("Young Professionals")}
          name="Young Professionals"
          onChange={checkboxClick}
        />
        <span>Young Professionals</span>
      </label>

      <label className="m-2 border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <BsPersonLinesFill />
        <input
          type="checkbox"
          checked={selected.includes("Exchange Student")}
          name="Exchange Student"
          onChange={checkboxClick}
        />
        <span>Exchange Student</span>
      </label>

      <label className="m-2 border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
        <FaRegUser />
        <input
          type="checkbox"
          checked={selected.includes("Other")}
          name="Other"
          onChange={checkboxClick}
        />
        <span>Other</span>
      </label>
    </>
  );
}
