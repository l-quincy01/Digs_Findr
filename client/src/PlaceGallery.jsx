import { useState } from "react";
import PropTypes from "prop-types";

export default function PlaceGallery({ place }) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  if (showAllPhotos) {
    return (
      <div className=" z-10 absolute inset-0 bg-black text-white min-w-full min-h-screen ">
        <div className="bg-black p-8 grid gap-4 items-center justify-center ">
          <div>
            <h2 className="text-3xl">Photos of {place.title}</h2>
            <button
              onClick={() => setShowAllPhotos(false)}
              className="bg-gray-200 text-black right-10 top-8 shadow shadow-white fixed flex gap-1 py-2 px-4 rounded-2xl"
            >
              Close
            </button>
          </div>
          {place?.photos?.length > 0 &&
            place.photos.map((photo, index) => (
              <div key={index}>
                <img
                  className="aspect-rectangle object-cover  w-full h-full"
                  src={"http://localhost:4000/uploads/" + photo}
                  alt=""
                />
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className=" rounded-2xl overflow-hidden grid gap-2   grid-cols-[1fr_1fr] ">
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

          {/* <div className="overflow-hidden">
            {place.photos?.[3] && (
              <img
                onClick={() => setShowAllPhotos(true)}
                className="cursor-pointer aspect-square object-cover relative top-2"
                src={"http://localhost:4000/uploads/" + place.photos?.[3]}
                alt=""
              />
            )}
          </div>

          <div className="overflow-hidden">
            {place.photos?.[4] && (
              <img
                onClick={() => setShowAllPhotos(true)}
                className="cursor-pointer aspect-square object-cover relative top-2"
                src={"http://localhost:4000/uploads/" + place.photos?.[4]}
                alt=""
              />
            )}
          </div> */}
        </div>
      </div>
      <button
        onClick={() => setShowAllPhotos(true)}
        className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow-md shadow-gray-500"
      >
        Show More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
            clipRule="evenodd"
          />
        </svg>
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
