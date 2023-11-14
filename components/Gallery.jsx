import React from 'react';
import Gallery1 from '../assets/gallery1.png'
import Gallery2 from '../assets/gallery2.png'
import Image from 'next/image';

const Gallery = () => {
  return (
    <section className='h-full flex flex-col px-5 mt-20'>
      <h1 className='text-sm text-[#1E3446] mb-5 sm:mb-0'>Lorem Ispum is an English Dummy Text Field</h1>
      <h1 className='text-3xl text-black font-bold mb-5'>Gallery</h1>
      <div className='hidden sm:flex sm:gap-5'>
        <div className='flex flex-row gap-5'>
          <div className='flex flex-col gap-5'>
            <Image src={Gallery1} className=' h-full' />
            <Image src={Gallery2} className='h-full' />
          </div>
          <div className='flex flex-col gap-5'>
            <Image src={Gallery2} className='h-full' />
            <Image src={Gallery1} className='h-full' />
          </div>
        </div>
        <div className='flex flex-row gap-5'>
          <div className='flex flex-col gap-5'>
            <Image src={Gallery1} className=' h-full' />
            <Image src={Gallery2} className='h-full' />
          </div>
          <div className='flex flex-col gap-5'>
            <Image src={Gallery2} className='h-full' />
            <Image src={Gallery1} className='h-full' />
          </div>
        </div>
        <div className='flex flex-row gap-5'>
          <div className='flex flex-col gap-5'>
            <Image src={Gallery1} className=' h-full' />
            <Image src={Gallery2} className='h-full' />
          </div>
          <div className='flex flex-col gap-5'>
            <Image src={Gallery2} className='h-full' />
            <Image src={Gallery1} className='h-full' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
