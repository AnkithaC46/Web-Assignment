const HeroSection = () => {
  return (
    <div className="relative bg-blue-500 min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-0"> {/* Added min-h-screen and vertical padding */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-90"></div>
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between"> {/* Changed md:flex-row to lg:flex-row for more stack space */}
        <div className="text-white text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4"> {/* Adjusted text sizes for responsiveness */}
            We help you <br /> grow your business <br /> faster
            <span className="relative inline-block ml-2">
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5C30 0 70 0 100 5" stroke="#fff" strokeWidth="2"/>
              </svg>
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-md mx-auto lg:mx-0"> {/* Adjusted text sizes and added mx-auto for centering on small screens */}
            Ehya is the Instagram analytics platform teams use to stay focused on the goals, track engagement for report your business.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start"> {/* Centered buttons for small screens */}
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              See how it works
            </button>
            <button className="text-white border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300 flex items-center justify-center">
              Get a free demo
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
          </div>
        </div>

        {/* Mockup Dashboard Section */}
        <div className="relative w-full lg:w-1/2 h-[400px] md:h-[500px] flex items-center justify-center mt-10 lg:mt-0"> {/* Adjusted height and added top margin for small screens */}
            <div className="absolute bg-white rounded-3xl shadow-xl p-4 sm:p-6 w-[90%] md:w-[85%] h-[90%] md:h-[85%] z-20 flex flex-col justify-between"> {/* Adjusted width/height for small screens */}
                {/* Top bar with "Overview" and controls */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-4"> {/* Stacked on small, row on small+ */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-0">Overview</h3> {/* Adjusted text size */}
                    <div className="flex flex-col space-y-1 text-xs">
                        <span className="text-sm font-semibold text-gray-500">Ads Statuses</span> {/* Added a label for clarity */}
                        <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs sm:text-sm"> {/* Used grid for better layout */}
                            <div className="flex items-center">
                                <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span> Active
                            </div>
                            <div className="flex items-center">
                                <span className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></span> Need Action
                            </div>
                            <div className="flex items-center">
                                <span className="w-2 h-2 rounded-full bg-red-500 mr-1"></span> Inactive
                            </div>
                            <div className="flex items-center">
                                <span className="w-2 h-2 rounded-full bg-gray-400 mr-1"></span> Suspended
                            </div>
                        </div>
                    </div>
                </div>

                {/* Two main cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-grow">
                    <div className="bg-gray-50 rounded-xl p-3 sm:p-4 shadow-sm flex flex-col justify-between"> {/* Adjusted padding */}
                        <div className="flex items-center justify-between mb-2 text-sm sm:text-base">
                            <span className="font-semibold text-gray-700">20 Days</span>
                            <span className="text-xs text-gray-500">Average likes gained</span>
                        </div>
                        <p className="text-xl sm:text-2xl font-bold text-gray-800">12.5%</p> {/* Adjusted text size */}
                        <div className="h-20 sm:h-24 bg-gray-200 rounded-lg flex items-end overflow-hidden p-2 space-x-1"> {/* Adjusted height */}
                            {/* Placeholder bars */}
                            {[...Array(10)].map((_, i) => (
                                <div key={i} className="w-3 bg-blue-400 rounded-sm" style={{ height: `${Math.random() * 80 + 20}%` }}></div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 sm:p-4 shadow-sm flex flex-col justify-between"> {/* Adjusted padding */}
                        <div className="flex items-center justify-between mb-2 text-sm sm:text-base">
                            <span className="font-semibold text-gray-700">Audience Growth</span>
                            <span className="text-xs text-gray-500">Weekly followers</span>
                        </div>
                        <div className="h-20 sm:h-24 bg-gray-200 rounded-lg flex items-end overflow-hidden p-2 space-x-1"> {/* Adjusted height */}
                            {/* Placeholder bars */}
                            {[...Array(10)].map((_, i) => (
                                <div key={i} className={`w-3 rounded-sm ${i % 2 === 0 ? 'bg-orange-400' : 'bg-green-400'}`} style={{ height: `${Math.random() * 80 + 20}%` }}></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom card (simplified) */}
                <div className="bg-gray-50 rounded-xl p-3 sm:p-4 shadow-sm mt-4"> {/* Adjusted padding */}
                    <h4 className="font-semibold text-gray-700 text-sm sm:text-base">Engagement Rate</h4> {/* Adjusted text size */}
                    <div className="h-12 sm:h-16 bg-gray-200 rounded-lg mt-2">
                        {/* Placeholder for a line chart */}
                    </div>
                </div>
            </div>
            {/* The circular element behind the dashboard */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-40 md:h-40 bg-blue-400 rounded-full opacity-30 blur-xl z-0"></div> {/* Adjusted size */}
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 md:w-32 md:h-32 bg-blue-300 rounded-full opacity-30 blur-xl z-0"></div> {/* Adjusted size */}
        </div>
      </div>
    </div>
  );
};



export default HeroSection;