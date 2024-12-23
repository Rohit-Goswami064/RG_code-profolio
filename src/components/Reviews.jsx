"use clients";

import Image from "next/image";
import Header from "./sub/Header";
import { reviewsData, starIcon, arrowIcon } from "@/assets";
import { useEffect, useRef, useState } from "react";
import { motion, animate } from "framer-motion";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(false);
  const prevIndex = useRef(0);

  const rightClickhandler = () => {
    animate(silders.current[index], { x: 0 }, { delay: 0.3 });
    animate(silders.current[prevIndex.current], {
      scale: index === 0 ? 1 : 0.4,
      rotate: index === 0 ? 0 : index % 2 === 0 ? 10 : -10,
    });
  };
  const leftClickHnadler = () => {
    animate(silders.current[index], { scale: 1, rotate: 0 }, { delay: 0.2 });
    animate(silders.current[prevIndex.current], { x: "100%" });
  };
  const silders = useRef([]);
  console.log(silders.current);

  useEffect(() => {
    direction ? leftClickHnadler() : rightClickhandler();
    prevIndex.current = index;
  }, [direction, leftClickHnadler, rightClickhandler]);

  return (
    <div id="reviews" className="my-20 px-96">
      <Header text={"Reviews"} />
      <div>
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className=" overflow-hidden relative w-[800px] lg:w-[600px] md:w-[95%] sm:w-[270px] h-[500px] lg:h-[450px] md:h-[400px] smlh-[600px] flex  items-center justify-center"
          >
            {reviewsData.map((review, i) => (
              <motion.div
                initial={{ x: "100%" }}
                key={i}
                className="absolute inset-0 flex flex-col items-center justify-center gap-y-7 lg:gap-y-4 border border-blue-500 bg-zinc-50 p-14 lg:p-5 rounded-xl dark:bg-zinc-700  transition-colors"
                ref={(el) => silders.current.push(el)}
              >
                <Image
                  src={review.image}
                  alt="client image"
                  width={130}
                  height={130}
                  className="w-[130px] aspect-square rounded-full border border-blue-500 p-4 object-contain "
                />
                <h1 className="text-2xl md:text-xl text-center tracking-wide text-blue-500">
                  {review.name}
                </h1>
                <p className="text-lg md:text-sm text-justify font-extralight tracking-wide text-gray-500 first-letter:pl-2 dark:text-white transition-colors">
                  {review.comment}
                </p>

                <div className=" felx flex-col items-center justify-center gap-y-2 ">
                  <span className="text-lg font-light  text-blue-500 mr-3 ">
                    {review.start.reduce((sum, item) => {
                      sum += item;
                      return sum;
                    }, 0)}
                  </span>
                  <div className="flex items-center justify-center gap-x-2 text-2xl text-yellow-500">
                    {review.start.map((star, i) => (
                      <span key={i}>
                        {star === 1 ? starIcon[0] : starIcon[1]}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className=" flex gap-x-4 text-4xl text-blue-500">
            <button
              className={`${
                index === 0
                  ? "opacity-30 pointer-events-none"
                  : "opacity-30  pointer-events-auto"
              } hover:scale-150 transition-all`}
              onClick={() => {
                setDirection(true);

                setIndex(index - 1);
              }}
            >
              {arrowIcon[0]}
            </button>
            <button
              className={`${
                index === reviewsData.length - 1
                  ? "opacity-30 pointer-events-none"
                  : "opacity-30  pointer-events-auto"
              } hover:scale-150 transition-all`}
              onClick={() => {
                setDirection(false);

                setIndex(index + 1);
              }}
            >
              {arrowIcon[1]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
