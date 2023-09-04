import { testimonialsCard } from "../constant/data";
import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import TestimonialsCard from "./TestimonialsCard";

export const Testimonials = () => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  };

  return (
    <div>
      <Swiper {...params}>
        {testimonialsCard.map((card, index) => {
          return (
            <div>
              <TestimonialsCard cardData={card} />
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};
