"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Add some debouncing to make it smoother
      const currentScrollPos = window.scrollY
      setIsScrolled(currentScrollPos > 50)
    }

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navContent = (
    <div className="flex items-center justify-between max-w-7xl mx-auto">
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-2 bg-black rounded-lg px-2 py-4">
          <img src="https://takeuforward.org/static/media/TufPlusLight.041fc694d612b3fbaaa0.png" alt="logo" className="h-3 w-auto" />
        </div>
        <span className="text-lg font-bold">takeUforward</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <Link href="#" className="text-white hover:text-[#ea763f] transition-colors">
          Home
        </Link>
        <Link href="#" className="text-white hover:text-[#ea763f] transition-colors">
          Pricing
        </Link>
        <Link href="#" className="text-white hover:text-[#ea763f] transition-colors">
          Resources
        </Link>
      </nav>

      {/* Desktop Login Button */}
      <button className="hidden md:block bg-[#ea763f] hover:bg-orange-700 text-white px-4 py-1 text-lg rounded-sm transition duration-300">
        Login
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  )

  return (
    <>
      {/* Placeholder div to prevent layout shift */}
      <div className={`h-[72px] ${isScrolled ? 'block' : 'hidden'}`} />
      
      {/* Navbar */}
      <header 
        className={`w-full bg-[#1d1c20] px-4 sm:px-6 py-4 transition-all duration-300 ease-in-out ${
          isScrolled 
            ? 'fixed top-0 left-0 right-0 z-50 shadow-lg transform-gpu translate-y-0' 
            : 'relative transform-gpu -translate-y-0'
        }`}
      >
        {navContent}

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link 
                href="#" 
                className="text-white hover:text-[#ea763f] transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#" 
                className="text-white hover:text-[#ea763f] transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="#" 
                className="text-white hover:text-[#ea763f] transition-colors px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <button className="bg-[#ea763f] hover:bg-orange-700 text-white px-4 py-2 text-lg rounded-sm transition duration-300 mx-2 mt-4">
                Login
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}

export default Navbar 