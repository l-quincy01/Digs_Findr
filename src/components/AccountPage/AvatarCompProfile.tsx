import { useContext } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Link } from "react-router-dom";

export default function AvatarCompProfile() {
  return (
    <Link to={"/account"}>
      <Avatar className=" scale-150">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </Link>
  );
}
