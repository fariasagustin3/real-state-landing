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
    <section className='flex flex-row items-center justify-between px-5 py-5 bg-[#1E3446] sm:px-20 sm:py-7'>
      <Image src={content.logo} className='w-24' alt="" />
      <div className='hidden'>

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
