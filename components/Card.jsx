import Image from 'next/image';
import React from 'react';
import CardImage from '../assets/card_image.png';
import Rating from '../assets/rating.png';

const Card = () => {
  return (
    <div className=''>
      <div className='flex flex-col px-5 border-[1px] border-[#D9D9D9] rounded-xl w-80 sm:w-80'>
        <Image src={CardImage} alt="" className='w-full py-5' />
        <h3 className='text-xl text-black font-bold text-left'>Real Estate Development and Practices in Nigeria</h3>
        <div className='flex flex-row gap-5 mt-5 items-center'>
          <span className='text-xl font-bold'>4.0</span>
          <Image src={Rating} alt="" className='w-32 h-5' />
          <span className='text-xl'>(5,908)</span>
        </div>
        <button className='flex justify-center bg-[#F58634] text-white text-xl font-bold w-full py-3 rounded-xl mt-5 mb-3'>Menu</button>
      </div>
    </div>
  );
}

export default Card;
