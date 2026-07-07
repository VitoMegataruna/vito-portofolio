import * as React from "react";
import Image from "next/image";
import { FiCode, FiBookOpen, FiUsers } from "react-icons/fi";
import Reveal from "../component/Reveal";

export default function About() {
  return (
    <Reveal>
      <div
        id="about"
        className="h-fit md:h-screen w-full bg-secondary flex flex-col items-center text-4xl font-bold text-index pb-6 scroll-mt-24"
      >
        <h1 className="text-4xl font-bold text-index mt-8 flex">About Me</h1>
        <Image
          src="/assets/divider.png"
          width={200}
          height={5}
          alt="Divider"
          className="-my-8"
        />
        <p className="md:text-xl text-lg text-index text-center mx-4 md:mx-20 md:mb-6 ">
          My journey is shaped by three meaningful passions: IT, Story, and
          Community. Each of these fields highlights my expertise and values,
          guiding the way I collaborate, create, and connect.{" "}
        </p>
        <div className="px-4 w-full grid md:grid-cols-3 grid-rows-3 gap-4 mt-4">
          <div className="bg-secondary-alt p-6 rounded-3xl">
            <div className="flex items-center justify-center mb-4 rounded-full bg-primary/10 w-16 h-16 mx-auto text-primary">
              <FiCode className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-index text-center">IT</h2>
            <p className="text-lg text-index mt-4">
              I focus on clarity, efficiency, and seamless execution in
              technology, ensuring every interface serves both function and
              people. This approach reflects my commitment to bridging vision
              and reality.
            </p>
          </div>
          <div className="bg-secondary-alt p-6 rounded-3xl">
            <div className="flex items-center justify-center mb-4 rounded-full bg-primary/10 w-16 h-16 mx-auto text-primary">
              <FiBookOpen className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-index text-center">Story</h2>
            <p className="text-lg text-index mt-4">
              Story is the foundation of how I grow and connect.
              <br /> Each experience—academic, professional and personal—teaches
              resilience and empathy. I resemble these journeys into songs,
              movies, blogs, and personal narratives, turning them into
              reflections that inspire and connect with others.
            </p>
          </div>
          <div className="bg-secondary-alt p-6 rounded-3xl">
            <div className="flex items-center justify-center mb-4 rounded-full bg-primary/10 w-16 h-16 mx-auto text-primary">
              <FiUsers className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-index text-center">
              Community
            </h2>
            <p className="text-lg text-index mt-4">
              I believe communities are the backbone of innovation. <br />{" "}
              Through collaboration, mentoring, and knowledge-sharing, I
              contribute to environments where everyone can thrive. Each
              connection adds value, shaping solutions that extend beyond
              individual work.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
