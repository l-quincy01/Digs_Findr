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
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { Navigate } from "react-router";

export default function RegisterPopup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [governmentID, setGovernmentID] = useState("");
  const [gender, setGender] = useState("");
  const [userAddress, setUserAddress] = useState("");

  async function registerUser(ev: any) {
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
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-row gap-2 pl-3">
          {" "}
          Dont have an account?
          <div className="underline">Register Here</div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle> Register</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
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
          <div className="grid grid-cols-4 items-center gap-4">
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
          <div className="flex flex-row gap-2 pl-3">
            {" "}
            Have an account?
            <div className="underline">Login Here</div>
          </div>
        </div>

        <DialogFooter>
          <Button type="submit" onClick={loginFunc}>
            Login
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
