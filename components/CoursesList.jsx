import React from 'react';
import Card from './Card';

const CoursesList = () => {
  return (
    <div>
      <div className='sm:h-full flex justify-start gap-5 overflow-auto'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default CoursesList;
