import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect, useState } from "react";
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
import { FaRegUser, FaRegUserCircle } from "react-icons/fa";
import { LuCircleUser } from "react-icons/lu";
import { AvatarDropdownMenu } from "./Avatar.jsx";

export default function Header() {
  const { user } = useContext(UserContext);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { theme } = useTheme();

  const [isScrolled, setIsScrolled] = useState(false);

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
  ];

  useEffect(() => {
    //if (isScrolled) return;

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else if (window.scrollY < 100) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <header className={`flex h-20 w-full flex-col gap-y-8 p-4 md:p-6 mb-8`}>
      {/* Navbar Small Screen */}
      <Sheet>
        <div
          className={`lg:hidden w-full flex flex-row items-center justify-between ${
            isScrolled
              ? theme === "light"
                ? "fixed bg-white h-20 top-0 shadow-md border-b border-gray-300 left-0 px-8 z-50"
                : "fixed bg-black h-20 top-0 shadow-md border-b border-gray-300 left-0 px-8 z-50"
              : ""
          }`}
        >
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <Link
            to={"/"}
            className={` lg:flex flex-row gap-x-4 ${
              isScrolled === true ? "hidden" : "flex"
            }`}
            prefetch={false}
          >
            <MountainIcon className="h-6 w-6" />
            <div className="text-xl font-semibold">Digs Findr</div>
          </Link>
          <div
            className={`relative items-center pr-4  w-1/2  rounded-xl flex  flex-row gap-3 border border-gray-300 ${
              isScrolled === true ? "flex" : "hidden"
            } `}
          >
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
          {/* <ModeToggle /> */}
          <div className="">
            <LuCircleUser size={24} />
          </div>
        </div>
        <SheetContent side="left">
          <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="top-2 fixed">
            <ModeToggle className="" />
          </div>
          <div className="grid gap-2 py-6">
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Homme
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
      <nav
        className={`left-0 w-full hidden lg:flex gap-6 items-center justify-between  ${
          isScrolled
            ? theme === "light"
              ? "w-full fixed bg-white h-20 top-0 shadow-md border-b border-gray-300  px-8 z-50"
              : " w-full fixed bg-black h-20 top-0 shadow-md border-b border-gray-300 px-8 z-50"
            : ""
        }`}
      >
        <Link
          to={"/"}
          className="hidden lg:flex flex-row gap-x-4"
          prefetch={false}
        >
          <MountainIcon className="h-6 w-6" />
          <div className="text-xl font-semibold">Digs Findr</div>
        </Link>

        <div
          className={`relative items-center pr-4  w-1/4  rounded-xl  flex-row gap-3 border border-gray-300 ${
            isScrolled === false ? "hidden" : "flex"
          }`}
        >
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

        <div className="">
          <Link
            href="#"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
          >
            Add A Place
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
            Contact
          </Link>
        </div>
        <div className=" flex flex-row items-center gap-x-6">
          {user ? (
            <div className="mr-4">
              <AvatarDropdownMenu />
              {/* {user.name} */}
            </div>
          ) : (
            <Link className="cursor-pointer" to={user ? "/account" : "/login"}>
              <Button>Sign Up</Button>
            </Link>
          )}

          <ModeToggle />
        </div>
      </nav>

      <div className="flex flex-col  gap-y-8 items-center">
        <div className="text-3xl font-extrabold">Explore places to rent.</div>

        <div
          className={`relative items-center pr-4  w-1/2  rounded-xl  flex-row gap-3 border border-gray-300 ${
            isScrolled === true ? "hidden" : "flex"
          }`}
        >
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
