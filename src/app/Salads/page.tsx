import React from 'react';
import Image from 'next/image';
import Dash from '@/components/Dash';
// import {frying} from '../imports/material';

const Feature = () => {
  return (
    <div className="container " id='food'>
       <div className="material-container border-600">
        <div className="material-inner-left-container">  <h2 className="text-6xl font-bold pt-2">
        Our<span className="text-accent">Salads</span>
      </h2>

      <p className="max-w-[550px] pt-10 text-gray-700">
      Fresh, crisp, and bursting with flavor in every bite.
        A bowl of greens, and a whole lot of goodness.
         Where healthy meets tasty, one salad at a time.
      </p>
      </div> <Dash/>
        {/* <div className="material-inner-right-container">
            <video src={frying} loop controls={false} />
        </div> */}
       </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10">
        {[
          { src: '/s1.jpg', title: 'Pronze Salad' },
          { src: '/s2.jpg', title: 'Avacado Salad'},
          { src: '/s3.jpg', title: 'Veg Salad'},
          { src: '/s4.jpg', title: 'Egg Salad'},
          { src: '/s5.jpg', title: 'Spinch Salad'},
          { src: '/s6.jpg', title: 'Chicken Salad'},
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