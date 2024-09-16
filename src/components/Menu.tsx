// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion"; // Import Framer Motion
// import Dash from "./Dash";
// import Breakfast from "../app/Breakfast/page";
// import Lunch from "../app/Lunch/page";
// import Salads from "../app/Salads/page";
// import Deserts from "../app/Deserts/page";
// import Drinks from "../app/Drinks/page";

// type MenuType = "Breakfast" | "Lunch" | "Salads" | "Deserts" | "Drinks" | "See All";

// const Menu = () => {
//   const [selectedMenu, setSelectedMenu] = useState<MenuType>("See All");

//   const menuComponents: Record<MenuType, JSX.Element[]> = {
//     "Breakfast": [<Breakfast key="breakfast" />],
//     "Lunch": [<Lunch key="lunch" />],
//     "Salads": [<Salads key="salads" />],
//     "Deserts": [<Deserts key="deserts" />],
//     "Drinks": [<Drinks key="drinks" />],
//     "See All": [
//       <Breakfast key="breakfast" />,
//       <Lunch key="lunch" />,
//       <Salads key="salads" />,
//       <Deserts key="deserts" />,
//       <Drinks key="drinks" />,
//     ],
//   };

//   // Animation variants for Framer Motion
//   const containerVariants = {
//     hidden: { opacity: 0, x: 50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         staggerChildren: 0.2,
//         when: "beforeChildren",
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: 50 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
//   };

//   return (
//     <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-40" id="dish">
//       <div className="space-y-4 w-fit mx-auto text-center">
//         <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
//           Our <span className="text-accent">Menu</span>
//         </h2>
//         <p className="text-sm sm:text-base md:text-lg text-gray-700">
//           Taste the Difference: Crafted with Passion, Served with Style.
//           <br />
//           &quot;Elevate Your Palate: Where Tradition Meets Innovation.&quot;
//         </p>
//         <div className="w-fit mx-auto">
//           <Dash />
//         </div>
//       </div>

//       {/* Menu navigation */}
//       <ul className="mt-10 flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-5 justify-center w-full mx-auto">
//         {Object.keys(menuComponents).map((menu) => (
//           <li key={menu}>
//             <button
//               onClick={() => setSelectedMenu(menu as MenuType)}
//               className={`bg-accent text-white p-1.5 rounded-md w-full sm:w-24 md:w-28 ${
//                 selectedMenu === menu ? "opacity-75" : ""
//               }`}
//             >
//               {menu}
//             </button>
//           </li>
//         ))}
//       </ul>

//       {/* Dynamic content rendering with animation */}
//       <motion.div
//         className="grid grid-cols-1 lg:grid-cols-[1fr] gap-10 pt-10 w-full"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {menuComponents[selectedMenu].map((menuItem) => (
//           <motion.div key={menuItem.key} variants={itemVariants}>
//             {menuItem}
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default Menu;
