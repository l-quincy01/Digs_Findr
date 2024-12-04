import { IoStarSharp } from "react-icons/io5";

export default function Comments({ amount }) {
  // Assuming amount is the number of times the comment should be repeated
  const comments = [];
  for (let i = 0; i < amount; i++) {
    comments.push(
      <div key={i} className="flex-row mb-10">
        <div className="flex items-center">
          <img
            className="rounded-full w-1/6"
            src="https://digsconnect.imgix.net/profile_pictures/image_cropper_1599924511152.jpg?fit=crop&h=200&ixlib=python-4.0.0&w=200"
            alt=""
          />
          <div className="m-3">
            <div className="font-semibold">Name</div>
            <div className="">Campus</div>
            <div className="">Years on Digs FiNDR</div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp /> <span className="mx-2">· </span>2024 Jan
          </div>
          <div className="border-t mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
    );
  }

  return <div>{comments}</div>;
}
