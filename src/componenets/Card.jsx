import React from "react";
import { TiPin } from "react-icons/ti"; 
import { motion } from "framer-motion";
import { GiDeathStar } from "react-icons/gi";
import { GoStarFill } from "react-icons/go";

function Card({ value, reference }) {
  const getBackgroundColor = () => {
    switch (value.writer) {
      case "Richard P. Feynman":
        return "bg-green-800";
      case "Carl Sagan":
        return "bg-zinc-600";
      case "Stephen Hawking":
        return "bg-sky-800";
      default:
        return "bg-orange-800";
    }
  };

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      className=" cursor-pointer relative min-w-[320px] max-w-[250px] mx-auto md:mx-0 h-fit bg-zinc-900 rounded-[25px] text-white py-8 px-5 overflow-hidden"
    >
      <div className="absolute w-6 h-6 text-2xl text-red-600 right-4 top-4 ">
        <TiPin />
      </div>
      <p className="pb-10 mt-5 leading-none font-tight"> {value.quote}</p>
      <div
        className={`absolute bottom-0 left-0 w-full h-10 px-8  
        ${getBackgroundColor()}`}
      >
        <div className="flex items-center justify-between py-2 ">
          <div className="flex items-center -mx-4 ">
            <span className="mx-2 ">
              <GiDeathStar />
            </span>
            {value.writer}
          </div>
          <span className="transition ease-in-out delay-100 hover:text-zinc-800 h-6 w-6 bg-zinc-700 rounded-[100%] flex justify-center items-center cursor-pointer">
            <GoStarFill />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
