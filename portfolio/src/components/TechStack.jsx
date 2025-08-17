// import React from "react";
// import { assets, MyTechStack } from "../assets/assets.js";

// const TechStack = () => {
//   return (
//     <div
//       name="Tech Stack"
//       className="max-w-screen-2xl container mx-auto px-10 md:px-20 my-10 py-4"
//     >
//       <div>
//         <h1 className="text-4xl font-bold mb-2 text-red-700 md:text-start text-center">Tech Stack</h1>
//         <p className="text-lg">
//           I have worked with mentioned tools and technologies.
//         </p>
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-6 my-4">
//           {MyTechStack.map(({ id, logo, name }) => (
//             <div
//               key={id}
//               className="md:w-[125px] md:h-[125px] flex flex-col justify-center items-center border-[2px] cursor-pointer rounded-lg p-1 shadow-lg hover:scale-105 hover:shadow-red-200 duration-300"
//             >
//               <img src={logo} alt="logo" className="w-[80px]  " />
//               <span className="text-center text-sm text-gray-800">{name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TechStack;



"use client"
import { motion } from "framer-motion"
import { MyTechStack } from "../assets/assets.js"

const TechStackNew = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      name="Tech Stack"
      className="max-w-screen-2xl container mx-auto px-10 md:px-20 my-10 py-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div>
        <motion.h1 className="text-4xl font-bold mb-2 text-red-700 md:text-start text-center" variants={itemVariants}>
          Tech Stack
        </motion.h1>
        <motion.p className="text-lg" variants={itemVariants}>
          I have worked with mentioned tools and technologies.
        </motion.p>

        <motion.div className="grid grid-cols-2 md:grid-cols-5 gap-6 my-4" variants={containerVariants}>
          {MyTechStack.map(({ id, logo, name }) => (
            <motion.div
              key={id}
              className="md:w-[125px] md:h-[125px] flex flex-col justify-center items-center border-[2px] cursor-pointer rounded-lg p-1 shadow-lg hover:shadow-red-200 duration-300"
              variants={itemVariants}
              whileHover="hover"
              custom={cardHoverVariants}
            >
              <img src={logo || "/placeholder.svg"} alt="logo" className="w-[80px]" />
              <span className="text-center text-sm text-gray-800">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default TechStackNew

 