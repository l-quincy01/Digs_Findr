import axios from "axios";
import { useContext, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext.tsx";
import AccountNavigation from "../../components/AccountPage/AccountNavigation";

import PlacesPage from "./UserProperty/PlacesPage";

import ProfileForm from "../../components/Shared/Form.tsx";
import { Button } from "../../components/ui/button.tsx";
import AvatarComp from "../../components/Navbar/Avatar.tsx";

export default function AccountPage() {
  const [toHomePage, setToHomePage] = useState(null);

  const { ready, user, setUser } = useContext(UserContext);

  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  async function logout() {
    await axios.post("/logout");
    setToHomePage("/");
    setUser(null);
  }

  if (!ready) {
    return "Loading...";
  }
  if (ready && !user && !toHomePage) {
    return <Navigate to={"/login"} />;
  }

  if (toHomePage) {
    return <Navigate to={toHomePage} />;
  }

  return (
    <>
      <div className="flex flex-row ">
        {/* <AccountNavigation /> */}
        <AvatarComp className=" scale-150" />
        <div className=" grow px-20">
          <ProfileForm />
        </div>

        {/* <div className="grid grid-cols-[1fr_2fr] px-10 mx-10">
        <div className="border-r">
          <div className="flex-row mb-10">
            <div className="flex items-center">
              <img
                className="rounded-full w-1/6"
                src="https://digsconnect.imgix.net/profile_pictures/image_cropper_1599924511152.jpg?fit=crop&h=200&ixlib=python-4.0.0&w=200"
                alt=""
              />
              <div className="m-3">
                <div className="font-semibold flex items-center gap-3">
                  <MdOutlineVerified /> Account verified
                </div>
                <div className="font-semibold flex items-center gap-3">
                  <IoCalendarNumberOutline />
                  Joined 2024
                </div>
              </div>
            </div>
          </div>
        </div>

    
        <div className="mx-4">
          <div className="pb-4 ">
            {!showInputField && (
              <>
                <div className=" flex items-baseline justify-between">
                  <h2 className="text-md mt-4 flex-grow ">Legal Name</h2>

                  <div
                    className="underline flex-grow text-md cursor-pointer relative bottom-2 right-2"
                    onClick={handleShowInputField}
                  >
                    Edit
                  </div>
                </div>
                <span className="text-sm  text-gray-600 ">{user.name}</span>
                <div className=" flex items-baseline justify-between">
                  <h2 className="text-md mt-4 flex-grow ">Email Address</h2>

                  <div
                    className="underline flex-grow text-md cursor-pointer relative bottom-2 right-2"
                    onClick={handleShowInputField}
                  >
                    Edit
                  </div>
                </div>
                <span className="text-sm  text-gray-600 ">{user.email}</span>
                <div className=" flex items-baseline justify-between">
                  <h2 className="text-md mt-4 flex-grow "> Phone Number</h2>

                  <div
                    className="underline flex-grow text-md cursor-pointer relative bottom-2 right-2"
                    onClick={handleShowInputField}
                  >
                    Edit
                  </div>
                </div>
                <span className="text-sm  text-gray-600 ">
                  {user.phoneNumber}
                </span>
                <div className=" flex items-baseline justify-between">
                  <h2 className="text-md mt-4 flex-grow ">Government ID</h2>

                  <div
                    className="underline flex-grow text-md cursor-pointer"
                    onClick={handleShowInputField}
                  >
                    Edit
                  </div>
                </div>
                <span className="text-sm  text-gray-600 ">
                  {user.governmentID}
                </span>
                <div className=" flex items-baseline justify-between">
                  <h2 className="text-md mt-4 flex-grow ">Gender</h2>

                  <div
                    className="underline flex-grow text-md cursor-pointer"
                    onClick={handleShowInputField}
                  >
                    Edit
                  </div>
                </div>
                <span className="text-sm  text-gray-600 ">{user.gender}</span>
                <div className=" flex items-baseline justify-between">
                  <h2 className="text-md mt-4 flex-grow ">Address</h2>

                  <>
                    <div
                      className="underline flex-grow text-md cursor-pointer"
                      onClick={handleShowInputField}
                    >
                      Edit
                    </div>
                  </>
                </div>
                <span className="text-sm  text-gray-600 ">
                  {user.userAddress}
                </span>
              </>
            )}{" "}
   
            {showInputField && (
              <>
                <div className=" flex items-baseline justify-between">
                  <h2 className="text-md mt-4 flex-grow ">Legal Name</h2>

                  <>
                    <div
                      className="underline flex-grow text-md cursor-pointer"
                      onClick={handleHideInputField}
                    >
                      Close
                    </div>
                  </>
                </div>
                <div className="w-1/2">
                  <input
                    className=""
                    type="text"
                    value={user.name}
                    placeholder="Change Your name "
                  />
                </div>
              </>
            )}
          </div>
          <div className="border-b w-2/3"></div>
        </div>

      </div> */}
      </div>

      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto mt-5">
          <Button onClick={logout} className="">
            Logout
          </Button>
        </div>
      )}
      {subpage === "places" && <PlacesPage />}
    </>
  );
}
