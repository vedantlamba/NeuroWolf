import React from "react";

const ProblemSection = () => {
  const problems = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
          />
        </svg>
      ),
      title: "Manual Interaction",
      description:
        "Handling every customer call manually takes time.\nYour team gets overwhelmed.\nGrowth slows down.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Missed Engagement",
      description:
        "Leads drop off when no one responds fast.\nLost chances hurt revenue.\nEvery second counts.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "AI Trust Issues",
      description:
        "Businesses fear AI making mistakes.\nData security is a concern.\nTrust is non-negotiable.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto text-wrap">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-violet-500 text-sm font-semibold tracking-wide uppercase px-3 py-1 rounded-full">
              PROBLEM
            </span>
          </div>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-balance">
            Manual Customer Interaction is a Hassle
          </h2>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-12 px-8 py-12">
          {problems.map((problem, index) => (
            <div key={index}>
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-violet-50 text-violet-500 rounded-full mb-6">
                {problem.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed max-w-sm ">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
