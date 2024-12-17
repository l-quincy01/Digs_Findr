import { useContext, useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { UserContext } from "../../context/UserContext";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import axios from "axios";
import { Avatar } from "../ui/avatar";
import AvatarComp from "../Navbar/Avatar";
import AvatarCompProfile from "./AvatarCompProfile";

export default function AccountProfile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [governmentID, setGovernmentID] = useState("");
  const [gender, setGender] = useState("");
  const [userAddress, setUserAddress] = useState("");

  const registerUser = async (ev: any) => {
    ev.preventDefault();

    try {
      await axios.post("/register", {
        name,
        email,
        password,
        phoneNumber,
        governmentID,
        gender,
        userAddress,
      });
      alert("Registration successful");
    } catch (error) {
      alert("Registration Failed. Try again later");
    }
  };

  return (
    <div className="flex flex-col items-start w-full space-x-6 px-6">
      <div className="  text-3xl font-bold">Account</div>
      <div className="flex flex-col items-center justify-center w-full">
        <Card className="w-3/5">
          <CardHeader className=" flex items-center justify-center">
            <AvatarCompProfile />
          </CardHeader>

          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                className="col-span-3"
                type="text"
                placeholder="John Appleseed"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name" className="text-right">
                Email
              </Label>
              <Input
                className="col-span-3"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="name" className="text-right">
                Password
              </Label>
              <Input
                className="col-span-3"
                type="password"
                placeholder="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name" className="text-right">
                Phone Number
              </Label>
              <Input
                className="col-span-3"
                type="text"
                placeholder="+27 81 123 4567"
                value={phoneNumber}
                onChange={(ev) => setPhoneNumber(ev.target.value)}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name" className="text-right">
                Gender
              </Label>
              <Select
                defaultValue=""
                onValueChange={(ev) => setGender(ev.target.value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Gender</SelectLabel>
                    <SelectItem value="apple">Male</SelectItem>
                    <SelectItem value="banana">Female</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label htmlFor="name" className="text-right">
                Government ID
              </Label>
              <Input
                className="col-span-3"
                type="text"
                placeholder="Government ID"
                value={governmentID}
                onChange={(ev) => setGovernmentID(ev.target.value)}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="name" className="text-right">
                Street Address
              </Label>
              <Input
                className="col-span-3"
                type="text"
                placeholder="49 Apple Street, Pretoria"
                value={userAddress}
                onChange={(ev) => setUserAddress(ev.target.value)}
              />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col items-start space-y-5">
            <div className="text-sm text-gray-500">
              Edit Your Account Details And Save.
            </div>
            <Button
              className="flex-grow w-full"
              type="submit"
              onClick={registerUser}
            >
              Save Details
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>

    // <Tabs defaultValue="account" className="w-full  ">
    //   <TabsList className="grid w-full grid-cols-1">
    //     <TabsTrigger value="accountProfile">Account Profile</TabsTrigger>
    //   </TabsList>
    //   <TabsContent value="accountProfile">

    //   </TabsContent>

    //   <TabsContent value="Your Accomodations">

    //     </TabsContent>

    // </Tabs>
  );
}
