import React from 'react';
import discover from '../assets/discoverImage.png';
import Button from '../ui/Button';
const Discover = () => {
  return (
    <div className='py-[100px] relative'>
      <div className='container mx-auto'>
        <div className='card flex-between flex-col lg:flex-row space-y-[50px] lg:space-y-0'>
          <div className='flex-1'>
            <img
              className='max-w-full'
              src={discover}
              alt='discover'
              data-aos='fade-right'
            />
          </div>
          <div className='flex flex-1 flex-col gap-10 ' data-aos='fade-left'>
            <h1 className='text-6xl'>
              Discover the
              <span className='bg-gradient-background text-transparent bg-clip-text'>
                Virtual
              </span>{' '}
              Reality Gaming{' '}
            </h1>
            <p className='text-gray-300 w-[80%]'>
              A well-designed gaming header often incorporates elements such as
              game characters, iconic symbols, vibrant colors, and dynamic
              visuals to convey excitement, adventure, and the immersive nature
              of gaming.
            </p>
            <Button styles={`main-button-active w-full lg:w-[200px]`}>
              Play now
            </Button>
          </div>
          <div className='overlay-circle left-0 top-0' />
          <div className='overlay-circle right-0 top-52' />
        </div>
      </div>
    </div>
  );
};

export default Discover;
