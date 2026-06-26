import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Connect = () => {
  return (
    <div
      id="connect"
      className="w-screen h-187.5 bg-linear-to-bl from-earth-sage to-earth-terracotta rounded-b-4xl  flex flex-col justify-center items-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 10,
          delay: 0.1,
        }}
        className="text-5xl font-playfair mb-30 lg:mb-15"
      >
        Let's Connect
      </motion.h1>

      <div className="grid grid-cols-2 gap-8 lg:flex">
        <motion.a
          href="https://www.facebook.com/ericko.marlin/"
          target="_blank"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 110,
            damping: 10,
            delay: 0.3,
          }}
          className="text-[70px] rounded-lg hover:scale-105 active:scale-100 hover:cursor-pointer transition-all duration-200"
        >
          <FaFacebookSquare />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/ericko.marlin/"
          target="_blank"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.4,
          }}
          className="text-[70px] rounded-lg hover:scale-105 active:scale-100 hover:cursor-pointer transition-all duration-200"
        >
          <FaInstagramSquare />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/ericko-marlin-0635593b0/"
          target="_blank"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.6,
          }}
          className="text-[70px] rounded-lg hover:scale-105 active:scale-100 hover:cursor-pointer transition-all duration-200"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://wa.me/+6285692533411?"
          target="_blank"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 110,
            damping: 10,
            delay: 0.7,
          }}
          className="text-[70px] rounded-lg hover:scale-105 active:scale-100 hover:cursor-pointer transition-all duration-200"
        >
          <FaWhatsappSquare />
        </motion.a>
        <motion.a
          href="https://github.com/erickomarlin"
          target="_blank"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.9,
          }}
          className="text-[70px] rounded-lg hover:scale-105 active:scale-100 hover:cursor-pointer transition-all duration-200"
        >
          <FaGithubSquare />
        </motion.a>
        <motion.a
          href="mailto:erickomarlin1@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 110,
            damping: 10,
            delay: 0.4,
          }}
          className="text-[70px] rounded-lg hover:scale-105 active:scale-100 hover:cursor-pointer transition-all duration-200"
        >
          <MdEmail />
        </motion.a>
      </div>
    </div>
  );
};

export default Connect;
