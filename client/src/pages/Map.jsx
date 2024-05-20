// import axios from "axios";
// import { useMemo, useState } from "react";
import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const containerStyle = {
  width: "100vw",
  height: "100vh",
  position: "center",
};

export default function Map() {
  const libraries = ["places"];

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDtMezHdKoQ_QphG8EyxcxckbJz2APoAj8", // Replace with your actual API key
  });
  const [map, setMap] = React.useState(null);
  // const [selectedLocation, setSelectedLocation] = useState(null);
  // const [nearbyPlaces, setNearbyPlaces] = useState([]);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  // const handleSearch = async (address) => {
  //   try {
  //     const results = await getGeocode({ address });
  //     const { lat, lng } = await getLatLng(results[0]);
  //     setSelectedLocation({ lat, lng });

  //     // Make API call to Nearby Places API
  //     const response = await axios.post(
  //       "https://places.googleapis.com/v1/places:searchNearby",
  //       {
  //         includedTypes: ["restaurant"],
  //         maxResultCount: 10,
  //         locationRestriction: {
  //           circle: {
  //             center: { latitude: lat, longitude: lng },
  //             radius: 500.0,
  //           },
  //         },
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "X-Goog-Api-Key": "AIzaSyDtMezHdKoQ_QphG8EyxcxckbJz2APoAj8",
  //           "X-Goog-FieldMask": "places.displayName",
  //         },
  //       }
  //     );

  //     setNearbyPlaces(response.data.results);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const rentalAgencyLocation = [
    {
      name: "Pamgolding Grahamstown!",
      lat: "-33.314660",
      lng: "26.523390",
    },
    {
      name: "Remax!",
      lat: "-33.3083",
      lng: "26.5221",
    },
    {
      name: "Harcourts!",
      lat: "-33.3122",
      lng: "26.5221",
    },
    {
      name: "Just Letting",
      lat: "-33.310720",
      lng: "26.522210",
    },
    {
      name: "RealNet ",
      lat: "-33.303000",
      lng: "26.518900",
    },
  ];

  let latSum = 0;
  let lngSum = 0;

  rentalAgencyLocation.forEach((place) => {
    latSum += parseFloat(place.lat);
    lngSum += parseFloat(place.lng);
  });

  const center = {
    lat: latSum / rentalAgencyLocation.length,
    lng: lngSum / rentalAgencyLocation.length,
  };

  return isLoaded ? (
    <>
      <h2 className=" text-xl text-center font-semibold content-center mb-3 ">
        RENTAL AGENCY
      </h2>
      <div className=" items-center justify-center flex  px-10 rounded-lg">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {rentalAgencyLocation.map((place) => (
            <Marker
              key={place.name}
              position={{
                lat: parseFloat(place.lat),
                lng: parseFloat(place.lng),
              }}
            />
          ))}
        </GoogleMap>
      </div>
    </>
  ) : (
    <></>
  );
}

// const PlacesAutocomplete = ({ onSelect }) => {
//   const {
//     ready,
//     value,
//     setValue,
//     suggestions: { status, data },
//     clearSuggestions,
//   } = usePlacesAutocomplete();

//   return (
//     <>
//       <Combobox onSelect={onSelect}>
//         <ComboboxInput
//           value={value}
//           onChange={(e) => {
//             setValue(e.target.value);
//             clearSuggestions();
//           }}
//           disabled={!ready}
//           className="w-100 p-2"
//           placeholder="Search an address"
//         />
//         <ComboboxPopover>
//           <ComboboxList>
//             {status === "OK" &&
//               data.map(({ place_id, description }) => (
//                 <ComboboxOption key={place_id} value={description} />
//               ))}
//           </ComboboxList>
//         </ComboboxPopover>
//       </Combobox>
//     </>
//   );
// };
