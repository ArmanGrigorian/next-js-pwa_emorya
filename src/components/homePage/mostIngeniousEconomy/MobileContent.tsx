"use client";

import { MobileSlider } from "@/components/reusable";
import { mostIngeniousEconomyCardsData } from "@/constants/temporalData";
import { SwiperSlide } from "swiper/react";
import MobileCard from "./MobileCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MobileContent: React.FC = () => {
  return (
    <>
      <MobileSlider>
        {mostIngeniousEconomyCardsData.map((card) => (
          <SwiperSlide key={card.id}>
            <MobileCard card={card} />
          </SwiperSlide>
        ))}
      </MobileSlider>
    </>
  );
};

export default MobileContent;
