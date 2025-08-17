import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { assets } from "../assets/assets.js"
import { IoIosMenu } from "react-icons/io"
import { IoClose } from "react-icons/io5"
import { Link } from "react-scroll"

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const navItems = ["Home", "About", "Portfolio", "Tech Stack", "Contact"]

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const logoVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      color: "#dc2626",
      transition: { duration: 0.2 },
    },
  }

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  }

  const hamburgerVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  }

  return (
    <motion.nav
      className="w-full px-4 md:px-24 shadow-md fixed top-0 left-0 right-0 z-10 bg-white backdrop-blur-sm"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-between items-center h-16">
        {/* Logo and Title */}
        <Link to="Home" smooth={true} duration={500} offset={-70} activeClass="active">
          <motion.div className="flex items-center space-x-2">
            <motion.img
              src={assets.profile_pic1}
              className="h-12 w-12 rounded-full cursor-pointer"
              alt="Profile"
              whileHover={{
                scale: 1.01,
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div className="text-sm" >
              <p className="font-semibold cursor-pointer">Shubham</p>
              <p className="font-semibold cursor-pointer">Vishwakarma</p>
            </motion.div>
          </motion.div>
        </Link>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              className="cursor-pointer"
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              custom={index}
            >
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className="text-gray-700 hover:text-red-700 transition-colors duration-200 relative"
              >
                <motion.span
                  whileHover={{
                    textShadow: "0 0 8px rgba(220, 38, 38, 0.3)",
                  }}
                >
                  {item}
                </motion.span>
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700"
                  whileHover={{
                    width: "100%",
                    transition: { duration: 0.3 },
                  }}
                />
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Navbar and Hamburger Icon */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setMenu(!menu)}
            aria-label="Toggle menu"
            className="text-2xl p-2 rounded-lg"
            variants={hamburgerVariants}
            animate={menu ? "open" : "closed"}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(0,0,0,0.05)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {menu ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoClose />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoIosMenu />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menu && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden overflow-hidden"
          >
            <motion.ul
              className="flex flex-col items-center space-y-3 text-lg font-medium py-4 bg-gradient-to-b from-white to-gray-50 rounded-b-lg"
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="cursor-pointer w-full text-center"
                  variants={mobileItemVariants}
                  custom={index}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(220, 38, 38, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    onClick={() => setMenu(false)}
                    className="text-gray-700 hover:text-red-700 transition-colors duration-200 block py-2 px-4 rounded-lg"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
