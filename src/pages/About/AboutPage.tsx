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
          It all started in 2018 at the peak of the student accommodation
          protests. Alexandria Procter, the boss lady, was sitting in her SRC
          office in the Steve Biko building at the University of Cape Town
          daydreaming about innovative ways to connect landlords who have empty
          beds and students who needed accommodation. The solution she came up
          with? An excel spreadsheet. She managed to convince Greg Keal to jump
          on board, and DigsConnect Version 1 was born.
        </span>
        <span>
          Fast forward to 2021. We are now the largest platform connecting young
          people with the homes of their dreams on the African continent. We’ve
          connected more than 50 000 people on our platform over the past 36
          months and counting! The core value proposition hasn’t changed from
          day 1, it’s just more user-friendly.
        </span>
      </div>

      <div className="hidden md:flex flex-row space-x-8 items-center justify-center ">
        <img className=" w-1/5 " src={cyclist} alt="" />
        <img className=" w-1/5 " src={guitarist} alt="" />
        <img className=" w-1/5 " src={runner} alt="" />
        <img className=" w-1/5 " src={skater} alt="" />
      </div>

      <div className="flex flex-col space-y-4 text-lg">
        <div className="text-xl font-semibold">How it Works</div>

        <span className="flex flex-row items-start justify-start gap-x-5">
          <BiSearchAlt size={44} />
          <div>
            It all started in 2018 at the peak of the student accommodation
            protests. Alexandria Procter, the boss lady, was sitting in her SRC
            office in the Steve Biko building at the University of Cape Town
            daydreaming about innovative ways to connect landlords who have
            empty beds and students who needed accommodation.
          </div>
        </span>
        <span className="flex flex-row items-start justify-start gap-x-5">
          <PiBuildingApartmentLight size={44} />
          <div>
            It all started in 2018 at the peak of the student accommodation
            protests. Alexandria Procter, the boss lady, was sitting in her SRC
            office in the Steve Biko building at the University of Cape Town
            daydreaming about innovative ways to connect landlords who have
            empty beds and students who needed accommodation.
          </div>
        </span>
      </div>
      <div className="flex flex-col space-y-4 text-lg">
        <div className="text-xl font-semibold">Our History</div>

        <span>
          Fast forward to 2021. We are now the largest platform connecting young
          people with the homes of their dreams on the African continent. We’ve
          connected more than 50 000 people on our platform over the past 36
          months and counting! The core value proposition hasn’t changed from
          day 1, it’s just more user-friendly. Landlords list their properties
          on our website, and young people visit the website to send an enquiry
          directly to the landlord.
        </span>
      </div>
      <div className="flex flex-col space-y-4 text-lg">
        <div className="text-xl font-semibold">Our Services</div>
        <span>
          <ul className="list-disc list-inside pl-5">
            <li>The rent payer</li>
            <li>The rent payer</li>
            <li>The rent payer</li>
            <li>The rent payer</li>
          </ul>
        </span>
        <span>
          Fast forward to 2021. We are now the largest platform connecting young
          people with the homes of their dreams on the African continent. We’ve
          connected more than 50 000 people on our platform over the past 36
          months and counting! The core value proposition hasn’t changed from
          day 1, it’s just more user-friendly.
        </span>
      </div>
    </div>
  );
}
