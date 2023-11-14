"use client"
import React, { useEffect, useState } from 'react';
import Picture from '../assets/picture.png';
import Image from 'next/image';
import DotEmpty from '../assets/ellipse-outline.png'
import DotFilled from '../assets/ellipse-fill.png'

const slides = [
  {
    id: 1,
    picture: Picture,
    testimonial: '“To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy”',
    author: "Ryan Oliver",
    area: "Design Manager Kiluna",
  },
  {
    id: 2,
    picture: Picture,
    testimonial: '“To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy”',
    author: "Ryan Oliver",
    area: "Design Manager Kiluna",
  },
  {
    id: 3,
    picture: Picture,
    testimonial: '“To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy”',
    author: "Ryan Oliver",
    area: "Design Manager Kiluna",
  },
  {
    id: 4,
    picture: Picture,
    testimonial: '“To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy”',
    author: "Ryan Oliver",
    area: "Design Manager Kiluna",
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex < slides.length ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(1)
    }, 3000);

    return () => clearInterval(interval)
  }, [currentIndex, slides.length])

  return (
    <section className='flex flex-col px-5 mt-10 bg-[#F2F2F2] py-10'>
      <h1 className='text-[#1E3446] text-sm text-left mb-5 sm:text-center'>Testimonials</h1>
      <h1 className='text-black text-3xl text-left font-bold mb-10 sm:text-center sm:pb-10'>Few Smiles and Comments</h1>
      {slides.map((slide) => slide.id === currentIndex && (
        <div
          className='relative self-center transition duration-1000 fade-enter-active sm:flex sm:justify-center'
          key={slide.id}
        >
          <div className='relative w-80 h-full bg-white pt-20 pb-5 rounded-xl sm:w-3/5 '>
            <Image src={slide.picture} className='absolute w-20 top-0 right-0 left-0 m-auto z-10' style={{ marginTop: -30 }} />
            <p className='text-black text-sm text-center px-5 mb-3'>{slide.testimonial}</p>
            <p className='text-xl text-black font-bold text-center mb-3'>{slide.author}</p>
            <p className='text-md text-[#606C84] font-medium text-center mb-3'>{slide.area}</p>
          </div>
        </div>
      ))}
      <div className='flex flex-row mb-10 mt-5 justify-center gap-7'>
        {slides.map((slide) => (
          currentIndex === slide.id ? (
            <Image
              src={DotFilled}
              className='w-3 h-3 cursor-pointer'
              onClick={() => goToSlide(slide.id)}
              key={slide.id}
              alt=""
            />
          ) : (
            <Image
              src={DotEmpty}
              className='w-3 h-3 cursor-pointer'
              onClick={() => goToSlide(slide.id)}
              key={slide.id}
              alt=""
            />
          )
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
