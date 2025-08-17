import React from "react";
import { assets } from "../assets/assets.js";
import {motion} from "motion/react";

const Portfolio = () => {
  const cardItems = [
    {
      id: 1,
      logo: assets.clinic,
      name: "PulseBit - Clinic Management System",
      brief:
        "PulseBit is a doctor appointment booking system with roles for Users, Doctors, and Admins.It supports login, scheduling, and management features.",
      Url: "https://github.com/Shubham-io/PulseBit",
      liveLink: "https://pulsebit-frontend.vercel.app",
    },
    {
      id: 2,
      logo: assets.grocify,
      name: "Grocify - Online Ecommerce Application",
      brief:
        "Grocify is a MERN‑stack e‑commerce app with Stripe payments, featuring user and seller roles for shopping, product management, and order tracking.",
      Url: "https://github.com/Shubham-io/Grocify",
      liveLink: "https://grocify-frontend-vert.vercel.app",
    },
    {
      id: 3,
      logo: assets.expenseTracker,
      name: "Expense Tracker",
      brief:
        "Expense Tracker is a React app to track income and expenses. It features transaction history, responsive UI, and state management.",
      Url: "https://github.com/Shubham-io/expense-tracker",
      liveLink: "https://expense-tracker-three-xi-23.vercel.app",
    },
    {
      id: 4,
      logo: assets.passManager,
      name: "Password Manager",
      brief:
        "Password Manager is a React app to save, view, and manage passwords locally with a clean UI and copy-to-clipboard support.",
      Url: "https://github.com/Shubham-io/password-manager/tree/main/PasswordManager",
      liveLink: "https://password-manager-73t2.vercel.app",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-10 md:px-20 py-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div variants={headerVariants}>
        <h1 className="text-4xl font-bold mb-2 text-red-700 md:text-start text-center">
          Portfolio
        </h1>
        <span className="text-lg">These are my Web development projects</span>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm"
        variants={containerVariants}
      >
        {cardItems.map(({ id, logo, name, brief, Url, liveLink }) => (
          <motion.div
            key={id}
            className="md:w-[650px] md:h-[300px] flex flex-col justify-center items-center border-[2px] rounded-lg shadow-lg py-2 px-4 mt-6 cursor-pointer"
            variants={cardVariants}
            whileHover={{
              scale: 1.01,
              boxShadow:
                "0 20px 25px -5px rgba(239, 68, 68, 0.1), 0 10px 10px -5px rgba(239, 68, 68, 0.04)",
              transition: {
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-full flex items-center px-2 gap-4">
              <motion.img
                src={logo}
                alt="logo"
                className="w-28 p-1 border-[2px] shadow-md rounded-lg"
              />
              <p className="font-semibold text-lg text-center text-red-700 mt-2">
                {name}
              </p>
            </div>
            <p className="mt-4 px-2 w-full text-gray-800">{brief}</p>
            <div className="mt-4 md:ml-3 w-full flex items-center justify-around md:justify-start gap-4">
              <motion.button
                className="bg-red-700 text-sm hover:bg-red-800 p-2 rounded-md text-white"
                onClick={() => window.open(Url)}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#991b1b",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub Repo
              </motion.button>
              <motion.button
                className="bg-red-700 hover:bg-red-800 text-sm p-2 rounded-md text-white"
                onClick={() => window.open(liveLink)}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#991b1b",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                Live Demo
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
