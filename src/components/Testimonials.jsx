import { testimonialsCard } from '../constant/data';
import React from 'react';
// import Swiper from 'react-id-swiper';
import TestimonialsCard from './TestimonialsCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonials = () => {
  const params = {
    slidesPerView: 2,
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };

  return (
    <div className='relative py-[100px]'>
      <div className='container mx-auto '>
        <div>
          <h1 className='lg:w-[80%] uppercase text-6xl text-center mx-auto mb-10'>
            welcome to{' '}
            <span className='text-center uppercase bg-gradient-background text-transparent bg-clip-text'>
              favorite{' '}
            </span>
            Testimonials
          </h1>
          <div>
            <Swiper {...params}>
              {testimonialsCard.map((card, index) => {
                return (
                  <SwiperSlide key={index}>
                    <TestimonialsCard cardData={card} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className='overlay-circle left-0 top-0' />
        <div className='overlay-circle right-0 top-52' />
      </div>
    </div>
  );
};

export default Testimonials;
