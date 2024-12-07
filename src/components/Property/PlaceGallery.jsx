import { useState } from "react";
import PropTypes from "prop-types";
import { IoImageSharp } from "react-icons/io5";
import CarouselComp from "./Carousel";

export default function PlaceGallery({ place }) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  function showAllPhotosGrid(photos) {
    const rows = []; // Array to hold rows of elements

    for (let i = 0; i < photos.length; i++) {
      rows.push(
        <div className="flex flex-col gap-3" key={`row-${i}`}>
          <img
            className="aspect-rectangle object-cover w-full h-full"
            src={`http://localhost:4000/uploads/${photos[i]}`}
            alt={`Photo ${i}`}
          />
          <div className="flex flex-row gap-3">
            {photos.slice(i + 1, i + 3).map((photo, index) => (
              <img
                key={`photo-${i}-${index}`}
                className="aspect-rectangle object-cover w-full h-full"
                src={`http://localhost:4000/uploads/${photo}`}
                alt={`Photo ${index}`}
              />
            ))}
          </div>
        </div>
      );
      i += 2; // Skip the photos already added in the flex row
    }

    return <div className="grid">{rows}</div>;
  }

  if (showAllPhotos) {
    return (
      <div className="z-10 absolute inset-0 bg-black text-white min-w-full min-h-screen">
        <div className="bg-black p-8 grid gap-4 items-center justify-center">
          <div>
            <h2 className="text-3xl">Photos of {place.title}</h2>
            <button
              onClick={() => setShowAllPhotos(false)}
              className="bg-gray-200 text-black right-10 top-8 shadow shadow-white fixed flex gap-1 py-2 px-4 rounded-2xl"
            >
              Close
            </button>
          </div>
          {place?.photos?.length > 0 && showAllPhotosGrid(place.photos)}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="flex lg:hidden items-center justify-center">
        <CarouselComp place={place} setShowAllPhotos={setShowAllPhotos} />
      </div>
      <div className="hidden lg:grid rounded-2xl overflow-hidden gap-2  grid-cols-[1fr_1fr] ">
        <div>
          {place.photos?.[0] && (
            <div>
              <img
                onClick={() => setShowAllPhotos(true)}
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
                onClick={() => setShowAllPhotos(true)}
                className="cursor-pointer  aspect-rectangle "
                src={"http://localhost:4000/uploads/" + place.photos?.[1]}
                alt=""
              />
            )}

            {place.photos?.[2] && (
              <img
                onClick={() => setShowAllPhotos(true)}
                className="cursor-pointer aspect-rectangle object-cover relative top-2"
                src={"http://localhost:4000/uploads/" + place.photos?.[2]}
                alt=""
              />
            )}
          </div>

          <div className="">
            {place.photos?.[3] && (
              <img
                onClick={() => setShowAllPhotos(true)}
                className="cursor-pointer aspect-rectangle"
                src={"http://localhost:4000/uploads/" + place.photos?.[3]}
                alt=""
              />
            )}

            {place.photos?.[4] && (
              <img
                onClick={() => setShowAllPhotos(true)}
                className="cursor-pointer aspect-rectangle object-cover relative top-2"
                src={"http://localhost:4000/uploads/" + place.photos?.[4]}
                alt=""
              />
            )}
          </div>
        </div>
      </div>
      <button
        onClick={() => setShowAllPhotos(true)}
        className=" hidden lg:flex  gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow-md shadow-gray-500"
      >
        Show More
        <IoImageSharp />
      </button>
    </div>
  );
}

PlaceGallery.propTypes = {
  place: PropTypes.shape({
    title: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
