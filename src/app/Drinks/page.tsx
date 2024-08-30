import React from 'react';
import Image from 'next/image';
import Dash from '@/components/Dash';
// import {frying} from '../imports/material';

const Feature = () => {
  return (
    <div className="container " id='food'>
       <div className="material-container border-600">
        <div className="material-inner-left-container">  <h2 className="text-6xl font-bold pt-2">
        Our<span className="text-accent">Drinks</span>
      </h2>

      <p className="max-w-[550px] pt-10 text-gray-700">
      Sip, savor, and refresh your spirit
       Cheers to good vibes and even better drinks
          Pouring happiness, one glass at a time!.
      </p>
      </div> <Dash/>
        {/* <div className="material-inner-right-container">
            <video src={frying} loop controls={false} />
        </div> */}
       </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10">
        {[
          { src: '/dr1.jpg', title: 'Coffee' },
          { src: '/dr2.jpg', title: 'Mohito'},
          { src: '/dr3.jpg', title: 'Tea'},
          { src: '/dr4.jpg', title: 'Fresh Juices'},
          { src: '/dr5.jpg', title: 'Ice Tea'},
          { src: '/dr6.jpg', title: 'Cold Coffee'},
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