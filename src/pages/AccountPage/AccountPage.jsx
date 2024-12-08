import axios from "axios";
import { useContext, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext.tsx";
import AccountNavigation from "../../components/AccountPage/AccountNavigation";

import PlacesPage from "./UserProperty/PlacesPage";

import ProfileForm from "../../components/Shared/Form.tsx";
import { Button } from "../../components/ui/button.tsx";
import AvatarComp from "../../components/Navbar/Avatar.tsx";
import AccountProfile from "../../components/AccountPage/AccountProfile.tsx";

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
      <div className="flex flex-row items-center justify-center ">
        <div className=" w-full md:w-1/2  flex items-center justify-center">
          <AccountProfile />
        </div>
      </div>

      <div className="text-xl mt-10 font-semibold">Delete Your Account</div>
      <div className="text-md text--gray-500 ">
        {" "}
        Request your account to be deleted here.
      </div>
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto mt-5">
          <Button onClick={logout} className="">
            Delete Account
          </Button>
        </div>
      )}
      {subpage === "places" && <PlacesPage />}
    </>
  );
}
