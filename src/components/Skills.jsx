"use client";

import Image from "next/image";
import Header from "./sub/Header";
import { skillsData } from "@/assets";
import { motion } from "framer-motion";

const Skills = () => {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.07,
      },
    }),
    hidden: {
      opacity: 0,
      y: 30,
    },
  };

  return (
    <div
      id="skills"
      className=" min-h-screen flex flex-col items-center justify-center gap-y-20 px-56 md:px-16 lg:px-28 xl:px-56 md:justify-center "
    >
      <Header text={"Skills"} />
      <div className="w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6">
        {skillsData.map((item, i) => (
          <motion.div
            custom={i}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            key={i}
            whileHover={{ scale: 1.1 }}
            viewport={{ margin: "50px", once: true }}
            className="flex  items-center justify-center gap-x-3  rounded-xl border border-blue-500 bg-zinc-200 px-5 py-2 lg:py-2"
          >
            <Image
              src={item.icon}
              alt={`${item.name} icon`} // Improved accessibility
              width={40}
              height={40}
              className="h-auto w-[40px] sm:w-[30px]"
            />
            <p className="text-sm text-gray-600">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
