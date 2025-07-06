"use client"

import { Check, X, Plus } from "lucide-react"

const COMPARISON_DATA = [
  {
    name: "DSA (Basics to Advanced)",
    tuf: {
      available: true,
      description: "Curated list for beginners with practice set",
      highlight: true,
    },
    others: {
      available: true,
      description: "Basic coverage",
    },
  },
  {
    name: "Live Content",
    tuf: {
      available: false,
      description: "Too crowded and chaotic",
      highlight: false,
    },
    others: {
      available: true,
      description: "Available",
    },
  },
  {
    name: "Recorded Content",
    tuf: {
      available: true,
      description: "Broken down to smaller parts to save time",
      highlight: true,
    },
    others: {
      available: true,
      description: "Available",
    },
  },
  {
    name: "DSA (Pattern Wise)",
    tuf: {
      available: true,
      description: "Comprehensive patterns",
      highlight: true,
    },
    others: {
      available: false,
      description: "Limited",
    },
  },
  {
    name: "1000+ Practice Problems",
    tuf: {
      available: true,
      description: "Extensive problem bank",
      highlight: true,
    },
    others: {
      available: false,
      description: "Apart from very few",
    },
  },
  {
    name: "Customised Roadmap",
    tuf: {
      available: true,
      description: "Personalized learning path",
      highlight: true,
    },
    others: {
      available: false,
      description: "Generic approach",
    },
  },
  {
    name: "Course + Platform",
    tuf: {
      available: true,
      description: "Integrated experience",
      highlight: true,
    },
    others: {
      available: false,
      description: "Apart from few dead ones",
    },
  },
  {
    name: "Notes Downloader to Google Docs",
    tuf: {
      available: true,
      description: "Seamless integration",
      highlight: true,
    },
    others: {
      available: false,
      description: "Not available",
    },
  },
]

export default function Comparison() {

  return (
    <section className="bg-black py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <header className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
            Compare <span className="text-[#ea763f]">What You Learn</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm sm:text-base">
            See how TUF stands out from other platforms
          </p>
        </header>

        {/* Comparison Card */}
        <div className="overflow-x-auto">
          <div className="bg-black/40 border border-white/10 backdrop-blur-sm rounded-xl font-semibold min-w-[720px] divide-y divide-white/10">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-[#1d1c20]">
              <div className="p-6 border-b md:border-b-0 md:border-r border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold">Features</h3>
              </div>
              <div className="p-6 border-b md:border-b-0 md:border-r border-white/10 text-center bg-black/20 flex items-center justify-center gap-2">
                <span className="text-xl font-bold text-[#ea763f]">TUF</span>
                <Plus className="w-6 h-6 text-[#ea763f] fill-[#ea763f]" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-300">Alpha Platforms</h3>
              </div>
            </div>

            {/* Rows */}
            {COMPARISON_DATA.map((feature, i) => (
              <div
                key={feature.name}
                className={`grid grid-cols-3 font-semibold ${i % 2 === 0 ? "bg-white/5" : "bg-[#1d1c20]"}`}
              >
                {/* Name */}
                <div className="p-4 sm:p-6 border-r border-white/10">
                  <p className="font-semibold text-sm sm:text-base">{feature.name}</p>
                </div>
                {/* TUF */}
                <div className="p-4 sm:p-6 border-r border-white/10 bg-black/10">
                  <div className="flex items-start gap-3 ">
                    {feature.tuf.available ? (
                      <div className="flex-shrink-0 w-6 h-6 bg-[#ea763f] rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    ) : (
                      <div className="flex-shrink-0 w-6 h-6 bg-[#ea763f]/10 border border-[#ea763f] rounded-full flex items-center justify-center">
                        <X className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div>
                      <p className="font-se flex items-start gap-4 text-sm sm:text-base mb-1">
                        {feature.tuf.available ? "Yes" : "No"}
                        {feature.tuf.highlight && (
                          <span className="inline-block  bg-[#ea763f]/20 text-[#ea763f] border border-[#ea763f]/30 rounded px-2 py-0.5 text-xs font-se">
                            Advantage
                          </span>
                        )}
                      </p>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                        {feature.tuf.description}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Others */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-start gap-3">
                    {feature.others.available ? (
                      <div className="flex-shrink-0 w-6 h-6 bg-[#ea763f] rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    ) : (
                      <div className="flex-shrink-0 w-6 h-6 bg-[#ea763f]/10 border border-[#ea763f] rounded-full flex items-center justify-center">
                        <X className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div>
                      <p className="font-se text-sm sm:text-base mb-1 text-neutral-300">
                        {feature.others.available ? "Yes" : "No"}
                      </p>
                      <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                        {feature.others.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
