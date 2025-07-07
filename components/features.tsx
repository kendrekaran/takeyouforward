'use client';

import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { useState } from 'react';

const features = [
  {
    title: "DSA (Basics to Advanced)",
    description: "Comprehensive DSA course covering from basic to advanced concepts",
    image: "/Dash.png",
    points: [
      "150+ structured video lectures",
      "Hand-picked coding questions",
      "Downloadable notes & cheat-sheets"
    ]
  },
  {
    title: "Pool of 1000+ Problems",
    description: "Practice with our extensive collection of DSA problems",
    image: "/questions.png",
    points: [
      "Categorised topic-wise challenges",
      "Difficulty-level segregation",
      "Editorials & optimal solutions"
    ]
  },
  {
    title: "Lifetime Validity",
    description: "Access the portal and all its content forever",
    image: "/home.png",
    points: [
      "One-time payment, lifetime access",
      "All future updates included",
      "Track progress anytime"
    ]
  },
  {
    title: "Personalised Roadmap",
    description: "Custom learning path based on your schedule",
    image: "/road.png",
    points: [
      "AI-driven study planner",
      "Adaptive difficulty progression",
      "Weekly milestones & reminders"
    ]
  },
  {
    title: "Core Subjects",
    description: "In-depth coverage of DBMS, OS, and Computer Networks",
    image: "/core.png",
    points: [
      "Concept videos & notes",
      "Topic-wise quizzes",
      "Exam-oriented cheat-sheets"
    ]
  },
  {
    title: "OOPs Module",
    description: "Complete OOPs concepts with video lectures, quizzes, and practice problems",
    image: "/oops.png",
    points: [
      "Java & C++ implementations",
      "Real-world design patterns",
      "Hands-on mini projects"
    ]
  }
];

export default function Features() {
  const [, setSelectedTab] = useState(0);

  return (
    <div className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#1d1c20]" >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white xl:text-5xl font-bold mb-4 px-2">
            Everything You Need to <span className="text-[#ea763f]">Crack Interviews</span>
          </h2>
        </div>

        <Tab.Group onChange={setSelectedTab} className="max-w-5xl mx-auto">
          <Tab.List className="flex space-x-2 rounded-xl p-1 overflow-x-auto lg:justify-between " style={{ backgroundColor: 'rgba(234, 118, 63, 0.1)' }}>
            {features.map((feature) => (
              <Tab
                key={feature.title}
                className={({ selected }) =>
                  `flex-shrink-0 rounded-lg py-2.5 px-2 sm:px-4 text-xs sm:text-sm font-medium leading-5 transition-all duration-200 whitespace-nowrap
                  ${selected
                    ? 'bg-[#ea763f] text-white shadow'
                    : 'text-[#ea763f] hover:bg-[#ea763f]/[0.12] hover:text-white'
                  }`
                }
              >
                {feature.title}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="mt-6 sm:mt-8">
            {features.map((feature, idx) => (
              <Tab.Panel
                key={idx}
                className={`rounded-xl py-6 sm:py-8 lg:py-12 px-4 sm:px-6 w-full focus:outline-none focus:ring-2 ring-[#ea763f]/50 bg-black`}
              >
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={`content-${idx}`}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="p-2 sm:p-4 lg:p-6 flex-1 w-full"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-[#ea763f] mb-3 sm:mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-3xl">
                      {feature.description}
                    </p>
                    {feature.points && (
                      <ul className="mt-3 sm:mt-4 list-disc list-inside space-y-1 text-sm sm:text-base text-white/80 max-w-3xl">
                        {feature.points.map((point, i) => (
                          <li key={i} className="leading-relaxed">{point}</li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-4 sm:mt-6">
                      <button className="bg-[#ea763f] hover:bg-orange-700 text-white px-4 sm:px-6 py-2 rounded-md transition duration-300 flex items-center justify-center sm:justify-start text-sm sm:text-base">
                        Explore Syllabus
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={`img-${idx}`}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative overflow-hidden rounded-lg flex-1 w-full h-48 sm:h-56 md:h-64 lg:h-72 order-first lg:order-last"
                  >
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 pointer-events-none"></div>
                  </motion.div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
