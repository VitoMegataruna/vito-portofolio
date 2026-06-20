"use client";

import * as React from "react";
import { useState, useEffect } from "react";

export default function CPNS2026() {
  const words = ["BISMILLAH CPNS 2026", "Formasi Disabilitas"];

  const [text, setText] = useState("");
  const [i, setI] = useState(0); // index kata
  const [j, setJ] = useState(0); // index huruf
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentWord = words[i];

    let timeout = setTimeout(() => {
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
    <div className="flex h-screen w-full">
      <div className="md:text-6xl text-lg font-bold m-auto">
        <h1>Hi, Saya Vito Megataruna</h1>
        <div id="typewriter">{text}|</div>
      </div>
    </div>
  );
}
