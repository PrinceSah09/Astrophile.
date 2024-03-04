import React from "react";
import { FaFileInvoice } from "react-icons/fa";
import { TiPin } from "react-icons/ti";

import { MdDownload } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";

function Card({ value, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      className="relative w-60  h-fit  bg-zinc-900 rounded-[25px] text-white py-8 px-5 overflow-hidden"
    >
      <div className="absolute w-6 h-6 text-2xl text-red-600 right-4 top-4">
        {" "}
        <TiPin />
      </div>

      <p className="pb-10 mt-5 leading-none font-tight"> {value.desc}</p>

      <div
        className={`absolute bottom-0 left-0 w-full h-10 px-8 ${
          value.tag.isOpen ? "bg-green-800" : "bg-orange-800"
        }`}
      >
        <div className="flex items-center justify-between py-2 ">
          <p3>.4mb</p3>

          <span className="h-6 w-6 bg-zinc-700 rounded-[100%] flex justify-center items-center cursor-pointer">
            <span className="transition ease-in-out delay-100 hover:text-green-800">
              <MdDownload />
            </span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
