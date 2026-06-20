import * as React from "react";

const steps = [
  {
    label: "AdainAcara",
    description: "Working remotely as an IT Project Manager",
  },
  {
    label: "Universitas Jenderal Soedirman",
    description: "Graduate with a Bachelor's degree in Computer Science",
  },
  {
    label: "Ethos",
    description: "Onsite Internship to gain practical experience",
  },
];

export default function Proexp() {
  return (
    <section className="w-full bg-secondary py-12 text-index">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-4xl font-bold text-index mb-6">Experiences</h2>
        <p className="max-w-2xl text-lg text-index/80 mb-10">
          These milestones highlight adaptability, collaboration, and the drive
          to deliver impactful digital solutions.
        </p>

        <div className="relative md:pl-12 pl-0">
          {/* Vertical line */}
          <div className="absolute translate-x-5 top-0 h-full w-1 rounded-full bg-primary/30" />

          {steps.map((step, index) => (
            <div key={step.label} className="relative mb-12 last:mb-0">
              <div className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-secondary shadow-lg">
                {index + 1}
              </div>
              <div className="rounded-4xl translate-x-16 ">
                <h3 className="md:text-2xl text-xl font-semibold text-index">
                  {step.label}
                </h3>
                <p className="mt-3 md:text-lg text-base leading-7 text-index/80">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
