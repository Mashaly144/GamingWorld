import React from 'react';
import Button from '../ui/Button';

const Card = ({ user }) => {
  return (
    <div className='card'>
      <img className='w-full' src={user.image} alt='game' />
      <div className='py-5'>
        <p className='text-2xl capitalize '>{user.type}</p>
        <div className='flex-start gap-5 pb-2'>
          <img src={user.userPicture} alt='userPic' />
          <div className='py-4 bg-main'>
            <h5>{user.userName}</h5>
            <span className='text-gray-400'>{user.company}</span>
          </div>
        </div>
      </div>
      <Button styles={`main-button-active`}>Live Demo</Button>
    </div>
  );
};

export default Card;
