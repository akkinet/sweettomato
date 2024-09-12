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
          { src: '/d1.jpg', title: 'Sweet Ball' },
          { src: '/d2.jpg', title: 'Cakes' },
          { src: '/d3.jpg', title: 'Cheese Cakes' },
          { src: '/d4.jpg', title: 'Muffins' },
          { src: '/d5.jpg', title: 'Tart Cake' },  // New row starts here
          { src: '/d6.jpg', title: 'Pan Cake' },
          { src: '/d7.jpg', title: 'Chocolate Brownie' },  // Added d7
          { src: '/d8.jpg', title: 'Ice Cream Sundae' },   // Added d8
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
