export default function TiltedHighlightText() {
    return (
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight px-4 sm:px-0">
        Upskill yourself
        With{" "}
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>
        <span className="relative inline-block px-2 my-2 sm:my-0">    
          <span className="absolute -inset-1 bg-[#ea763f] rounded-md transform rotate-[2deg]"></span>
          <span className="relative text-white">Just One</span>
        </span>
        {" "}Subscription
      </h1>
    );
  }
  