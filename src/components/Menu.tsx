import React from 'react';
import Link from 'next/link';
import Dash from './Dash';
import MenuCard from './MenuCard';

const menuData = [
  {
    img: "/1.png",
    title: "Delicious Nuggets",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    img: "/2.png",
    title: "Delicious Nuggets",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    img: "/3.png",
    title: "Delicious Nuggets",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    img: "/4.png",
    title: "Delicious Nuggets",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    img: "/5.png",
    title: "Delicious Nuggets",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    img: "/6.png",
    title: "Delicious Nuggets",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    img: "/7.png",
    title: "Delicious Nuggets",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    img: "/8.png",
    title: "Delicious Nuggets",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    img: "/9.png",
    title: "Delicious Nuggets",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
  {
    img: "/10.png",
    title: "Delicious Nuggets",
    desc: "2x tuna sahimi, 1x noodles",
    price: "$29.50",
  },
];

const Menu = () => {
  return (
    <section className="container pt-40" id="dish">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Our <span className="text-accent">Menu</span>
        </h2>
        <p className="text-gray-700">
          Taste the Difference: Crafted with Passion, Served with Style.
          <br />
          &quot;Elevate Your Palate: Where Tradition Meets Innovation.
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>
      <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto">
        <li>
          <Link href="/Breakfast" className="bg-accent text-white p-2 rounded-lg">
            Breakfast
          </Link>
        </li>
        <li>
          <Link href="/Lunch" className="bg-accent text-white p-2 rounded-lg">
            Lunch
          </Link>
        </li>
        <li>
          <Link href="/Salads" className="bg-accent text-white p-2 rounded-lg">
            Salads
          </Link>
        </li>
        <li>
          <Link href="/Deserts" className="bg-accent text-white p-2 rounded-lg">
            Deserts
          </Link>
        </li>
        <li>
          <Link href="/Drinks" className="bg-accent text-white p-2 rounded-lg">
            Drinks
          </Link>
        </li>
      </ul>
      <div className="grid lg:grid-cols-[35%,1fr] gap-10 pt-10">
        <div className="w-fit mx-auto">
          {/* Optional: You can add an image or other content here */}
        </div>

        <div className="grid w-fit max-auto sm:grid-cols-2 gap-4">
          {menuData.map((item, index) => (
            <MenuCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
