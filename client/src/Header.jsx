import { Link } from "react-router-dom";
import { UserContext } from "./UserContext.jsx";
import { useContext } from "react";
import { IoFilterOutline, IoSearch } from "react-icons/io5";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { LuSettings2 } from "react-icons/lu";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import { BsGrid3X3Gap } from "react-icons/bs";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { FaRegMap } from "react-icons/fa";
export default function Header() {
  const { user } = useContext(UserContext);

  const categories = [
    {
      label: "All",
      icon: BsGrid3X3Gap,
      description: "All properties available!",
    },
    {
      label: "Digs Findr",
      icon: GiWindmill,
      description: "This property is has windmills!",
    },
    {
      label: "Rental Agencies",
      icon: MdOutlineRealEstateAgent,
      description: "Rental Agencies around!",
    },
    {
      label: "Map",
      icon: FaRegMap,
      description: "This property is in the countryside!",
    },
  ];

  return (
    <header className=" fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4  border-b-[1px]">
        <div className=" xl:px-20 md:px-10 sm:px-2 px-2">
          <div className="flex flex-row  items-center  justify-between gap-6 md:gap-0">
            {/* Logo */}
            <Link to={"/"} className="flex items-center gap-1">
              <span className="font-bold text-2xl">Digs Findr</span>
            </Link>
            {/* Search */}

            <div className="relative items-center pr-4  w-1/2 mx-auto rounded-xl flex flex-row gap-3 border border-gray-300  ">
              <input
                className=" rounded-xl  w-full py-2 px-4  shadow-sm focus:outline-none "
                type="search"
                placeholder="Search"
              />

              <IoSearch className="cursor-pointer " />

              <IoFilterOutline className="cursor-pointer" />
            </div>

            {/* User Menu */}
            <div className=" hidden md:block text-sm  font-semibold  p-3 rounded-full  hover:bg-neutral-100  transition  cursor-pointer">
              Become a Landlord
            </div>
            <Link
              to={user ? "/account" : "/login"}
              className="flex items-center gap-2 border border-gray-300 rounded-full p-2 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>

              <div className="bg-gray-500 text-white rounded-full border-gray-500 overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 relative top-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              {!!user && <div>{user.name}</div>}
            </Link>
          </div>
          <div className=" gap-5 mt-4 flex  flex-row  items-center  justify-center w-full pt-3 px-3  hover:text-neutral-800 transition cursor-pointer">
            <div className="flex flex-row justify-between gap-x-16 truncate">
              {categories.map(({ label, icon: IconComponent }) => (
                <div
                  key={label}
                  className={`flex flex-col items-center text-gray-500  ${
                    selected ? "border-b-neutral-800" : "border-transparent"
                  }`}
                >
                  <IconComponent size={26} />
                  <div className=" font-light text-sm">{label}</div>
                </div>
              ))}
            </div>
            <div className=" absolute right-6 p-3 border border-gray-400 rounded-xl flex flex-row justify-between items-center gap-2">
              <LuSettings2 />
              <span className="font-light text-sm">Filter</span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" relative  w-2/5 flex items-center justify-center gap-2 border border-gray-300 rounded-full p-2 shadow-md shadow-gray-300">
        <input
          type="text"
          className="h-full w-full flex bg-transparent outline-none border-none"
          placeholder="Search by university, city or suburb"
        />

        <button className="bg-primary text-white p-2 rounded-full">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div> */}
    </header>
  );
}
