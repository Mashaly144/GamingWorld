import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/dist/css/swiper.css';

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
    slidesPerView: '2',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 50,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  };

  return (
    <div className='py-[50px] relative'>
      <div className='container mx-auto'>
        <div>
          <div className='flex flex-col justify-center items-center gap-6 pb-[80px]'>
            <h1 className='mainHeader text-center'>
              choose your
              <span className='bg-gradient-background text-transparent bg-clip-text'>
                favorite
              </span>
              games
            </h1>
            <p>
              Offer sneak peeks and previews of upcoming games, including
              trailers, screenshots, and information about release.
            </p>
          </div>
          <Swiper {...params}>
            <img src={game1} alt='game' />
            <img src={game2} alt='game' />
            <img src={game3} alt='game' />
            <img src={game4} alt='game' />
            <img src={game5} alt='game' />
            <img src={game6} alt='game' />
          </Swiper>
          <div className='flex-between mx-auto pt-[80px] w-[50%] gap-4'>
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
