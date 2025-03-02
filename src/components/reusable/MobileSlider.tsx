"use client";

import { SliderControls } from "@/components/ui";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { A11y, Controller, Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface MobileSliderProps {
  children: React.ReactNode;
}

const MobileSlider: React.FC<MobileSliderProps> = ({ children }) => {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperType | null>(
    null,
  );

  return (
    <div className="swiper-container py-12 lg:hidden">
      <Swiper
        modules={[Navigation, Pagination, A11y, Controller]}
        controller={{ control: controlledSwiper }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        // pagination={{
        //   clickable: true,
        // }}
        onSwiper={(swiper) => setControlledSwiper(swiper)}
        className="mySwiper"
      >
        {children}
        <SliderControls />
      </Swiper>
    </div>
  );
};

export default MobileSlider;
