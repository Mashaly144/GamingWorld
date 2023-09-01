import React from "react";

import { BsFacebook, BsInstagram, BsYoutube, BsLinkedin } from 'react-icons/bs';
import logo from '../assets/logo.svg';

import { support, company, contacts } from '../constant/data';
const Footer = () => {
  return (
    <footer className='pt-0 lg:pt-24' data-aos='fade-up' data-aos-offset='50'>
      <div className='container mx-auto lg:mb-24'>
        <div className='flex flex-col gap-12 lg:flex-row items-center mt-4'>
          {/* logo */}
          <div className='mx-auto mb-6 max-w-[285px] flex-1 lg:mx-0'>
            <a href='#logo'>
              <img className='w-[200px]' src={logo} alt='logo' />
            </a>
          </div>
          {/* linls groub */}
          <div className='flex flex-1 flex-col items-center  gap-16 lg:flex-row'>
            {/* footerDates */}
            <div className='w-full text-center lg:text-left'>
              <h1 className='mb-6 text-2xl font-medium'>Company</h1>
              <ul className='space-y-4 text-xl  text-gray'>
                {company.map((item, index) => {
                  return (
                    <li
                      className='transition-all duration-300 hover:text-blue'
                      key={index}
                    >
                      <a href={item.href}>{item.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* Support */}
            <div className='w-full text-center lg:text-left'>
              <h1 className='mb-6 text-2xl font-medium'>Support</h1>
              <ul className=' space-y-4 text-xl  text-gray'>
                {support.map((item, index) => {
                  return (
                    <li
                      className='transition-all duration-300 hover:text-blue'
                      key={index}
                    >
                      <a href={item.href}>{item.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contacts */}
            <div className='w-full text-center lg:text-left'>
              <h1 className='mb-6 text-2xl font-medium'>Contact</h1>
              <ul className='space-y-4 text-xl  text-gray'>
                {contacts.map((item, index) => {
                  return (
                    <div key={index}>
                      <li className='transition-all duration-300 hover:text-blue'>
                        <a href={item.href}>{item.address}</a>
                      </li>
                      <li
                        className='transition-all duration-300 hover:text-blue'
                        key={index}
                      >
                        <a href={item.href}>{item.email}</a>
                      </li>
                      <li
                        className='transition-all duration-300 hover:text-blue'
                        key={index}
                      >
                        <a href={item.href}>{item.number}</a>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* foot and social media */}
      <div className='container mx-auto flex flex-col items-center py-10 lg:flex-row lg:justify-between'>
        <h1 className='mb-5 text-xl'>©2021 CRAPPO. All rights reserved</h1>
        <div className='flex gap-x-8 text-3xl'>
          <a
            href='https://www.facebook.com/Abdallah.Mashaly.456/'
            target='blank'
          >
            <BsFacebook className='transition hover:text-purple-400 w-[30px] h-[30px]  cursor-pointer' />
          </a>

          <a href='https://www.instagram.com/mashalyabdallah/' target='blank'>
            <BsInstagram className='transition hover:text-purple-400 w-[30px] h-[30px]   cursor-pointer' />
          </a>
          <a
            href='https://www.youtube.com/channel/UCeVSDHjRKk-rsnQlXcSksAg'
            target='blank'
          >
            <BsYoutube className='transition hover:text-purple-400 w-[30px] h-[30px]   cursor-pointer' />
          </a>
          <a
            href='https://www.linkedin.com/in/abdallah-mashaly-797482250/'
            target='blank'
          >
            <BsLinkedin className='transition hover:text-purple-400  w-[30px] h-[30px]  cursor-pointer' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
