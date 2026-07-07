import Image from "next/image";
import * as React from "react";
import { useState, useEffect } from "react";
import Headline from "./headline";
import Reveal from "../component/Reveal";
export default function Hero() {
  const words = [
    "Front-End Developer",
    "Project Manager",
    "Let's colaborate together!",
  ];

  const [text, setText] = useState("");
  const [i, setI] = useState(0); // index kata
  const [j, setJ] = useState(0); // index huruf
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[i];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentWord.substring(0, j - 1));
        setJ(j - 1);

        if (j === 0) {
          setIsDeleting(false);
          setI((prev) => (prev + 1) % words.length);
        }
      } else {
        setText(currentWord.substring(0, j + 1));
        setJ(j + 1);

        if (j === currentWord.length) {
          setIsDeleting(true);
        }
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [i, j, isDeleting, words]);

  return (
    <Reveal>
      <div className="w-full h-screen">
        <div className="relative md:flex md:flex-cols-2 grid-flow-row h-[75%] w-full ">
          <div className="w-full md:h-full h-[100%] bg-primary border-4 border-t-4 border-index flex flex-col gap-5 md:justify-center">
            <div className="md:text-6xl text-5xl font-extrabold flex flex-col ml-8 md:-mt-5 md:w-1/2 mt-6 transition-transform duration-700 ease-in -translate-x-0">
              <span className="md:text-2xl text-sm mb-2 md:mb-4">
                Hello, I am{" "}
              </span>
              Vito Megataruna
            </div>
            <div className="md:text-2xl text-md font-bold ml-8">
              <span id="typewriter">{text}</span>
              <span className="animate-pulse">|</span>
            </div>
            <div className="flex flex-row gap-4 ml-8">
              <img
                src="/assets/github.png"
                alt="github"
                className="w-8 hover:scale-110 transition-transform duration-150 ease-in-out bg-index rounded-full border-2 border-index"
              />
              <img
                src="/assets/linkedin.png"
                alt="linkedin"
                className="w-8 hover:scale-110 transition-transform duration-150 ease-in-out bg-index rounded-full border-2 border-index"
              />
              <img
                src="/assets/instagram.png"
                alt="instagrm"
                className="w-8 hover:scale-110 transition-transform duration-150 ease-in-out bg-index rounded-full border-2 border-index"
              />
            </div>
          </div>
          <div className="absolute md:right-0 md:w-[65%] bottom-0 md:h-full h-[50%] w-full md:border-index md:border-y-8 md:border-r-8  md:trapezoid-web trapezoid-mobile flex items-center justify-center bg-secondary">
            <Image
              src={"/assets/potrait.jpg"}
              width={300}
              height={300}
              alt="Vito Megataruna"
              className="md:w-80  w-44 md:translate-x-16  rounded-full md:border-8 border-4 border-index"
            />
          </div>
        </div>
        <Headline />
      </div>
    </Reveal>
  );
}
