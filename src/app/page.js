"use client"

import About from "@/components/About"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"
import Reviews from "@/components/Reviews"
import Skills from "@/components/Skills"
import Toggle from "@/components/sub/Toggle"
import "./globals.css";
import { useEffect, useRef, useState } from "react"
const Home = () => {
  const [id, setId] = useState(0);
  const compsRef = useRef(null);
  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersection = entry.isIntersecting
          if (intersection) {
            setId(entry.target.id);
          }
        })

      }, { threshold: 0.3 },
    )
    const compsArr = Array.from(compsRef.current.children || [])
    compsArr.forEach((comp) => {
      observer.observe(comp)
    })

    return () => {
      observer.disconnect(); // Cleanup observer on component unmount
    };
  }, [])

  return (
    <>
      <Toggle>
        <Navbar id={id} />
        <div className="w-min" ref={compsRef}>
          <Hero />
          <About />
          <Skills />
          <Reviews />
          <Projects />
        </div>
      </Toggle>
    </ >
  )
}

export default Home
