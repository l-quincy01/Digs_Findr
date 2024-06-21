import React from "react";
import { GoogleMap, useJsApiLoader, OverlayView } from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import { Link } from "react-router-dom";
import { IoGridOutline } from "react-icons/io5";

const containerStyle = {
  width: "100vw",
  height: "100vh",
  position: "center",
};

export default function Map() {
  const libraries = ["places"];

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBXbKUn-9JqBvLeS7E94CYadiwP06KT8H4",
  });
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const rentalAgencyLocation = [
    {
      name: "Pamgolding Grahamstown!",
      lat: -33.31466,
      lng: 26.52339,
      price: "4500",
    },
    {
      name: "Remax!",
      lat: -33.3083,
      lng: 26.5221,
      price: "R3000",
    },
    {
      name: "Harcourts!",
      lat: -33.3122,
      lng: 26.5221,
      price: "R3500 ",
    },
    {
      name: "Just Letting",
      lat: -33.31072,
      lng: 26.52221,
      price: "R4000 ",
    },
    {
      name: "RealNet ",
      lat: -33.303,
      lng: 26.5189,
      price: "  R4200   ",
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

  const CustomMarker = ({ lat, lng, price }) => (
    <OverlayView
      position={{ lat, lng }}
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      className=" p-5 w-full"
    >
      <div className=" w-full text-black text-xs flex flex-row items-center justify-center bg-white rounded-2xl p-4 font-bold">
        {price}
      </div>
    </OverlayView>
  );

  return isLoaded ? (
    <>
      <div className="items-center justify-center flex px-10 rounded-lg">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {rentalAgencyLocation.map((place) => (
            <CustomMarker
              key={place.name}
              lat={parseFloat(place.lat)}
              lng={parseFloat(place.lng)}
              price={place.price}
              className="p-2"
            />
          ))}
        </GoogleMap>
      </div>
      <div className="inset-x-0 w-full bottom-10 fixed z-50 flex items-center justify-center">
        <button className="flex justify-center items-center gap-3 z-55 fixed bg-black text-white p-3 rounded-2xl">
          <Link to="/" className="flex justify-center items-center gap-3">
            Back to grid <IoGridOutline />
          </Link>
        </button>
      </div>
    </>
  ) : (
    <></>
  );
}
