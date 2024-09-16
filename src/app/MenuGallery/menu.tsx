"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../globals.css";
import Dash from "@/components/Dash";

interface Image {
  id: number;
  category: string;
  src: string;
  title: string;
}

const images: Image[] = [
  { id: 10, category: "Breakfast", src: "/b1.jpg", title: "Peanut Butter" },
  { id: 23, category: "Lunch", src: "/l2.jpg", title: "Chicken Biryani" },
  { id: 30, category: "Breakfast", src: "/b8.jpg", title: "French Toast" },
  { id: 6, category: "Lunch", src: "/l1.jpg", title: "Shahi Paneer" },
  {
    id: 21,
    category: "Breakfast",
    src: "/b2.jpg",
    title: "Oats and Strawberry",
  },
  { id: 36, category: "Breakfast", src: "/b3.jpg", title: "Toast and Milk" },
  { id: 25, category: "Breakfast", src: "/b7.jpg", title: "Eggs and Bacon" },
  {
    id: 7,
    category: "Breakfast",
    src: "/b4.jpg",
    title: "Bread Omelette and Juice",
  },

  { id: 33, category: "Lunch", src: "/l4.jpg", title: "Chicken Rice" },
  { id: 5, category: "Lunch", src: "/l5.jpg", title: "Dal Chawal" },
  { id: 15, category: "Lunch", src: "/l3.jpg", title: "Sabji and Naan" },
  {
    id: 17,
    category: "Breakfast",
    src: "/b5.jpg",
    title: "Pancakes with Syrup",
  },
  { id: 2, category: "Breakfast", src: "/b6.jpg", title: "Fruit Salad" },
  { id: 9, category: "Lunch", src: "/l8.jpg", title: "Fish Curry" },

  { id: 1, category: "Salad", src: "/s1.jpg", title: "Bronze Salad" },
  { id: 19, category: "Salad", src: "/s3.jpg", title: "Veg Salad" },
  { id: 35, category: "Salad", src: "/s2.jpg", title: "Avocado Salad" },
  { id: 12, category: "Salad", src: "/s4.jpg", title: "Egg Salad" },
  { id: 3, category: "Salad", src: "/s5.jpg", title: "Spinach Salad" },
  { id: 26, category: "Salad", src: "/s6.jpg", title: "Chicken Salad" },

  { id: 8, category: "Dessert", src: "/d1.jpg", title: "Sweet Ball" },
  { id: 32, category: "Dessert", src: "/d2.jpg", title: "Cakes" },
  { id: 20, category: "Dessert", src: "/d3.jpg", title: "Cheese Cakes" },
  { id: 4, category: "Dessert", src: "/d4.jpg", title: "Muffins" },
  { id: 13, category: "Dessert", src: "/d5.jpg", title: "Tart Cake" },
  { id: 11, category: "Dessert", src: "/d6.jpg", title: "Pan Cake" },

  { id: 14, category: "Drinks", src: "/dr1.jpg", title: "Coffee" },
  { id: 18, category: "Drinks", src: "/dr2.jpg", title: "Mohito" },
  { id: 27, category: "Drinks", src: "/dr3.jpg", title: "Tea" },
  { id: 28, category: "Drinks", src: "/dr4.jpg", title: "Fresh Juices" },
  { id: 31, category: "Drinks", src: "/dr5.jpg", title: "Ice Tea" },
  { id: 16, category: "Drinks", src: "/dr6.jpg", title: "Cold Coffee" },
  { id: 22, category: "Drinks", src: "/dr7.jpg", title: "Smoothie" },
  { id: 29, category: "Drinks", src: "/dr8.jpg", title: "Milkshake" },
];

const categories = ["See All", "Breakfast", "Lunch", "Salad", "Dessert", "Drinks"];

const MasonryGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("See All");

  const filteredImages =
    activeCategory === "See All"
      ? images
      : images.filter((image) => image.category === activeCategory);

  const masonryVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div className="w-full p-4 mt-16">
      {/* Menu Title and Description */}
      <div className="space-y-4 w-fit mx-auto text-center mb-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Our <span className="text-accent">Menu</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700">
          Taste the Difference: Crafted with Passion, Served with Style.
          <br />
          &quot;Elevate Your Palate: Where Tradition Meets Innovation.&quot;
        </p>
        <div className="w-fit mx-auto my-16">
          {/* Add the `Dash` component or replace it with a line/div */}
          <Dash />
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-10 flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-5 justify-center w-full mx-auto mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg ${
              activeCategory === category
                ? "bg-red-400 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 px-9 lg:px-14">
        <AnimatePresence>
          {filteredImages.map((image, i) => (
            <motion.div
              key={image.id}
              custom={i}
              variants={masonryVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              className="relative w-full"
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.category}
                className="object-cover w-full h-60"
              />

              {/* Red Line and Title */}
              <div className="flex flex-col items-center mt-2">
                <div className="self-start w-1/4 h-1.5 bg-red-500 mb-4 mt-10"></div>
                <h3 className="text-center font-medium text-xl">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MasonryGallery;

