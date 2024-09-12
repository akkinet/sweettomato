"use client";
import React, { useState, useEffect } from "react";
import Dash from "./Dash";
import Breakfast from "../app/Breakfast/page";
import Lunch from "../app/Lunch/page";
import Salads from "../app/Salads/page";
import Deserts from "../app/Deserts/page";
import Drinks from "../app/Drinks/page";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState("See All");
  const [showJugglingEffect, setShowJugglingEffect] = useState(false);
  const [shuffling, setShuffling] = useState(false);

  // Trigger staggered effect and shuffling
  useEffect(() => {
    if (selectedMenu !== "See All") {
      setShowJugglingEffect(true);
      setShuffling(true);

      // Remove the effect after the animation is done
      const timer = setTimeout(() => {
        setShowJugglingEffect(false);
        setShuffling(false); // End shuffling after 0.5 seconds
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [selectedMenu]);

  const renderAllMenus = () => (
    <div className={`juggling-stagger ${showJugglingEffect ? "juggling-animation" : ""}`}>
      <Breakfast />
      <Lunch />
      <Salads />
      <Deserts />
      <Drinks />
    </div>
  );

  const renderMenu = () => {
    switch (selectedMenu) {
      case "Breakfast":
        return (
          <div className={`juggling-stagger ${showJugglingEffect ? "juggling-animation" : ""}`}>
            <Breakfast />
          </div>
        );
      case "Lunch":
        return (
          <div className={`juggling-stagger ${showJugglingEffect ? "juggling-animation" : ""}`}>
            <Lunch />
          </div>
        );
      case "Salads":
        return (
          <div className={`juggling-stagger ${showJugglingEffect ? "juggling-animation" : ""}`}>
            <Salads />
          </div>
        );
      case "Deserts":
        return (
          <div className={`juggling-stagger ${showJugglingEffect ? "juggling-animation" : ""}`}>
            <Deserts />
          </div>
        );
      case "Drinks":
        return (
          <div className={`juggling-stagger ${showJugglingEffect ? "juggling-animation" : ""}`}>
            <Drinks />
          </div>
        );
      case "See All":
      default:
        return renderAllMenus();
    }
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-40" id="dish">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Our <span className="text-accent">Menu</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700">
          Taste the Difference: Crafted with Passion, Served with Style.
          <br />
          &quot;Elevate Your Palate: Where Tradition Meets Innovation.&quot;
        </p>
        <div className="w-fit mx-auto">
          <Dash />
        </div>
      </div>

      {/* Menu navigation */}
      <ul className="mt-10 flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-5 justify-center w-full mx-auto">
        <li>
          <button
            onClick={() => setSelectedMenu("See All")}
            className={`bg-accent text-white p-1.5 rounded-md w-full sm:w-24 md:w-28 ${
              selectedMenu === "See All" ? "opacity-75" : ""
            }`}
          >
            See All
          </button>
        </li>
        <li>
          <button
            onClick={() => setSelectedMenu("Breakfast")}
            className={`bg-accent text-white p-1.5 rounded-md w-full sm:w-24 md:w-28 ${
              selectedMenu === "Breakfast" ? "opacity-75" : ""
            }`}
          >
            Breakfast
          </button>
        </li>
        <li>
          <button
            onClick={() => setSelectedMenu("Lunch")}
            className={`bg-accent text-white p-1.5 rounded-md w-full sm:w-24 md:w-28 ${
              selectedMenu === "Lunch" ? "opacity-75" : ""
            }`}
          >
            Lunch
          </button>
        </li>
        <li>
          <button
            onClick={() => setSelectedMenu("Salads")}
            className={`bg-accent text-white p-1.5 rounded-md w-full sm:w-24 md:w-28 ${
              selectedMenu === "Salads" ? "opacity-75" : ""
            }`}
          >
            Salads
          </button>
        </li>
        <li>
          <button
            onClick={() => setSelectedMenu("Deserts")}
            className={`bg-accent text-white p-1.5 rounded-md w-full sm:w-24 md:w-28 ${
              selectedMenu === "Deserts" ? "opacity-75" : ""
            }`}
          >
            Deserts
          </button>
        </li>
        <li>
          <button
            onClick={() => setSelectedMenu("Drinks")}
            className={`bg-accent text-white p-1.5 rounded-md w-full sm:w-24 md:w-28 ${
              selectedMenu === "Drinks" ? "opacity-75" : ""
            }`}
          >
            Drinks
          </button>
        </li>
      </ul>

      {/* Dynamic content rendering */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr] gap-10 pt-10 w-full">
        <div className="w-full mx-auto">{renderMenu()}</div>
      </div>
    </section>
  );
};

export default Menu;
