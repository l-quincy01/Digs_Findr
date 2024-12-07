import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [governmentID, setGovernmentID] = useState("");
  const [gender, setGender] = useState("");
  const [userAddress, setUserAddress] = useState("");

  async function registerUser(ev) {
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
    <div className=" mt-4 grow flex items-center justify-around h-4/5">
      <div className="mb-64">
        <h1 className=" text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto " onSubmit={registerUser}>
          <span className="mt-4">Name</span>
          <input
            type="text"
            placeholder="John Appleseed"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <span className="mt-4">Email</span>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <span className="mt-4">Password</span>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <span className="mt-4">Phone Number</span>
          <input
            type="text"
            placeholder="+27 81 123 4567"
            value={phoneNumber}
            onChange={(ev) => setPhoneNumber(ev.target.value)}
          />
          <span className="mt-4">Government ID</span>
          <input
            type="text"
            placeholder="Government ID"
            value={governmentID}
            onChange={(ev) => setGovernmentID(ev.target.value)}
          />
          <span className="mt-4">Gender</span>
          <br />
          <select
            className="border mb-4 mt-2 rounded-lg p-1"
            value={gender}
            onChange={(ev) => setGender(ev.target.value)}
          >
            <option value="Not Specified">Not Specified</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />
          <span className="mt-4">Street Address</span>
          <input
            type="text"
            placeholder="46 Mampuru Street"
            value={userAddress}
            onChange={(ev) => setUserAddress(ev.target.value)}
          />

          <button className="primary">Register</button>
          <div>
            {" "}
            Already a member?
            <Link className="underline" to={"/login"}>
              Login Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
