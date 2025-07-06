"use client"

import React from "react"
import {
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#1d1c20] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">

        <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-6">
          <div className="flex flex-col items-start space-y-3">
            <div className="flex items-center space-x-2 bg-black rounded-lg px-2 py-4">
              <img src="https://takeuforward.org/static/media/TufPlusLight.041fc694d612b3fbaaa0.png" alt="logo" className="h-5 sm:h-6 w-auto" />
            </div>
            <p className="text-xs text-neutral-300 max-w-sm">
              The best place to learn data Structures, algorithms, most asked coding interview questions. real interview experiences free of cost.
            </p>
          </div>


          <div className="flex items-center gap-3 sm:gap-4">
            {[Linkedin, Twitter, Instagram, Youtube].map((Icon, idx) => (
              <Link
                key={idx}
                href="#"
                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center border border-neutral-600 rounded-full hover:border-[#ea763f] hover:text-[#ea763f] transition-colors"
              >
                <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            ))}
          </div>
        </div>


        <div className="mt-4 md:mt-0">
          <h4 className="text-[#ea763f] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
          <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-neutral-300">
            {[
              "About Us",
              "Contact Us",
              "Pricing",
              "Privacy Policy",
              "Terms and Conditions",
              "Cancellation / Refund Policy",
            ].map((item) => (
              <li key={item} className="hover:text-[#ea763f] cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 md:mt-0">
          <h4 className="text-[#ea763f] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Access</h4>
          <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-neutral-300">
            {[
              "Striver's DSA Sheet",
              "Technical Blogs",
              "CS Subjects",
              "Striver's CP Sheet",
            ].map((item) => (
              <li key={item} className="hover:text-[#ea763f] cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 lg:mt-0">
          <h4 className="text-[#ea763f] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">DSA Sheets</h4>
          <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-neutral-300">
            {[
              "Striver's SDE Sheet",
              "Striver's AZ2 DSA Playlist",
              "SDE Core Sheet",
              "Striver's CP Sheet",
            ].map((item) => (
              <li key={item} className="hover:text-[#ea763f] cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 lg:mt-0">
          <h4 className="text-[#ea763f] font-semibold mb-3 sm:mb-4 text-sm sm:text-base">DSA Playlist</h4>
          <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-neutral-300">
            {[
              "Array Series",
              "Graph Series",
              "DP Series",
              "LinkedList Series",
            ].map((item) => (
              <li key={item} className="hover:text-[#ea763f] cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

