import React from 'react';
import Image from 'next/image'
import Item1 from '../assets/join_item1.png'
import Item2 from '../assets/join_item2.png'
import Item3 from '../assets/join_item3.png'
import Image1 from '../assets/join_image1.png'
import Image2 from '../assets/join_image2.png'

const text = {
  title: "Join Our Team",
  description: "To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy.",
  points: [
    {
      title: "Unlimited Access to Resources",
      image: Item1,
      desc: "Siphome reacts the moment your equipment fails, alerting you to the problem."
    },
    {
      title: "Real Estate Certifications",
      image: Item2,
      desc: "Siphome reacts the moment your equipment fails, alerting you to the problem."
    },
    {
      title: "Get Incentives and Earn High Income from Sales",
      image: Item3,
      desc: "Siphome reacts the moment your equipment fails, alerting you to the problem."
    },
  ]
}

const Join = () => {
  return (
    <section className='flex flex-col items-start px-5 py-10 gap-5 sm:flex-row sm:justify-between sm:px-32 sm:py-0 sm:pt-10'>
      <div className='flex flex-col sm:flex-1'>
        <h1 className='text-left text-black text-4xl font-bold'>{text.title}</h1>
        <p className='text-left text-black text-md font-medium leading-relaxed sm:text-sm'>{text.description}</p>
        <div className='flex flex-col items-start mt-10'>
          {text.points.map((e, index) => (
            <div className='flex flex-row gap-5 items-start mb-5' key={index}>
              <Image src={e.image} alt="" className='w-10 h-10' />
              <div className='flex flex-col'>
                <h3 className='text-start text-black font-bold text-lg mb-2'>{e.title}</h3>
                <p className='text-start text-black font-medium text-md sm:text-sm'>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button className='px-10 py-3 bg-[#F58634] rounded-xl self-center text-white'>Learn more</button>
      </div>
      <div className='hidden h-screen sm:flex sm:flex-1' >
        <div className='relative w-96 h-80 top-0 bottom-0 left-0 right-0 m-auto'>
          <Image src={Image1} alt="" className='absolute sm:top-0 sm:left-0 z-10 w-56 h-50' />
          <Image src={Image2} alt="" className='absolute sm:bottom-0 sm:right-0 z-20 w-56 h-50' />
        </div>
      </div>
    </section>
  );
}

export default Join;
