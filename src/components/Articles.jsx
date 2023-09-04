import React from 'react';
import { games } from '../constant/data';
import Card from './Card';
const Articles = () => {
  return (
    <div className='relative py-[100px]'>
      <div className='container mx-auto'>
        <div>
          <h1 className='text-5xl text-center py-7 font-semibold capitalize'>
            Welcome to the top games
          </h1>
          <div className='card-wrapper'>
            {games.map((user, index) => {
              return <Card user={user} />;
            })}
          </div>
        </div>
        <div className='overlay-circle left-0 top-0' />
        <div className='overlay-circle right-0 bottom-0' />
      </div>
    </div>
  );
};

export default Articles;
