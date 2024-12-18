"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const Project = ({ data, index }) => {
  const [show, setShow] = useState(false);
  // if (!data || !data.url || !data.img) {
  //   // Render "Coming Soon" placeholder
  //   return (
  //     <div
  //       key={index}
  //       className="relative w-[350px] sm:w-full h-max border border-blue-400 rounded-lg cursor-pointer flex items-center justify-center bg-gray-100"
  //     >
  //       <div className="text-center p-4">
  //         <Image
  //           src="/projects/Coming Soon Poster .jpg" // Add a placeholder image to your public folder
  //           alt="Coming Soon"
  //           width={400}
  //           height={400}
  //           className="rounded-lg opacity-50"
  //         />
  //         <h2 className="text-lg font-semibold tracking-wide text-gray-600 mt-4">
  //           Coming Soon
  //         </h2>
  //         <p className="text-gray-500 text-sm">
  //           This section is under development. Stay tuned!
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <motion.div
      initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
      onHoverStart={() => setShow((show) => !show)}
      key={index}
      className="relative w-[350px] sm:w-full h-max border border-blue-400 rounded-lg cursor-pointer"
    >
      <a href={data.url}>
        <Image
          src={data.img}
          alt="projectImage"
          width={400}
          height={400}
          className="rounder-lg opacity-70 "
        />
      </a>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 1 : 0 }}
        className="absolute top-0 w-full h-full flex flex-col items-center justify-center gap-y-2 bg-white/95 p-6 rounded-lg "
      >
        <h2 className="text-lg font-bold tracking-wide text-gray-500">
          {data.name}
        </h2>
        <p className="text-justify text-gray-500 first-letter:pl-2">
          {data.des}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Project;
