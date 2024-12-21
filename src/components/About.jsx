"use client";

import Image from "next/image";
import Header from "./sub/Header";
import Achievements from "./sub/Achievements";
import { aboutData, AboutText, ArrowLeftIcon, DownloadIcon } from "@/assets";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen px-96 flex flex-col items-center justify-center"
    >
      <Header text={"About"} />

      <div className="w-full flex items-center justify-between md:justify-center ">
        <Image
          src="/RG_about.webp"
          alt="RG_coder"
          width={100}
          height={100}
          className="w-[120px] lg:w-[60px] md:hidden"
        />

        <div className="max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify ">
          <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 md:hidden">
            {ArrowLeftIcon}
          </span>
          <p className="text-lg font-light text-gray-700 first-letter:pl-3 lg:text-[16px] sm:text-[14px]">
            {AboutText}
          </p>
          <a
            href="/Rohit_Goswami.pdf"
            download=""
            className="w-max flex items-center gap-x-2 mt-6 rounded-full border-gray-300 bg-blue-400 px-3 py-2 font-light text-white hover:bg-blue-500 transition-colors "
          >
            <span>Download CV</span>
            <span className="text-xl">{DownloadIcon}</span>
          </a>
        </div>
      </div>
      <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
        {aboutData.map((item, i) => (
          <Achievements key={i} title={item.title} amount={item.amount}>
            {item.icon}
          </Achievements>
        ))}
      </div>
    </div>
  );
};

export default About;
