import React from 'react';
// import Nav from '../Componant/Nav';
import Nav from '../components/Nav';
import { BsHandbag } from 'react-icons/bs';

const Header = () => {
  return (
    <div className='container mx-auto py-[50px]'>
      <div className='flex-between'>
        <h1 className='text-2xl font-semibold'>board</h1>
        <Nav />
        <BsHandbag />
      </div>
    </div>
  );
};

export default Header;
