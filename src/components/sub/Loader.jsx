"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Chau_Philomene_One } from "next/font/google";

const Loader = ({ children }) => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoad(true), 500); // Delay for smoother transition
  }, []);

  return (
    <>
      {load ? (
        children
      ) : (
        <motion.div
          initial={{ top: 0 }}
          animate={{ top: "-100%" }}
          transition={{ duration: 0.5 }}
          className="w-full h-full fixed left-0 top-0 z-50 flex items-center justify-center bg-gradient-to-t from-blue-200 to-red-50"
        >
          <Image
            src="/loader.gif"
            alt="Loading animation"
            width={200}
            height={200}
          />
        </motion.div>
      )}
    </>
  );
};

export default Loader;
