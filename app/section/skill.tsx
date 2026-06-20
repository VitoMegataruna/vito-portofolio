import * as React from "react";

export default function Skill() {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement | null>(null);

  const skills = [
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "TypeScript", level: 80 },
    { name: "Laravel", level: 85 },
    { name: "MySQL", level: 85 },
    { name: "SEO", level: 75 },
  ];

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full h-fit bg-index border-8 border-secondary p-6 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="text-4xl font-bold text-secondary-alt mt-3">Skills</h2>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((s) => (
          <div
            key={s.name}
            className="transform transition duration-700 ease-out"
            style={{ transitionDelay: isVisible ? "150ms" : "0ms" }}
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium text-secondary-alt">{s.name}</span>
              <span className="text-secondary">{s.level}%</span>
            </div>

            <div
              className="w-full bg-secondary rounded-full h-4 overflow-hidden"
              role="progressbar"
              aria-valuenow={s.level}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="bg-primary h-4 rounded-full transition-all duration-1000 ease-out"
                style={{ width: isVisible ? `${s.level}%` : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
