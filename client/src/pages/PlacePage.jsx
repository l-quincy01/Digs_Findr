import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import LocationAddress from "../LocationAddress";

export default function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    if (!id) return;
    axios.get("/places/" + id).then((response) => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) return "";

  return (
    <div className=" mt-4 mx-8 px-12 pt-4 ">
      {/* <h1 className="text-2xl">{place.title}</h1> */}
      {/* <LocationAddress>{place.address}</LocationAddress> */}
      <div className="w-full h-full">
        <PlaceGallery place={place} />
      </div>

      <div className=" mt-8 gap-8 grid grid-cols-1  md:grid-cols-[2fr_1fr]">
        <div>
          <h1 className="text-2xl">{place.title}</h1>
          <div className="my-4">
            <h2 className="fonr-semibold text-2xl">Description</h2>
            {place.description}
          </div>
          {/* Check-in: {place.checkIn} <br />
          Check-out: {place.checkOut} <br />
          Max number of guests: {place.maxGuests} */}
        </div>
        <BookingWidget place={place} />
        <div className="mt-2 text-sm gray-800 leading-4">
          <h2 className="fonr-semibold text-2xl">Things to know</h2>
          {place.extraInfo}
        </div>
      </div>
    </div>
  );
}
