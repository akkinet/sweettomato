import React from 'react';
import Image from 'next/image';
import Dash from '@/components/Dash';
// import {frying} from '../imports/material';

const Feature = () => {
  return (
    <div className="container " id='food'>
       <div className="material-container border-600">
        <div className="material-inner-left-container">  <h2 className="text-6xl font-bold pt-2">
        Our<span className="text-accent">Deserts</span>
      </h2>

      <p className="max-w-[550px] pt-10 text-gray-700">
      Where every dish tells a delicious story.
        Serving happiness, one plate at a time.
          Come for the food, stay for the flavor adventure!.
      </p>
      </div> <Dash/>
        {/* <div className="material-inner-right-container">
            <video src={frying} loop controls={false} />
        </div> */}
       </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mt-10">
        {[
          { src: '/d1.jpg', title: 'sweet ball' },
          { src: '/d2.jpg', title: 'Cakes'},
          { src: '/d3.jpg', title: 'Cheese Cakes'},
          { src: '/d4.jpg', title: 'Muffins'},
          { src: '/d5.jpg', title: 'Tart Cake'},
          { src: '/d6.jpg', title: 'Pan Cake'},
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