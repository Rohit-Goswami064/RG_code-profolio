"use client";

import { projectbutton, projectData } from "@/assets";
import Header from "./sub/Header";
import Project from "./sub/project";
import { useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";

const Projects = () => {
  const [tech, setTech] = useState("All");
  const [index, setIndex] = useState(0);
  const prevIndex = useRef(0);
  const buttonRef = useRef([]);

  const handleClick = () => {
    animate(buttonRef.current[prevIndex.current], { opacity: 0.5, scale: 1 });
    animate(buttonRef.current[index], { opacity: 1, scale: 1.2 });
  };

  useEffect(() => {
    handleClick();
    prevIndex.current = index;
  }, [index]);

  return (
    <div className="min-h-screen py-20 px-60">
      <Header text={"Projects"} />
      <div className="flex flex-wrap items-center justify-between gap-4 py-10">
        {projectbutton.map((buttons, i) => (
          <motion.button
            initial={{ opacity: i === 0 ? 1 : 0.5, scale: i === 0 ? 1.2 : 1 }}
            key={i}
            ref={(el) => (buttonRef.current[i] = el)}
            className="border border-blue-500 rounded-xl px-2 py-1 text-sm font-light tracking-wider text-gray-400"
            onClick={() => {
              setIndex(i);
              setTech(buttons);
            }}
          >
            {buttons}
          </motion.button>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5 ">
        {projectData
          .filter((project) => {
            return project.tech.some((item) =>
              tech === "All" ? true : item === tech
            );
          })
          .map((data, i) => (
            <motion.div layout key={`id-${i}`}>
              <Project data={data} index={i} />
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
