import CodersCoffee from "../src/assets/Coders_Coffee.JPG";
import HotelBooking from "../src/assets/Hotel_Booking.JPG";
import CryptoApp from "../src/assets/Crypto_App.JPG";
import MovieGallery from "../src/assets/Movie_Gallery.JPG";
import { motion } from "framer-motion";

interface ProjectItems {
  name: string;
  year: string;
  desc: string;
  img?: any;
  url: string;
}
const ProjectCard = () => {
  const projectItems: ProjectItems[] = [
    {
      name: "Coders Coffee",
      year: "2026",
      desc: "Modern landing page for product branding.",
      img: CodersCoffee,
      url: "https://coderscoffee123.netlify.app/",
    },
    {
      name: "Hotel Booking",
      year: "2026",
      desc: "Compact ready to use hotel booking platform.",
      img: HotelBooking,
      url: "https://hotelbooking123321.netlify.app/",
    },
    {
      name: "Crypto Tracker",
      year: "2026",
      desc: "Financial platform to track real-time cryptocurrency.",
      img: CryptoApp,
      url: "https://cryptotrackerapp123.netlify.app/",
    },
    {
      name: "Movie Tracker",
      year: "2026",
      desc: "Personal favourite movie tracker.",
      img: MovieGallery,
      url: "https://movie-galle.netlify.app/",
    },
  ];

  return (
    <div
      className=" w-full place-items-center relative p-1 rounded-xl grid grid-cols-2 md:gap-8 lg:grid-cols-1
    "
    >
      {projectItems.map((item) => (
        <motion.a
          href={item.url}
          target="_blank"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          key={item.name}
          className="w-45 h-60 rounded-xl mb-8 hover:cursor-pointer hover:scale-[1.02] active:scale-100 bg-white/70 backdrop-blur-lg shadow-2xl transition-all duration-200 md:w-75 md:h-90 lg:w-150 lg:h-120"
        >
          <img
            src={item.img}
            className="w-[90%] h-[60%] rounded-xl mb-2 mx-auto mt-2 md:mt-3 lg:mt-6 lg:h-[75%]"
            alt={item.name}
          />
          <div className="w-full px-2 flex justify-between md:px-4 md:place-items-center lg:px-8">
            <p className="text-sm font-bold mb-1 md:text-lg lg:text-xl">
              {item.name}
            </p>
            <p className="text-[12px] md:text-[14px] ">{item.year}</p>
          </div>

          <p className="w-full px-2 text-gray-800 italic text-[12px] md:px-4 md:text-[14px] lg:px-8">
            {item.desc}
          </p>
        </motion.a>
      ))}
    </div>
  );
};

export default ProjectCard;
