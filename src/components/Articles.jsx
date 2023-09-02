import React from 'react';
import { games } from '../constant/data';
import Card from './Card';
const Articles = () => {
  return (
    <div>
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
      </div>
    </div>
  );
};

export default Articles;
