"use client"

import About from "@/components/About"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Reviews from "@/components/Reviews"
import Skills from "@/components/Skills"

const page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Reviews />
      <Projects />
    </div>
  )
}

export default page
