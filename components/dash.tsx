export default function AIPoweredCard() {
    return (
      <div className="relative bg-black overflow-hidden p-4 sm:p-6 lg:p-8">
        <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border-t-2 border-l-2 border-[#ea763f] rounded-tl-lg"></div>
  
        <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border-t-2 border-r-2 border-[#ea763f] rounded-tr-lg"></div>
  
        <div
          className="bg-cover bg-center rounded-lg w-full h-64 sm:h-80 lg:h-[500px] flex items-center justify-center text-white text-xl sm:text-2xl lg:text-3xl font-bold"
          style={{
            backgroundImage: 'url("/Dash.png")',
          }}
        >
        </div>
      </div>
    );
  }
  