import { LuSquareUser } from "react-icons/lu";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import AccountNavigationCards from "../../components/AccountPage/AccountNavigationCards";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const AccountNavigationCardsList = [
  {
    iconComponent: <FiUsers />,
    link: "/account",
    title: "Account",
    description: "Provide personal details and how we can reach you",
  },
  {
    iconComponent: <FiUsers />,
    link: "/account/bookings",
    title: "Your Places",
    description: "Digs you've lived in.",
  },
  {
    iconComponent: <FiUsers />,
    link: "/account/places/new",
    title: "Add A Place",
    description: "Add a new digs.",
  },
];

export default function AccountIndex() {
  const { user } = useContext(UserContext);

  return (
    <div className="flex flex-col gap-y-8 justify-start items-start">
      <div className="flex flex-col justify-start items-start">
        <div className="text-2xl font-bold">Account</div>
        {user ? (
          <span className="flex flex-row text-md ">
            <div className="mr-2 font-semibold">{user.name},</div>
            <div>{user.email}</div>
          </span>
        ) : (
          <div className="text-gray-500">User information not available</div>
        )}
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3  gap-4">
          {AccountNavigationCardsList.map((item, index) => (
            <AccountNavigationCards
              key={index}
              iconComponent={item.iconComponent}
              link={item.link}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
