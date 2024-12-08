import { ReactNode, useContext, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { Navigate } from "react-router";
import RegisterPopup from "./RegisterPopup";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export default function LoginPopup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [governmentID, setGovernmentID] = useState("");
  const [gender, setGender] = useState("");
  const [userAddress, setUserAddress] = useState("");

  // const [registerOpen, setRegisterOpen] = useState(false);

  // const handleRegisterOpen = () => {
  //   setRegisterOpen(true);
  // };
  // const handleRegisterClose = () => {
  //   setRegisterOpen(false);
  // };

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

  const loginFunc = async (ev: any) => {
    ev.preventDefault();
    try {
      const { data } = await axios.post("/login", { email, password });
      setUser(data);
      alert("Login successful");
      setRedirect(true);
    } catch (e) {
      alert("Login Error");
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle> Welcome to Digs Findr</DialogTitle>
        </DialogHeader>
        {/* CONETENT */}
        <div className="">
          <Tabs defaultValue="account" className="">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Login</TabsTrigger>
              <TabsTrigger value="password">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardDescription>Log into your account.</CardDescription>
                </CardHeader>

                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name" className="text-right">
                      Email
                    </Label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(ev) => setEmail(ev.target.value)}
                      className="col-span-3"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username" className="text-right">
                      Password
                    </Label>
                    <Input
                      type="password"
                      placeholder="password"
                      value={password}
                      onChange={(ev) => setPassword(ev.target.value)}
                      className="col-span-3"
                    />
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col items-start space-y-5">
                  <div className="text-sm text-gray-500">
                    By continuing Agree and continue, You agree to our Terms of
                    Service and Privacy Policy.
                  </div>
                  <Button
                    className="flex-grow w-full"
                    type="submit"
                    onClick={loginFunc}
                  >
                    Login
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="password">
              <Card>
                <CardHeader>
                  <CardDescription>Sign into your account.</CardDescription>
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
                    By continuing Agree and continue, You agree to our Terms of
                    Service and Privacy Policy.
                  </div>
                  <Button
                    className="flex-grow w-full"
                    type="submit"
                    onClick={registerUser}
                  >
                    Login
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        {/* CONETENT */}

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
