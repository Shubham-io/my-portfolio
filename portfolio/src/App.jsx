import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import  { Toaster } from "react-hot-toast";
import TechStack from "./components/TechStack";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <TechStack />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
};

export default App;
