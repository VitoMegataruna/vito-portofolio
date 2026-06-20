"use client";

import Header from "./component/header";
import Footer from "./component/footer";
import Hero from "./section/hero";
import About from "./section/about";
import Skill from "./section/skill";
import Proexp from "./section/professional";
import Project from "./section/project";
import Contact from "./section/contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen">
      <Header />
      <Hero />

      <About />
      <Skill />
      <Proexp />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
