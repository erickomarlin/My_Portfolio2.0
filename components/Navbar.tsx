import { MdOutlineEmojiPeople } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa";
import { FaHandshakeSimple } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.5,
      }}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 w-3/5 max-w-150 border border-white/30 flex justify-around items-center py-1 bg-white/10 backdrop-blur-sm rounded-full shadow-2xl z-40 hover:bg-white/20 transition-all duration-200"
    >
      <a
        href="#about"
        className="navbar flex items-center cursor-pointer text-white hover:scale-110 active:scale-100"
      >
        <MdOutlineEmojiPeople size={20} />
        <span className="ml-1 text-xs mt-1">About</span>
      </a>
      <a
        href="#projects"
        className="navbar flex  items-center cursor-pointer text-white hover:scale-110 active:scale-100"
      >
        <FaFolderOpen size={20} />
        <span className="ml-2 text-xs mt-1">Projects</span>
      </a>
      <a
        href="#connect"
        className="navbar flex items-center cursor-pointer text-white hover:scale-110 active:scale-100"
      >
        <FaHandshakeSimple size={20} />
        <span className="ml-2 text-xs mt-1">Connect</span>
      </a>
    </motion.div>
  );
};

export default Navbar;
