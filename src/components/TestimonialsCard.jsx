import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import verified from '../assets/verified.png';
const TestimonialsCard = ({ cardData }) => {
  return (
    <div data-aos='fade-right'>
      <div className='flex-between'>
        <div className='space-y-5 main-testimonial'>
          <div className='flex  text-2xl items-center'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h1 className='text-base font-normal text-gray-200'>
            {cardData.description}
          </h1>
          <div className='flex-between '>
            <div className='flex gap-5 items-center'>
              <img src={cardData.img} />
              <div className='flex flex-col'>
                <h1>{cardData.userName}</h1>
                <p className='text-gray-400 font-thin'>{cardData.Career}</p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <img src={verified} />
              <h2>Verified</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
