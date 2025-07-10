import React from "react";
import { assets } from "../assets/assets.js";

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
      brief:"Password Manager is a React app to save, view, and manage passwords locally with a clean UI and copy-to-clipboard support.",
      Url: "https://github.com/Shubham-io/password-manager/tree/main/PasswordManager",
      liveLink: "https://password-manager-73t2.vercel.app",
    },
    // {
    //   id: 5,
    //   logo: assets.quizApp,
    //   name: "Quiz App",
    //   brief: "Interactive quiz app with MCQs and scoring.",
    //   Url: "https://github.com/Shubham-io/React-Projects/tree/master/Intermediate/Quiz%20App",
    //   liveLink: "https://pulsebit-frontend.vercel.app",
    // },
  ];

  console.log(cardItems);

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-10 md:px-20 py-10"
    >
      <h1 className="text-3xl font-bold mb-2">Portfolio</h1>
      <span className="text-lg">These are my Web development projects</span>

      <div className="grid grid-cols-1  md:grid-cols-2 gap-6 text-sm">
        {cardItems.map(({ id, logo, name, brief, Url, liveLink }) => (
          <div
            key={id}
            className="md:w-[650px] md:h-[300px] flex flex-col justify-center items-center border-[2px] rounded-lg shadow-lg py-2 px-4 mt-6 hover:scale-105 duration-300 cursor-pointer"
          >
            <div className="w-full flex items-center  px-2 gap-4">
              <img
                src={logo}
                alt="logo"
                className="w-28 p-1 border-[2px] shadow-md rounded-lg"
              />
              <p className="font-semibold text-lg text-center mt-2">{name}</p>
            </div>
            <p className="mt-4 px-2 w-full">{brief}</p>
            <div className="mt-4 ml-3  w-full flex gap-4">
              <button
                className="bg-blue-600 text-sm hover:bg-blue-500 p-2 rounded-md text-white"
                onClick={() => window.open(Url)}
              >
                GitHub Repo
              </button>
              <button
                className="bg-blue-600 hover:bg-blue-500 text-sm p-2 rounded-md text-white"
                onClick={() => window.open(liveLink)}
              >
                Live Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
