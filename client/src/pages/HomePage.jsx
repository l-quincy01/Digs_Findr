import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import PopularAgents from "../components/Shared/PopularAgents";
import PropertyCards from "../components/Shared/PropertyCards";

export default function HomePage() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces(response.data);
    });
  }, []);

  return (
    <>
      <PopularAgents />

      <div>
        <div className=" px-5 md:px-20  gap-8 gap-y-10  grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {places.length > 0 &&
            places.map((place) => (
              <PropertyCards
                key={place._id}
                placeID={place._id}
                photos={place.photos}
                title={place.title}
                address={place.address}
                propertyType={place.propertyType}
                webRef={place.webRef}
                availability={place.availability}
                price={place.price}
                placeOffers={place.placeOffers}
                preferredTenants={place.preferredTenants}
              />
            ))}
        </div>
      </div>
    </>
  );
}
