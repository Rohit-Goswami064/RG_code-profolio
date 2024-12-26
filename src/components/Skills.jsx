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
      className="min-h-screen flex flex-col items-center justify-center px-96 gap-y-20 "
    >
      <Header text={"Skills"} />
      <div className="w-full flex flex-wrap justify-center gap-x-4 gap-y-6 sm:gap-x-6 lg:gap-x-8 lg:gap-y-8">
        {skillsData.map((item, i) => (
          <motion.div
            custom={i}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            key={i}
            whileHover={{ scale: 1.1 }}
            viewport={{ margin: "50px", once: true }}
            className="flex items-center justify-center gap-x-3 rounded-xl border border-blue-500 bg-zinc-200 px-4 py-3 sm:px-5 sm:py-3 lg:px-6 lg:py-4"
          >
            <Image
              src={item.icon}
              alt={`${item.name} icon`}
              width={40}
              height={40}
              className="h-auto w-[30px]"
            />
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              {item.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
