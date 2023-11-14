import Image from 'next/image';
import React from 'react';
import CardImage from '../assets/card_image.png';
import Rating from '../assets/rating.png';
import CoursesList from './CoursesList';

const Courses = () => {
  return (
    <section className='h-screen flex flex-col gap-5 px-5 py-20'>
      <h1 className='text-md text-[#1E3446] font-medium text-start sm:text-sm sm:mb-0'>Learn from our 3 in 1 Professional Courses</h1>
      <h2 className='text-3xl font-bold text-start'>Become a Certified Real Estate Consultant</h2>
      <CoursesList />
    </section>
  );
}

export default Courses;
