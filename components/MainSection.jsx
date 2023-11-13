import React from 'react';

const content = {
  title: "Live at your own pace",
  description: '"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire."',
}

const MainSection = () => {
  return (
    <section 
      className='px-7 flex flex-col justify-content items-center bg-[#1E3446] py-20' 
      style={{ borderBottomRightRadius: 170 }}
    >
      <h1 className='text-white font-semibold text-center text-5xl leading-relaxed mb-3'>{content.title}</h1>
      <p className='text-center text-white'>{content.description}</p>
      <div className='flex flex-row gap-5 mt-5'>
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
    </section>
  );
}

export default MainSection;
