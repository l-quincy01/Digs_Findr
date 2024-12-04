import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext.jsx";
import { useContext, useState } from "react";
import { IoFilterOutline, IoSearch } from "react-icons/io5";

import { GiWindmill } from "react-icons/gi";
import { FaHouse } from "react-icons/fa6";

import { BsGrid3X3Gap } from "react-icons/bs";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { PiHouseLight } from "react-icons/pi";

import { BsHouses } from "react-icons/bs";

import { ModeToggle } from "../../components/Shared/Mode-toggle.tsx";

// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "../../components/ui/sheet.tsx";
import { Button } from "../../components/ui/button.tsx";
import { useTheme } from "../Providers/ThemeProvider.tsx";

export default function Header() {
  const { user } = useContext(UserContext);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { theme } = useTheme();

  const categories = [
    {
      label: "View All",
      icon: BsGrid3X3Gap,
      description: "All properties available!",
    },
    {
      label: "Listed Digs",
      icon: PiHouseLight,
      description: "This property is has windmills!",
    },
    {
      label: "Explore Rentals",
      icon: BsHouses,
      description: "Rental Agencies around!",
    },
    // {
    //   label: "map",
    //   icon: FaRegMap,
    //   description: "This property is in the countryside!",
    // },
  ];

  return (
    <header className="flex h-20 w-full flex-col gap-y-8 p-4 md:p-6 mb-8">
      {/* Navbar Small Screen */}
      <Sheet>
        <div className="lg:hidden flex flex-row items-center justify-between">
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <ModeToggle />
        </div>
        <SheetContent side="left">
          <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      {/* Navbar Large Screen */}
      <nav className="w-full hidden lg:flex gap-6 items-center justify-between">
        <Link
          to={"/"}
          className="hidden lg:flex flex-row gap-x-4"
          prefetch={false}
        >
          <MountainIcon className="h-6 w-6" />
          <div className="text-xl font-semibold">Digs Findr</div>
        </Link>
        <div className="">
          <Link
            href="#"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="#"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            Contact
          </Link>
        </div>
        <div className=" flex flex-row items-center gap-x-6">
          <Button>Sign Up</Button>

          <ModeToggle />
        </div>
      </nav>

      <div className="flex flex-col  gap-y-8 items-center">
        <div className="text-3xl font-extrabold">Explore places to rent.</div>

        <div className="relative items-center pr-4  w-1/2  rounded-xl flex flex-row gap-3 border border-gray-300   ">
          <input
            className={`rounded-xl  w-full py-2 px-4  shadow-sm focus:outline-none ${
              theme === "light" ? "bg-white" : "bg-gray-900"
            }`}
            type="search"
            placeholder="Search"
          />

          <IoSearch className="cursor-pointer " />

          <IoFilterOutline className="cursor-pointer" />
        </div>

        <div className=" gap-5 flex  flex-col  items-center  justify-center w-full  px-3  hover:text-neutral-800 transition cursor-pointer">
          <div className="flex flex-row justify-between gap-x-16 truncate">
            {categories.map(({ label, icon: IconComponent }) => (
              <Link
                // to={label === "all" ? "/" : "/" + label}
                key={label}
                onClick={() =>
                  setSelectedCategory(label === selectedCategory ? null : label)
                }
                className={`flex flex-row gap-x-2 justify-center items-center hover:border-b-2 hover:border-b-gray-400 border-b-2${
                  label === selectedCategory
                    ? " border-b-2 border-b-black"
                    : " border-transparent"
                }`}
              >
                <IconComponent size={16} />
                <div className=" font-light text-sm">
                  {label.toString().charAt(0).toUpperCase() +
                    label.substring(1)}
                </div>
              </Link>
            ))}
          </div>
          <div className=" absolute right-6 p-3  flex flex-row justify-between items-center "></div>
        </div>
      </div>
    </header>

    /* <div className="py-4  border-b-[1px] ">
        <div className=" xl:px-20 md:px-10 sm:px-2 px-2">
          <div className="flex flex-row  items-center  justify-between gap-6 md:gap-0">
            <Link to={"/"} className="flex items-center gap-1">
              <span className="font-bold text-2xl">Digs Findr</span>
            </Link>

            <div className="relative items-center pr-4  w-1/2 mx-auto rounded-xl flex flex-row gap-3 border border-gray-300  ">
              <input
                className=" rounded-xl  w-full py-2 px-4  shadow-sm focus:outline-none "
                type="search"
                placeholder="Search"
              />

              <IoSearch className="cursor-pointer " />

              <IoFilterOutline className="cursor-pointer" />
            </div>

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

          <div className=" gap-5 mt-4 flex  flex-col  items-center  justify-center w-full pt-3 px-3  hover:text-neutral-800 transition cursor-pointer">
            <div className="flex flex-row justify-between gap-x-16 truncate">
              {categories.map(({ label, icon: IconComponent }) => (
                <Link
                  to={label === "all" ? "/" : "/" + label}
                  key={label}
                  onClick={() =>
                    setSelectedCategory(
                      label === selectedCategory ? null : label
                    )
                  }
                  className={`flex flex-col items-center text-gray-500 border-b-2${
                    label === selectedCategory
                      ? " border-b-2 border-b-gray-500"
                      : " border-transparent"
                  }`}
                >
                  <IconComponent size={26} />
                  <div className=" font-light text-sm">
                    {label.toString().charAt(0).toUpperCase() +
                      label.substring(1)}
                  </div>
                </Link>
              ))}
            </div>
            <div className=" absolute right-6 p-3  flex flex-row justify-between items-center ">
            
            </div>
          </div>
        </div>
      </div> */
  );

  function MenuIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    );
  }

  function MountainIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    );
  }
}
