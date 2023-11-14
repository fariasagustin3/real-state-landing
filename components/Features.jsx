import Image from 'next/image';
import React from 'react';
import Image1 from '../assets/image1.png';
import Image2 from '../assets/image2.png';
import Image3 from '../assets/image3.png';
import Image4 from '../assets/image4.png';
import Image5 from '../assets/image5.png';
import Image6 from '../assets/image6.png';

const Features = () => {
  return (
    <section className='h-full flex flex-col items-start mt-10 gap-5 px-5'>
      <h1 className='text-md text-[#1E3446] font-medium text-left sm:text-sm sm:mb-0'>Features</h1>
      <h2 className='text-3xl text-[#120A00] text-left font-bold'>We Provide the Best Property for you</h2>

      {/* images section */}
      <div className='flex flex-col gap-8 sm:flex-row'>
        <div className='sm:flex sm:flex-col sm:w-2/3 sm:gap-5'>
          <Image src={Image1} alt="" className='w-full mb-5' />
          <div className='flex flex-row gap-5 px-2 items-center justify-center'>
            <Image src={Image2} alt="" className='w-1/2' />
            <Image src={Image3} alt="" className='w-1/2' />
          </div>
        </div>
        <div className='sm:w-1/2'>
          <Image src={Image4} alt="" className='w-full h-full sm:w-full sm:h-full' />
        </div>
        <div className='flex flex-col gap-5 sm:w-2/3'>
          <Image src={Image5} alt="" className='w-full' />
          <Image src={Image6} alt="" className='w-full' />
        </div>
      </div>
    </section>
  );
}

export default Features;
