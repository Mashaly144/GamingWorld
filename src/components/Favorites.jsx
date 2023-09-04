import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/dist/css/swiper.css';

import game1 from '../assets/game1.png';
import game2 from '../assets/game2.png';
import game3 from '../assets/game3.png';
import game4 from '../assets/game4.png';
import game5 from '../assets/game5.png';
import game6 from '../assets/game6.png';
const Favorites = () => {
  const params = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  };

  return (
    <div>
      <div className='container mx-auto'>
        <div>
          <div className='flex flex-col justify-center items-center gap-6 '>
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
        </div>
      </div>
    </div>
  );
};

export default Favorites;
