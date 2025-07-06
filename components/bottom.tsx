"use client"

import React, { useRef } from "react"

export default function Bottom() {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const el = wrapperRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    el.style.setProperty("--x", `${x}px`)
    el.style.setProperty("--y", `${y}px`)
  }

  const src =
    "https://takeuforward.org/static/media/TufPlusLight.041fc694d612b3fbaaa0.png"

  return (
    <div className="hidden sm:flex bg-[#1d1c20] justify-center items-start pt-8 sm:pt-12">
      <div
        ref={wrapperRef}
        onMouseMove={handleMouseMove}
        className="relative inline-flex cursor-pointer select-none"
        style={
          {
            "--x": "50%",
            "--y": "50%",
          } as React.CSSProperties
        }
      >
        <img
          src={src}
          alt="logo"
          className="h-32 sm:h-56 md:h-72 w-auto opacity-10 pointer-events-none"
        />

        <img
          src={src}
          alt="logo spotlight"
          className="absolute inset-0 h-32 sm:h-56 md:h-72 w-auto pointer-events-none object-contain"
          style={
            {
              maskImage:
                "radial-gradient(circle 60px at var(--x) var(--y), white 0%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(circle 60px at var(--x) var(--y), white 0%, transparent 70%)",
            } as React.CSSProperties
          }
        />
      </div>
    </div>
  )
}
