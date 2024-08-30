import React from 'react';
import Image from 'next/image';
import Dash from '@/components/Dash';
// import {frying} from '../imports/material';

const Feature = () => {
  return (
    <div className="container " id='food'>
       <div className="material-container border-600">
        <div className="material-inner-left-container">  <h2 className="text-6xl font-bold pt-2">
        Our<span className="text-accent">Breakfast</span>
      </h2>

      <p className="max-w-[550px] pt-10 text-gray-700">
      Mornings made better, one bite at a time.
        Fuel your day with the perfect breakfast start.
          Breakfast: where every sunrise meets a tasty surprise!.
      </p>
      </div> <Dash/>
        {/* <div className="material-inner-right-container">
            <video src={frying} loop controls={false} />
        </div> */}
       </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10">
        {[
          { src: '/b1.jpg', title: 'Peanut Butter' },
          { src: '/b2.jpg', title: 'Oats and Strawberry'},
          { src: '/b3.jpg', title: 'Toast and Milk'},
          { src: '/b4.jpg', title: 'Bread Omlette and Juice'},
          { src: '/b5.jpg', title: 'Black Coffee and Crosiant'},
          { src: '/b6.jpg', title: 'Tea and Cookies'},
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