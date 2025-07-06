"use client"

const TopBar = () => {
  return (
    <div className="bg-[#ea763f] text-white py-1 px-2 sm:py-2 sm:px-3 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2">
          {/* Left section: Promotional message with mobile button */}
          <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-0">
            <p className="text-neutral-100 font-bold text-sm sm:text-lg md:text-xl">Use Code <span className="text-white">&ldquo;PAYDAY&rdquo;</span></p>
            <p className="text-neutral-100/90 text-xs sm:text-sm md:text-base hidden sm:block"> Lifetime Access Won&apos;t Last Forever</p>
            {/* Mobile button - only visible on mobile */}
            <button
              className="text-neutral-100 bg-[#1d1c20] rounded-full px-3 py-1 text-xs font-bold hover:underline transition-all duration-200 sm:hidden"
              onClick={() => window.open("https://x.com/karaan_dev", "_blank")}
            >
              Click Here
            </button>
          </div>

          {/* Middle section: Static timer display */}
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 mb-1 sm:mb-0">
            <div className="flex flex-col sm:flex-row gap-0 sm:gap-2 items-center">
              <span className="text-lg sm:text-xl md:text-2xl font-bold">07</span>
              <span className="text-xs text-neutral-100/90">DAYS</span>
            </div>
            <span className="text-neutral-100 text-lg sm:text-xl md:text-2xl font-bold">:</span>
            <div className="flex flex-col sm:flex-row gap-0 sm:gap-2 items-center">
              <span className="text-lg sm:text-xl md:text-2xl font-bold">24</span>
              <span className="text-xs text-neutral-100/90">HOURS</span>
            </div>
            <span className="text-neutral-100 text-lg sm:text-xl md:text-2xl font-bold">:</span>
            <div className="flex flex-col sm:flex-row gap-0 sm:gap-2 items-center">
              <span className="text-lg sm:text-xl md:text-2xl font-bold">00</span>
              <span className="text-xs text-neutral-100/90">MINUTES</span>
            </div>
            <span className="text-neutral-100 text-lg sm:text-xl md:text-2xl font-bold">:</span>
            <div className="flex flex-col sm:flex-row gap-0 sm:gap-2 items-center">
              <span className="text-lg sm:text-xl md:text-2xl font-bold">00</span>
              <span className="text-xs text-neutral-100/90">SECONDS</span>
            </div>
          </div>

          {/* Right section: Social link - only visible on larger screens */}
          <button
            className="text-neutral-100 bg-[#1d1c20] rounded-full px-3 py-1 text-xs sm:text-sm font-bold hover:underline transition-all duration-200 hidden sm:block"
            onClick={() => window.open("https://x.com/karaan_dev", "_blank")}
          >
            Click Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar; 