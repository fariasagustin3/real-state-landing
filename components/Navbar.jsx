import React from 'react';
import Image from 'next/image';
import Logo from '../assets/logo_nav.png';

const content = {
  logo: Logo,
  links: ["Home", "About Us", "Our Courses", "Blog", "Contact Us"],
  buttonText: "Menu",
}

const Navbar = () => {
  return (
    <section className='flex flex-row items-center justify-between bg-[#1E3446] px-10 py-5 sm:px-0 sm:py-0 sm:bg-white '>
      <div className='sm:flex sm: flex-row sm:w-4/5 sm:h-full sm:justify-between sm:items-center sm:bg-[#1E3446] sm:py-5 sm:px-14'>
        <Image src={content.logo} className='w-24 sm:pl-20 sm:w-48' alt="" />
        <ul className='hidden sm:flex sm:flex-row sm:items-center sm:gap-5'>
          {content.links.map((link, index) => (
            <li key={index} className='text-sm font-thin text-[#F6F6F6]'>{link}</li>
          ))}
        </ul>
      </div>
      <div className='hidden sm:flex sm:flex-row sm:items-center sm:pr-10'>
        <button className='sm:bg-transparent sm:text-black sm:px-4 sm:border-r-[1px] sm:border-r-[#D4D4D4] sm:text-sm sm:font-bold'>Login</button>
        <button className='sm:bg-transparent sm:text-[#F58634] sm:px-4 sm:text-sm sm:font-bold'>Register</button>
      </div>
      <button
        className='bg-transparent text-[#F58634] border border-1 border-[#F58634] px-5 py-3 rounded-xl sm:hidden'
      >
        {content.buttonText}
      </button>
    </section>
  );
}

export default Navbar;
