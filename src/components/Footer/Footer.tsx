import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTheme } from "../Providers/ThemeProvider";

export default function Footer() {
  const theme = useTheme();
  return (
    <div id="footer" className=" p-5 ">
      <div className="flex flex-col space-y-6 p-10">
        <div className="flex flex-row space-x-12 justify-start">
          <ul className="space-y-4">
            <li className=" font-semibold">Digs Findr</li>
            <li>
              <ul className="space-y-2">
                <li className="cursor-pointer">About Us</li>
                <li className="cursor-pointer">Careers</li>

                <li className="cursor-pointer">Registration</li>
              </ul>
            </li>
          </ul>

          <ul className="space-y-4">
            <li className=" font-semibold">Support</li>
            <li>
              <ul className="space-y-2">
                <li className="cursor-pointer">Contact</li>
                <li className="cursor-pointer">FAQ</li>
              </ul>
            </li>
          </ul>

          <ul className="space-y-4">
            <li className=" font-semibold">Help Center</li>
            <li>
              <ul className="space-y-2">
                <li className="cursor-pointer">Privacy Policy</li>
                <li className="cursor-pointer">Terms of Service</li>
                <li className="cursor-pointer">Site Map</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t-2 flex flex-row justify-between  p-10 ">
        <div>© 2024 Digs Findr</div>
        <div>Pretoria, South Africa</div>
      </div>
    </div>
  );
}
