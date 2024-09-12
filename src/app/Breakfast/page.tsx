import React from 'react';
import Image from 'next/image';
import Dash from '@/components/Dash';

const Feature = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8" id='food'>
      <div className="material-container border-600">
        <Dash/>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {[
          { src: '/b1.jpg', title: 'Peanut Butter' },
          { src: '/b2.jpg', title: 'Oats and Strawberry' },
          { src: '/b3.jpg', title: 'Toast and Milk' },
          { src: '/b4.jpg', title: 'Bread Omelette and Juice' },
          { src: '/b5.jpg', title: 'Pancakes with Syrup' },
          { src: '/b6.jpg', title: 'Fruit Salad' },
          { src: '/b7.jpg', title: 'Eggs and Bacon' },
          { src: '/b8.jpg', title: 'French Toast' },
        ].map((item, index) => (
          <div 
            key={index} 
            className={`w-full mx-auto items-center text-center fade-in delay-${index}`}  // Add delay
            style={{ animationDelay: `${index * 0.3}s` }}  // Apply staggered delay
          >
            <div className="relative w-full h-40 sm:h-48 md:h-52 lg:h-56 xl:h-60"> {/* Responsive height */}
              <Image className="object-cover h-full w-full shadow-2xl" src={item.src} alt={item.title} layout="fill" />
            </div>
            <div className="space-y-2 pt-2">
              <Dash/>
              <h2 className="font-medium text-base sm:text-lg md:text-xl">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
