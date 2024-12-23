"use client";
import Image from "next/image";
import { heroIcons } from "@/assets";
import { useMotionValue, motion, useTransform, useSpring } from "framer-motion";
import { useState } from "react";
const Hero = () => {
  const [windowOffset, setWindowOffset] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });
  const [mouseMove, setmouseMove] = useState(false);
  const [buttonHover, setButtonhover] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMousemove = (e) => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);
  };
  const handleMouseEnter = () => {
    setWindowOffset({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
    });
    setmouseMove(true);
  };
  const { innerHeight, innerWidth } = windowOffset;
  const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });

  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30]);
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      id="home"
      className="h-screen grid place-items-center"
      onMouseMove={handleMousemove}
      onMouseEnter={handleMouseEnter}
    >
      <div>
        <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
          <motion.div
            className="flex  items-center justify-center"
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: "0.1s",
            }}
          >
            <Image
              className="w-60 h-60 overflow-hidden rounded-full"
              src="/skills/big-hero-3.webp"
              alt="Person Image"
              width={160}
              height={160}
              priority={true}
            />
            <motion.span
              className="absolute text-3xl font-semibold text-white "
              initial={{ scale: 0 }}
              animate={{
                opacity: buttonHover ? 0 : 1,
                scale: buttonHover ? 2 : 0,
                y: buttonHover ? -40 : 0,
              }}
              transition={{ opacity: { delay: 0.4 } }}
            >
              Hi
            </motion.span>
          </motion.div>
          <h1 className="text-center text-3xl font-bold tracking-wide text-gray-500 sm:text-2xl dark:text-blue-500 transition-colors ">{`I'm Rohit Goswami`}</h1>
          <p className=" text-lg tracking-wider text-gray-700 dark:text-white  transition-colors">
            {" "}
            I like to build 😎
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex felx-col justify-center items-center mt-8 gap-x-10 text-3xl text-blue-600 sm:text-2xl"
        >
          {heroIcons.map((icon, key) => (
            <a
              href="#"
              key={key}
              className="hover:bg-blue-400 hover:text-white rounded-lg"
            >
              {icon}{" "}
            </a>
          ))}
        </motion.div>
        <motion.a
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          href="#"
          className=" mx-auto mt-7  block w-max rounded-lg bg-blue-400 px-3 py-1 capitalize tracking-wider text-white hover:bg-blue-700 transition-colors "
          onMouseEnter={() => setButtonhover(true)}
          onMouseLeave={() => setButtonhover(false)}
        >
          Talk to me
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Hero;
