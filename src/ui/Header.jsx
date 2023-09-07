import React from 'react';
import logo from '../assets/logo.svg';
import Nav from '../components/Nav';
import { BsHandbag } from 'react-icons/bs';

const Header = () => {
  return (
    <div className='container mx-auto py-[50px] ' data-aos='fade-down'>
      <div className='flex-between'>
        <div className='flex-start gap-3'>
          <img src={logo} alt='logo' />
          <h1 className='text-2xl font-semibold'>board</h1>
        </div>
        <Nav />
        <BsHandbag className='text-3xl' />
      </div>
    </div>
  );
};

export default Header;
