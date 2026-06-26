import ProfilePicture from "../src/assets/WhatsApp Image 2025-12-03 at 09.38.10.jpeg";
import { motion } from "framer-motion";
import MyCV from "../src/assets/ErickoMarlin Resume 2026 FED.pdf";

const Hero = () => {
  return (
    <div
      id="about"
      className="w-screen h-screen bg-white flex flex-col justify-between items-center "
    >
      <div className="w-full h-60 bg-linear-to-tr to-earth-terracotta from-earth-sage rounded-b-4xl"></div>
      <motion.img
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 1.3,
        }}
        src={ProfilePicture}
        alt=""
        className="w-45 h-45 rounded-3xl border-3 border-gray-300 -mt-50"
      />
      <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 1.9,
        }}
        className="text-6xl font-playfair font-semibold px-10 -mt-10"
      >
        Ericko Marlin
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 2.0,
        }}
        className="text-2xl opacity-90 italic -mt-25"
      >
        Front End Developer | React Specialist
      </motion.p>
      <motion.a
        href={MyCV}
        download="ErickoMarlin Resume 2026 FED.pdf"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 2.1,
        }}
        className="-mt-20 rounded-full border px-10 py-1 bg-earth-forest/90 text-white font-bold hover:cursor-pointer hover:scale-102 active:scale-100 hover:bg-earth-forest hover:text-white/80 transition-all duration-100 "
      >
        Download CV
      </motion.a>
      <div className="h-30 w-full bg-linear-to-bl from-earth-sage to-earth-terracotta rounded-t-4xl"></div>
    </div>
  );
};

export default Hero;
