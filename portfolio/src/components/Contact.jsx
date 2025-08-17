"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      await axios.post("https://getform.io/f/bollloma", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      toast.error("Something went wrong");
    }
    reset();
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-2xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-2xl   p-8 border border-gray-100"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold text-red-700 text-center mb-2"
          >
            Get In Touch
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl font-semibold text-gray-800 mb-8 text-center"
          >
            Send Your Message
          </motion.h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <label
                htmlFor="name"
                className="text-gray-700 font-medium text-sm uppercase tracking-wide"
              >
                Full Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 bg-gray-50/50 hover:bg-white"
              />
              {errors.name && (
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-500 font-medium"
                >
                  This field is required
                </motion.span>
              )}
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <label
                htmlFor="email"
                className="text-gray-700 font-medium text-sm uppercase tracking-wide"
              >
                Email Address
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 bg-gray-50/50 hover:bg-white"
              />
              {errors.email && (
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-500 font-medium"
                >
                  This field is required
                </motion.span>
              )}
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <label
                htmlFor="message"
                className="text-gray-700 font-medium text-sm uppercase tracking-wide"
              >
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                id="message"
                rows="5"
                placeholder="Tell me about your project or just say hello..."
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 bg-gray-50/50 hover:bg-white resize-none"
              />
              {errors.message && (
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-500 font-medium"
                >
                  This field is required
                </motion.span>
              )}
            </motion.div>

            <motion.button
              variants={itemVariants}
              type="submit"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-red-700 text-white px-4 py-2.5 rounded hover:bg-red-800 transition-all duration-200"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
