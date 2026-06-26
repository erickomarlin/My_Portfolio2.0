import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import SkillsCard from "../components/SkillsCard";
import { motion } from "framer-motion";

const Projects = () => {
  const [showProjects, setShowProjects] = useState(true);

  const handleSwitch = () => {
    setShowProjects((prev) => !prev);
  };

  const textDisplayed = showProjects ? "Show Skills" : "Show Gallery";

  return (
    <div
      id="projects"
      className="w-screen h-220 md:h-290 lg:h-625 flex flex-col  place-items-center bg-linear-to-tl from-earth-sage to-earth-terracotta"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.1,
        }}
        className="text-5xl font-playfair mb-10 mt-15"
      >
        PROJECTS
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.3,
        }}
        className="w-[30%] max-w-2/5 flex justify-center rounded-xl mb-5 "
      >
        <button
          onClick={handleSwitch}
          className="w-full  px-3 rounded-full text-center border border-white/30 bg-white/10 backdrop-blur-sm shadow-4xl text-white  hover:cursor-pointer hover:scale-105 active:scale-100 mb-5 hover:bg-white/20 transition-all duration-300"
        >
          {textDisplayed}
        </button>
      </motion.div>
      <div className="w-4/5">
        {showProjects ? <ProjectCard /> : <SkillsCard />}
      </div>
    </div>
  );
};

export default Projects;
