import { useState } from "react";
import PropTypes from "prop-types";
import { IoImageSharp } from "react-icons/io5";
import CarouselComp from "./Carousel";
import PlaceGalleryFull from "./PlaceGalleryFull";

export default function PlaceGallery({ place }) {
  return (
    <div className="relative">
      <div className="flex lg:hidden items-center justify-center">
        <CarouselComp place={place} />
      </div>
      <div className="hidden lg:grid rounded-2xl overflow-hidden gap-2  grid-cols-[1fr_1fr] ">
        <div>
          {place.photos?.[0] && (
            <div>
              <img
                className="cursor-pointer  aspect-rectangle "
                src={"http://localhost:4000/uploads/" + place.photos?.[0]}
                alt=""
              />
            </div>
          )}
        </div>

        <div className=" grid grid-cols-2 gap-2  ">
          <div className="">
            {place.photos?.[1] && (
              <img
                className="cursor-pointer  aspect-rectangle "
                src={"http://localhost:4000/uploads/" + place.photos?.[1]}
                alt=""
              />
            )}

            {place.photos?.[2] && (
              <img
                className="cursor-pointer aspect-rectangle object-cover relative top-2"
                src={"http://localhost:4000/uploads/" + place.photos?.[2]}
                alt=""
              />
            )}
          </div>

          <div className="">
            {place.photos?.[3] && (
              <img
                className="cursor-pointer aspect-rectangle"
                src={"http://localhost:4000/uploads/" + place.photos?.[3]}
                alt=""
              />
            )}

            {place.photos?.[4] && (
              <img
                className="cursor-pointer aspect-rectangle object-cover relative top-2"
                src={"http://localhost:4000/uploads/" + place.photos?.[4]}
                alt=""
              />
            )}
          </div>
        </div>
      </div>
      <div className=" hidden lg:flex  gap-1 absolute bottom-2 right-2 py-2 px-4 flex-row items-center justify-center rounded-2xl shadow-md shadow-gray-500">
        <PlaceGalleryFull place={place} />
      </div>
    </div>
  );
}

PlaceGallery.propTypes = {
  place: PropTypes.shape({
    title: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

{
  /*
  
    {place?.photos?.length > 0  && (

      
    )}*/
}
