import React from 'react';
import Image from 'next/image';
import Dash from '@/components/Dash';
// import {frying} from '../imports/material';

const Feature = () => {
  return (
    <div className="container " id='food'>
       <div className="material-container border-600">
        <div className="material-inner-left-container">  <h2 className="text-6xl font-bold pt-2">
        Our<span className="text-accent">Lunch</span>
      </h2>

      <p className="max-w-[550px] pt-10 text-gray-700">
      Midday meals that make your afternoon shine.
      Lunch: the delicious pause your day deserves.
        Savor the moment, one lunch bite at a time!.
      </p>
      </div> <Dash/>
        {/* <div className="material-inner-right-container">
            <video src={frying} loop controls={false} />
        </div> */}
       </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10">
        {[
          { src: '/l1.jpg', title: 'Shahi Paneer' },
          { src: '/l2.jpg', title: 'Chicken Biryani'},
          { src: '/l3.jpg', title: 'Sabji and Naan'},
          { src: '/l4.jpg', title: 'Chicken Rice'},
          { src: '/l5.jpg', title: 'Dal Chawal'},
          { src: '/l6.jpg', title: 'Butter paneer and Naan'},
        ].map((item, index) => (
          <div key={index} className="w-full mx-auto items-center text-center flex flex-wrap">
            <div className="relative w-full h-64 max-w-[400px] mx-auto">
              <Image className="object-cover h-full w-full shadow-2xl" src={item.src} alt={item.title} layout="fill" />
            </div>
            <div className="space-y-4 pt-4">
            <Dash/>
              <h2 className="font-medium text-xl">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;