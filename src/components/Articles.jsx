import React from 'react';
import { games } from '../constant/data';
import Card from './Card';
import Button from '../ui/Button';
const Articles = () => {
  return (
    <div className='relative py-[100px]'>
      <div className='container mx-auto'>
        <div>
          <h1 className='text-5xl text-center font-semibold capitalize'>
            Welcome to the top games
          </h1>
          <div className='flex justify-center items-center  flex-wrap  capitalize mx-auto py-[80px] w-[80%] gap-4'>
            <Button styles={`main-button-active `}>Mewest games</Button>
            <Button styles={`main-button-active`}>Latest games</Button>
            <Button styles={`main-button-active`}>Fight games</Button>
            <Button styles={`main-button-active`}>sport games</Button>
          </div>
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
