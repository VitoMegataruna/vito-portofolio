import * as React from "react";
import Image from "next/image";
export default function About() {
  return (
    <div className="h-fit w-full bg-secondary flex flex-col items-center text-4xl font-bold text-index pb-6">
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
      <div className="px-4 w-full grid grid-cols-3 gap-4 mt-4">
        <div className="bg-secondary-alt p-4  ">
          <h2 className="text-2xl font-bold text-index">IT</h2>
          <p className="text-lg text-index">
            Technology is my canvas, where I combine project management and
            front-end development to shape intuitive digital products. I focus
            on clarity, efficiency, and seamless execution, ensuring every
            interface serves both function and people. This approach reflects my
            commitment to bridging vision and reality.{" "}
          </p>
        </div>
        <div className="bg-secondary-alt p-4 ">
          <h2 className="text-2xl font-bold text-index">Story</h2>
          <p className="text-lg text-index">
            Story is the foundation of how I grow and connect. Each
            experience—academic, professional, and personal—teaches resilience
            and empathy. I resemble these journeys into songs, movies, blogs,
            and personal narratives, turning them into reflections that inspire
            and connect with others.
          </p>
        </div>
        <div className="bg-secondary-alt p-4  ">
          <h2 className="text-2xl font-bold text-index">Community</h2>
          <p className="text-lg text-index">
            I believe communities are the backbone of innovation. Through
            collaboration, mentoring, and knowledge-sharing, I contribute to
            environments where everyone can thrive. Each connection adds value,
            shaping solutions that extend beyond individual work.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
