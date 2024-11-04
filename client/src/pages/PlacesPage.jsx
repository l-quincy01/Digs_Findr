import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AccountNavigation from "./AccountNavigation";
import PlaceImg from "../components/PlaceImg";
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
      <AccountNavigation />
      <br />
      List of all your added places
      <br />
      <div className="text-centre">
        <Link
          className="inline-flex gap-1 bg-primary text-white py-2 px-4 rounded-full"
          to={"/account/places/new"}
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add new place
        </Link>
      </div>
      <div className="mt-4 cursor-pointer">
        {places.length > 0 &&
          places.map((place) => (
            <Link
              to={"/account/places/" + place._id}
              className="mb-4  flex gap-4 bg-gray-100 p-4 rounded-2xl"
              key={place._id}
            >
              <div className=" rounded-md flex file:w-32 h-32 bg-gray-200  shrink-0">
                <PlaceImg place={place} />
              </div>
              <div>
                <h2 className="text-xl">{place.title}</h2>
                <p>{place.description}</p>
              </div>
            </Link>
          ))}
      </div>
      {/* {action === 'new' && (  http://localhost:4000/uploads/de59a5640119f51b62ea106d52c2de52.jpg
             <PlacesFormPage />
            )}  */}
    </div>
  );
}
