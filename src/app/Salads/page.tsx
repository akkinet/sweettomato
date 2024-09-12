import React from 'react';
import Image from 'next/image';
import Dash from '@/components/Dash';
// import {frying} from '../imports/material';

const Feature = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8" id='food'>
      <div className="material-container border-600">
        <Dash />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-16 mt-10">
        {[
          { src: '/s1.jpg', title: 'Pronze Salad' },
          { src: '/s2.jpg', title: 'Avocado Salad' },
          { src: '/s3.jpg', title: 'Veg Salad' },
          { src: '/s4.jpg', title: 'Egg Salad' },
          { src: '/s5.jpg', title: 'Spinach Salad' }, // Second row starts here
          { src: '/s6.jpg', title: 'Chicken Salad' },
          { src: '/s7.jpg', title: 'Quinoa Salad' }, // Added s7
          { src: '/s8.jpg', title: 'Greek Salad' }, // Added s8
        ].map((item, index) => (
          <div key={index} className="w-full mx-auto items-center text-center">
            <div className="relative w-full h-40 sm:h-48 md:h-52 lg:h-64 max-w-[400px] mx-auto">
              <Image
                className="object-cover h-full w-full shadow-2xl"
                src={item.src}
                alt={item.title}
                layout="fill"
              />
            </div>
            <div className="space-y-2 pt-2">
              <Dash />
              <h2 className="font-medium text-lg sm:text-xl">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
