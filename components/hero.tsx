"use client"
import { ChevronsDown } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import TiltedHighlightText from "./heading"
import AIPoweredCard from "./dash"
import TopBar from "./topbar"
import Navbar from "./navbar"

interface CounterProps {
  end: number
  duration?: number
}

const Counter = ({ end, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTime: number | null = null
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = (currentTime - startTime) / duration

            if (progress < 1) {
              setCount(Math.floor(end * progress))
              requestAnimationFrame(animate)
            } else {
              setCount(end)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [end, duration, hasAnimated])

  return <span ref={counterRef}>{count}+</span>
}

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white">
      <TopBar />
      <Navbar />
      {/* Hero Section */}
      <main className="px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Product Badge */}
          <div className="flex justify-center mb-4">
            <div className="text-neutral-400 bg-[#1d1c20] px-3 sm:px-4 py-1 sm:py-2 rounded-full flex items-center space-x-2 text-sm sm:text-base">
              <span className="font-medium">Crafted by Top Engineers</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-6 sm:mb-8 max-w-4xl mx-auto">
            <TiltedHighlightText />
            <p className="text-white text-sm sm:text-base lg:text-lg my-6 sm:my-8 max-w-xl mx-auto px-4">
              The most trusted platform for engineers to upskill and crack tech
              interviews in the least time
            </p>

            {/* CTA Button */}
            <div className="py-4 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 max-w-md mx-auto px-4">
              <button className="bg-gray-900 border text-white w-full py-3 text-base sm:text-lg rounded-sm flex items-center justify-center hover:bg-gray-800 transition duration-300">
                Explore Offerings
                <ChevronsDown className="w-5 h-5 sm:w-6 sm:h-6 ml-2" />
              </button>
              <button className="bg-[#ea763f] hover:bg-orange-700 text-white w-full py-3 text-base sm:text-lg rounded-sm flex items-center justify-center transition duration-300">
                Buy Now
              </button>
            </div>
          </div>

          {/* Main Visual */}
          <div className="relative max-w-5xl mx-auto my-12 sm:my-16 lg:my-20">
            <AIPoweredCard />
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-8 sm:gap-4 text-center px-4">
            <div className="py-4">
              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-2">
                <Counter end={5644} />
              </h3>
              <p className="text-gray-400 text-xs sm:text-lg">Users Joined</p>
            </div>
            <div className="py-4">
              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-2">
                <Counter end={200} />
              </h3>
              <p className="text-gray-400 text-xs sm:text-lg">Topics Covered</p>
            </div>
            <div className="py-4">
              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-2">
                <Counter end={1000} />
              </h3>
              <p className="text-gray-400 text-xs sm:text-lg">Questions</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
