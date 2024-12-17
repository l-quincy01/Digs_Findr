import { Button } from "../../components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Input } from "../../components/ui/input";

export default function ContactUs() {
  return (
    <div className="flex flex-col space-y-10  justify-center ">
      <h1 className="text-4xl font-bold"> Talk to us </h1>

      <div className="font-light flex flex-row space-x-4 w-full">
        <div className="flex flex-col justify-start  w-full">
          Name <Input id="name" type="text" className=" border-2  p-5" />
        </div>

        <div className="flex flex-col justify-start  w-full">
          E-mail
          <Input id="email" type="email" className="border-2  p-5" />
        </div>
      </div>

      <div className="font-light items-center flex flex-row space-x-4 w-full">
        <div className="flex flex-col justify-start  w-full">
          Your Contact Number
          <Input id="contactNumber" type="text" className="border-2  p-5" />
        </div>
        <div className="flex flex-col justify-start  w-full">
          Subject
          <Select>
            <SelectTrigger className="w-full p-2">
              <SelectValue placeholder="Select subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Subject</SelectLabel>
                <SelectItem value="Orders">Apple</SelectItem>
                <SelectItem value="Orders">Apple</SelectItem>
                <SelectItem value="Orders">Apple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-start">
          Details
          <textarea
            className=" border-2  p-10"
            name="details"
            id="details"
          ></textarea>
        </div>
      </div>
      <Button className=" p-5 rounded-lg  w-1/2">Send</Button>
    </div>
  );
}
