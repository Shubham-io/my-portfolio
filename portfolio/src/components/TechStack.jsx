import React from "react";
import { assets } from "../assets/assets.js";

const TechStack = () => {
  const cardItems = [
    {
      id: 1,
      logo: assets.html,
      name: "HTML",
    },
    {
      id: 2,
      logo: assets.css,
      name: "CSS",
    },
    {
      id: 3,
      logo: assets.javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: assets.react,
      name: "React",
    },
    {
      id: 5,
      logo: assets.nodejs,
      name: "NodeJs",
    },
    {
      id: 6,
      logo: assets.mongodb,
      name: "MongoDb",
    },
    {
      id: 7,
      logo: assets.tailwind,
      name: "Tailwind CSS",
    },
    {
      id: 8,
      logo: assets.python,
      name: "Python",
    },
    {
      id: 9,
      logo: assets.cpp,
      name: "C++",
    },
    {
      id: 10,
      logo: assets.git,
      name: "Git",
    },
    {
      id: 11,
      logo: assets.postman,
      name: "Postman",
    },
  ];

  return (
    <div
      name="Tech Stack"
      className="max-w-screen-2xl container mx-auto px-10 md:px-20 my-10 py-4"
    >
      <div>
        <h1 className="text-3xl font-bold mb-2">Tech Stack</h1>
        <p className="text-lg">
          I have worked with mentioned tools and technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 my-4">
          {cardItems.map(({ id, logo, name }) => (
            <div
              key={id}
              className="md:w-[125px] md:h-[125px] flex flex-col justify-center items-center border-[2px] cursor-pointer rounded-lg p-1 shadow-lg hover:scale-105 duration-300"
            >
              <img src={logo} alt="logo" className="w-[80px]  " />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
