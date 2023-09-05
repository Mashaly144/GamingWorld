import { testimonialsCard } from '../constant/data';
import React from 'react';
import Swiper from 'react-id-swiper';
import TestimonialsCard from './TestimonialsCard';

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
        <h1 className='lg:w-[80%] uppercase leading-tight text-6xl text-center mb-10'>
          Welcome To{' '}
          <span className='bg-gradient-background text-transparent bg-clip-text'>
            Testimonials
          </span>
        </h1>
        <Swiper {...params}>
          {testimonialsCard.map((card, index) => {
            return (
              <div>
                <TestimonialsCard cardData={card} />
              </div>
            );
          })}
        </Swiper>
        <div className='overlay-circle left-0 top-0' />
        <div className='overlay-circle right-0 top-52' />
      </div>
    </div>
  );
};

export default Testimonials;
