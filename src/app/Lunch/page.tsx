import React from 'react';
import Image from 'next/image';
import Dash from '@/components/Dash';
// import {frying} from '../imports/material';

const Feature = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8" id='food'>
      <div className="material-container border-600">
        <Dash/>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-16 mt-10">
        {[
          { src: '/l1.jpg', title: 'Shahi Paneer' },
          { src: '/l2.jpg', title: 'Chicken Biryani' },
          { src: '/l3.jpg', title: 'Sabji and Naan' },
          { src: '/l4.jpg', title: 'Chicken Rice' },
          { src: '/l5.jpg', title: 'Dal Chawal' },  // Second row starts here
          { src: '/l6.jpg', title: 'Butter Paneer and Naan' },
          { src: '/l7.jpg', title: 'Rajma Chawal' },  // Added l7
          { src: '/l8.jpg', title: 'Fish Curry' },    // Added l8
        ].map((item, index) => (
          <div key={index} className="w-full mx-auto items-center text-center">
            <div className="relative w-full h-40 sm:h-48 md:h-52 lg:h-64 max-w-[400px] mx-auto">
              <Image className="object-cover h-full w-full shadow-2xl" src={item.src} alt={item.title} layout="fill" />
            </div>
            <div className="space-y-2 pt-2">
              <Dash/>
              <h2 className="font-medium text-lg sm:text-xl">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
