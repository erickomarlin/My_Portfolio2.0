import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Overlay = ({
  onAnimationComplete,
}: {
  onAnimationComplete: () => void;
}) => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 1500);
    const completionTimer = setTimeout(() => onAnimationComplete(), 2000);
    return () => {
      clearTimeout(timer);
      clearTimeout(completionTimer);
    };
  }, [onAnimationComplete]);

  return (
    <div
      id="home"
      className={`fixed inset-0 flex items-center justify-center bg-linear-to-tr from-earth-sage to-earth-terracotta ${showWelcome ? "z-50" : "z-0 pointer-events-none"}`}
    >
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: -100,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            className="bg-earth-cream w-100 h-50  rounded-lg shadow-xl/30  place-items-center mx-auto my-auto flex flex-col"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="my-auto font-playfair font-bold text-7xl text-black"
            >
              HELLO<span className="text-9xl text-earth-terracotta ">.</span>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Overlay;
