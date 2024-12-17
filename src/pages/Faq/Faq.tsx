import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

import banner from "../../assets/images/Footer/faqBanner.png";

export default function Faq() {
  return (
    <div className="flex flex-col justify-center items-center gap-y-2">
      <img src={banner} className="w-1/4" />

      <Accordion type="single" collapsible className="w-full bg-transparent">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Digs Findr?</AccordionTrigger>
          <AccordionContent>
            Digs Findr is a platform designed to help students find suitable
            accommodation options near their universities and assist landlords
            in finding tenants. It simplifies the process by consolidating
            listings from multiple rental agencies through web scraping.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How does Digs Findr work?</AccordionTrigger>
          <AccordionContent>
            Digs Findr scrapes rental listings from local rental agency websites
            and presents them on a unified platform. Students can easily compare
            options, filter results, and find the best-suited accommodation near
            their university. Landlords can also list their properties to
            directly target student tenants.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Who can benefit from using Digs Findr?
          </AccordionTrigger>
          <AccordionContent>
            Digs Findr is ideal for students seeking accommodation near their
            universities, especially those new to the area. It also benefits
            landlords looking to advertise their properties to the student
            demographic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Is Digs Findr free to use?</AccordionTrigger>
          <AccordionContent>
            Yes, Digs Findr is free for students to browse and search for
            accommodation. Landlords may have options for free or paid listings,
            depending on their advertising preferences.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            How does Digs Findr ensure listing accuracy?
          </AccordionTrigger>
          <AccordionContent>
            Digs Findr regularly updates its data by scraping rental agency
            websites. However, students are advised to confirm details directly
            with the rental agencies or landlords to ensure accuracy.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>
            Can landlords advertise their properties?
          </AccordionTrigger>
          <AccordionContent>
            Yes, landlords can advertise their properties on Digs Findr. The
            platform is tailored to help landlords connect with the student
            demographic, making it easier to find tenants.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>What makes Digs Findr unique?</AccordionTrigger>
          <AccordionContent>
            Digs Findr is built by students for students. It focuses on
            providing a streamlined experience by aggregating rental options,
            saving students time and effort. Additionally, it creates a direct
            bridge between landlords and student tenants.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
