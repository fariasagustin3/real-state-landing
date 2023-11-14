import React from 'react';
import Image from 'next/image'
import Ubi from '../assets/ubi.png';
import Phone from '../assets/phone.png';
import Mail from '../assets/mail.png';

const listItems = {
  company: [
    {
      image: Ubi,
      item: "2118 Thornridge Cir. Dubai, UAE 35624"
    },
    {
      image: Phone,
      item: "+33 415 65356 - 9"
    },
    {
      image: Mail,
      item: "contact@lugar.com"
    },
  ],
  quick: ['Home', 'Our Courses', 'About Us', 'Blog'],
  legal: ["Terms", "Conditions", "Policy"],
  social: ["Facebook", "Twitter", "YouTube", "LinkedIn"]
}

const Footer = () => {
  return (
    <footer className='flex flex-col gap-5 bg-[#1E3446] items-center justify-center h-full pb-5 pt-10 sm:flex sm:flex-row sm:px-10 sm:justify-center sm:items-center'>
      <div className='w-1/2 mb-5 sm:self-start'>
        <h1 className='text-center text-white text-extrabold text-xl mb-5 sm:text-left'>Company Name</h1>
        <ul className='flex flex-col gap-3 items-center sm:items-start'>
          {listItems.company.map((e, i) => (
            <li className='flex flex-row items-center gap-3 justify-start' key={i}>
              <Image src={e.image} className='w-5' />
              <span className='text-[#BDBDBD] text-sm cursor-pointer'>{e.item}</span>
            </li>
          ))}
          <p className='text-center text-sm text-[#BDBDBD] mt-10 hidden sm:flex'>Copyright @ 2023</p>
        </ul>
      </div>

      <div className='w-1/2 mb-5 sm:w-1/3 sm:self-start'>
        <h1 className='text-center text-white text-extrabold text-xl mb-5 sm:text-left'>Quick Links</h1>
        <ul className='flex flex-col gap-3 items-center sm:items-start'>
          {listItems.quick.map((e, i) => (
            <li className='text-[#BDBDBD] text-sm cursor-pointer' key={i}>{e}</li>
          ))}
        </ul>
      </div>

      <div className='w-1/2 mb-5 sm:w-1/3 sm:self-start'>
        <h1 className='text-center text-white text-extrabold text-xl mb-5 sm:text-left'>Legal Links</h1>
        <ul className='flex flex-col gap-3 items-center sm:items-start'>
          {listItems.legal.map((e, i) => (
            <li className='text-[#BDBDBD] text-sm cursor-pointer' key={i}>{e}</li>
          ))}
        </ul>
      </div>

      <div className='w-1/2 mb-5 sm:w-1/3 sm:self-start'>
        <h1 className='text-center text-white text-extrabold text-xl mb-5 sm:text-left'>Social Media</h1>
        <ul className='flex flex-col gap-3 items-center sm:items-start'>
          {listItems.social.map((e, i) => (
            <li className='text-[#BDBDBD] text-sm cursor-pointer' key={i}>{e}</li>
          ))}
        </ul>
      </div>

      <p className='text-center text-sm text-[#BDBDBD] mt-10 sm:hidden'>Copyright @ 2023</p>
    </footer>
  );
}

export default Footer;
