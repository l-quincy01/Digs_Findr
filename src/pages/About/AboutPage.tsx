import cyclist from "../../assets/images/About/cyclist.png";
import guitarist from "../../assets/images/About/guitarist.png";
import runner from "../../assets/images/About/runner.png";
import skater from "../../assets/images/About/skater.png";
import { PiBuildingApartmentLight } from "react-icons/pi";
import { BiSearchAlt } from "react-icons/bi";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-y-8 justify-center items-center ">
      <div className="text-4xl font-bold ">About Us</div>
      <div className="flex flex-col space-y-4 text-lg">
        <span>
          <strong>Digs Findr</strong> is a platform designed to make finding
          student accommodation seamless and efficient. Our mission is to assist
          students in finding their ideal accommodation near their universities
          while providing landlords with an effective platform to connect with
          tenants.
        </span>
        <span>
          Built by students for students, <strong>Digs Findr</strong> simplifies
          the accommodation search process, especially for students who are new
          to a city or university. By web-scraping data from trusted local
          rental agencies like Pam-Golding and Remax, we provide students with
          real-time listings, eliminating the hassle of browsing multiple
          websites.
        </span>
      </div>

      <div className="hidden md:flex flex-row space-x-8 items-center justify-center ">
        <img className=" w-1/5 " src={cyclist} alt="Cyclist" />
        <img className=" w-1/5 " src={guitarist} alt="Guitarist" />
        <img className=" w-1/5 " src={runner} alt="Runner" />
        <img className=" w-1/5 " src={skater} alt="Skater" />
      </div>

      <div className="flex flex-col space-y-4 text-lg">
        <div className="text-xl font-semibold">How It Works</div>

        <span className="flex flex-row items-start justify-start gap-x-5">
          <BiSearchAlt size={26} />
          <div>
            Our platform aggregates listings by scraping trusted rental agency
            websites and presenting them in an easy-to-navigate format. This
            way, students save time and effort while exploring accommodation
            options.
          </div>
        </span>
        <span className="flex flex-row items-start justify-start gap-x-5">
          <PiBuildingApartmentLight size={26} />
          <div>
            Landlords can effortlessly list their properties, targeting a
            student audience looking for convenient and affordable housing near
            their universities.
          </div>
        </span>
      </div>

      <div className="flex flex-col space-y-4 text-lg">
        <div className="text-xl font-semibold">Our Mission</div>

        <span>
          Digs Findr aims to bridge the gap between students seeking
          accommodation and landlords offering rental properties. By leveraging
          technology and innovation, we strive to make the accommodation search
          stress-free and efficient for students while maximizing visibility and
          occupancy for landlords.
        </span>
      </div>
    </div>
  );
}
