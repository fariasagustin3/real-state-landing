import React from 'react';
import MainImage from '../assets/main_image.png';
import Image from 'next/image';

const content = {
  title: "Live at your own pace",
  titleSm: "Rule the world as a Professional Real Estate Consultant",
  description: '"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire."',
}

const MainSection = () => {
  return (
    <section
      className='px-7 flex flex-col justify-center items-center bg-[#1E3446] h-full py-24 sm:items-start sm:py-0 sm:px-0 sm:bg-white'
      style={{ borderBottomRightRadius: 170 }}
    >
      <div className='sm:flex sm:flex-col sm:items-start sm:bg-[#1E3446] sm:h-screen sm:py-20 sm:w-4/5 sm:px-14 rounded-br-[500px]'>
        <h1 className='text-white font-semibold text-center text-5xl leading-relaxed mb-3 sm:hidden'>{content.title}</h1>
        <h1 className='text-white font-semibold text-center text-5xl leading-relaxed mb-3 hidden sm:text-start sm:flex w-2/3'>{content.titleSm}</h1>
        <p className='text-center text-white sm:hidden'>{content.description}</p>
        <div className='flex flex-row gap-5 mt-5 justify-center'>
          <button
            className='text-sm text-white text-center bg-[#F58634] rounded-xl px-5 py-3'
          >
            Get Started
          </button>
          <button
            className='text-sm text-[#F58634] border border-1 border-[#F58634] text-center bg-transparent rounded-xl px-5 py-3'
          >
            Learn More
          </button>
        </div>
      </div>
      <div className='hidden sm:flex'>
        <Image src={MainImage} className='absolute w-96 top-28 right-28 z-10' />
      </div>
    </section>
  );
}

export default MainSection;
