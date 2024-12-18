import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import AccountNavigation from "../components/AccountPage/AccountNavigation";
// import PlaceImg from "../components/Property/PlaceImg";

import PlaceImg from "../../../components/Property/PlaceImg";
import AccountBreadcrumb from "../../../components/AccountPage/BreadCrumb";
// import PlacesFormPage from "./PlacesFormPage";

export default function PlacesPage() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("/user-places").then(({ data }) => {
      setPlaces(data);
    });
  }, []);

  return (
    <div>
      <AccountBreadcrumb title="Your Places" />
      <br />
      List of all your added places.
      <br />
      <div className="mt-4 cursor-pointer">
        {places.length > 0 &&
          places.map((place) => (
            <Link
              to={"/account/places/" + place._id}
              className="mb-4  flex gap-4   rounded-2xl"
              key={place._id}
            >
              <div className=" rounded-md flex file:w-32 h-32   shrink-0">
                <PlaceImg place={place} />
              </div>
              <div>
                <h2 className="text-xl">{place.title}</h2>
                <p>{place.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
