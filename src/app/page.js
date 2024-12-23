"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Skills from "@/components/Skills";
import Toggle from "@/components/sub/Toggle";
import "./globals.css";
import { useEffect, useRef, useState } from "react";
import Loader from "@/components/sub/Loader";

const Home = () => {
  const [id, setId] = useState("");
  const compsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setId(entry.target.id); // Ensure each target has a valid `id`
          }
        });
      },
      { threshold: 0.3 }
    );

    // Check if `compsRef.current` exists before accessing `children`
    if (compsRef.current) {
      const compsArr = Array.from(compsRef.current.children || []);
      compsArr.forEach((comp) => {
        observer.observe(comp);
      });
    }

    return () => {
      observer.disconnect(); // Cleanup observer on component unmount
    };
  }, []);

  return (
    <>
      <Loader>
        <Toggle>
          <Navbar id={id} />
          <div className="w-min" ref={compsRef}>
            {/* Add `id` attributes to ensure correct observation */}
            <div id="hero"><Hero /></div>
            <div id="about"><About /></div>
            <div id="skills"><Skills /></div>
            <div id="reviews"><Reviews /></div>
            <div id="projects"><Projects /></div>
          </div>
        </Toggle>
      </Loader>
    </>
  );
};

export default Home;
