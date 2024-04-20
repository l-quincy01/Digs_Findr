import { Link } from "react-router-dom";
import { UserContext } from "./UserContext.jsx";
import { useContext } from "react";
export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <header className=" z-10 px-6 sticky top-0 bg-white h-40 w-full items-center flex space-y-8  justify-between shadow-lg">
      <Link to={"/"} className="flex items-center gap-1">
        <span className="font-bold text-2xl">Digs Findr</span>
      </Link>

      <div className=" relative  w-2/5 flex items-center justify-center gap-2 border border-gray-300 rounded-full p-2 shadow-md shadow-gray-300">
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
    </header>
  );
}
