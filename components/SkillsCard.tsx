import { motion } from "framer-motion";
import FM from "../src/assets/framer-motion-logo.webp";
import Tailwindcss from "../src/assets/tailwind-css3232.logowik.com.webp";
import TS from "../src/assets/typescript logo.webp";
import JS from "../src/assets/javascript-logo.png";
import Github from "../src/assets/github_PNG40.png";
import HTML from "../src/assets/html5-logo-file-html-shiny-icon-svg-wikimedia-commons-11.png";
import CSS from "../src/assets/css-icon5555.logowik.com.webp";
import Bootstrap from "../src/assets/bootstrap-logo.png";

interface SkillImage {
  name: string;
  img: string;
}

const SkillsCard = () => {
  const skillImage: SkillImage[] = [
    {
      name: "Framer Motion",
      img: FM,
    },
    {
      name: "Tailwind CSS",
      img: Tailwindcss,
    },
    {
      name: "Typescript",
      img: TS,
    },
    {
      name: "Javascript",
      img: JS,
    },
    {
      name: "Github",
      img: Github,
    },
    {
      name: "HTML",
      img: HTML,
    },
    {
      name: "CSS",
      img: CSS,
    },
    {
      name: "Bootstrap",
      img: Bootstrap,
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 gap-8 place-items-center md:gap-15 lg:grid-cols-1 lg:gap-30">
        {skillImage.map((item) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 10,
              delay: 0.2,
            }}
            key={item.name}
            className="w-25 h-25 bg-earth-tan rounded-xl lg:w-40 lg:h-40"
          >
            <img
              src={item.img}
              alt={item.name}
              className="rounded-xl w-full h-full"
            />
            <span className="hidden w-full text-xl text-center lg:block">
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
