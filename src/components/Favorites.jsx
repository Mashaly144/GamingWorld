import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import game1 from '../assets/game1.png';
import game2 from '../assets/game2.png';
import game3 from '../assets/game3.png';
import game4 from '../assets/game4.png';
import game5 from '../assets/game5.png';
import game6 from '../assets/game6.png';
import Button from '../ui/Button';
const Favorites = () => {
  const params = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: '3',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: true,
    modules: [EffectCoverflow, Pagination],
    breakpoints: {
      1024: {
        slidesPerView: 3,
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
    <div className='py-[50px] relative'>
      <div className='container mx-auto'>
        <div>
          <div className='flex flex-col justify-center items-center gap-6 pb-[80px]'>
            <h1 className='lg:w-[80%] uppercase leading-tight text-6xl text-center'>
              choose your{' '}
              <span className='uppercase bg-gradient-background text-transparent bg-clip-text'>
                favorite{' '}
              </span>
              games
            </h1>
            <p className='text-center'>
              Offer sneak peeks and previews of upcoming games, including
              trailers, screenshots, and information about release.
            </p>
          </div>
          <Swiper className='mySwiper' {...params}>
            <SwiperSlide>
              <img src={game1} alt='game' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={game2} alt='game' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={game3} alt='game' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={game4} alt='game' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={game5} alt='game' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={game6} alt='game' />
            </SwiperSlide>
          </Swiper>
          <div className='flex justify-center items-center  flex-wrap  capitalize mx-auto py-[80px] w-[80%] gap-4'>
            <Button styles={`main-button-active`}>Buy now</Button>
            <Button styles={`main-button`}>Play now</Button>
          </div>
          <div className='overlay-circle left-0 top-0' />
          <div className='overlay-circle right-0 bottom-0' />
        </div>
      </div>
    </div>
  );
};

export default Favorites;
