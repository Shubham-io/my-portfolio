import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import TechStack from "./components/TechStack";
import { motion, useScroll } from "motion/react";

const App = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          originX: 0,
          zIndex: 20,
        
          backgroundColor: "#B91C1C",
        }}
      />

      <div>
        <Navbar />
        <Home />

        <About />
        <Portfolio />
        <TechStack />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
};

export default App;
