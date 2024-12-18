/*

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';


 */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Keyboard, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";

export default function PopularAgents() {
  return (
    <>
      <div className="  items-center  justify-center overflow-x-auto mt-4 p-2">
        <h2 className=" text-xl text-center font-semibold content-center mb-2">
          Agencies In your area
        </h2>

        <div className=" md:px-10 lg:px-30 xl:px-60 py-5">
          <Swiper
            //spaceBetween={10}

            slidesPerView={4}
            centeredSlides={false}
            slidesPerGroupSkip={4}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              769: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
            }}
            scrollbar={false}
            navigation={false}
            pagination={false}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Keyboard, Pagination, Autoplay]} // Remove Scrollbar and Navigation if not used
          >
            <SwiperSlide>
              <img
                width="100"
                src="https://s3-eu-west-1.amazonaws.com/askremax/770/0eb03656-6ca3-05f6-300c-8aad530aa2f4.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                width="100"
                src="https://sloepwes.co.za/storage/2022/06/Seeff-Logo-PNG-900x357.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                width="100"
                src="https://www.wpcc.co.za/wp-content/uploads/2019/05/Pam-Golding-New-Logo.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                width="100"
                src="https://www.wizebuy.co.za/images/logo.gif"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                width="100"
                src="https://sloepwes.co.za/storage/2022/06/Seeff-Logo-PNG-900x357.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                width="100"
                src="https://s3-eu-west-1.amazonaws.com/askremax/770/0eb03656-6ca3-05f6-300c-8aad530aa2f4.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
