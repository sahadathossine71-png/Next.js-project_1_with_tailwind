import React from 'react';

/**
 * All-in-one Tools Hero Section
 * Converted from custom CSS to Tailwind CSS for Next.js compatibility.
 * Features: Responsive typography, custom animated CTA, and background styling.
 */
const App = () => {
  return (
    <main className="w-full min-h-screen border-4 border-black bg-[#7FFFD4] flex items-center justify-center overflow-x-hidden">
      <div className="flex flex-col items-center justify-center text-center px-4 py-12 md:py-24 lg:py-48 max-w-7xl mx-auto">
        
        {/* Main Heading with Clamp Logic */}
        <h1 className="text-[clamp(3rem,8vw,9rem)] font-bold leading-[1.1] text-black">
          All in one <span className="bg-[#FFE4C4] px-3 py-1 italic inline-block mt-2 md:mt-0 shadow-sm">TOOLS</span>
        </h1>

        {/* Paragraph with Responsive Sizing */}
        <p className="mt-8 md:mt-12 text-[clamp(1rem,2.5vw,1.5rem)] leading-relaxed text-gray-800 max-w-[900px] px-2 md:px-8">
          litora fuisset cu disputationi quem nobis nascetur prompta quaeque class mea affert mel 
          dictum idens legimus invenire detraxit
        </p>

        {/* Custom Animated Button (CTA) */}
        <div className="mt-12">
          <button className="group relative flex items-center justify-center px-5 py-3 transition-all duration-200 active:scale-95 outline-none border-none bg-transparent cursor-pointer">
            
            {/* The Animated Circle Background */}
            <div className="absolute top-0 left-0 w-[45px] h-[45px] bg-[#b1dae7] rounded-[50px] transition-all duration-300 ease-in-out group-hover:w-full"></div>
            
            {/* Button Label */}
            <span className="relative font-sans text-lg font-bold tracking-wider text-[#234567] flex items-center">
              Explore
              
              {/* SVG Arrow Icon */}
              <svg 
                className="ml-3 relative top-0 stroke-[#234567] fill-none stroke-[2] transition-transform duration-300 ease-in-out -translate-x-1 group-hover:translate-x-0" 
                width="15px" 
                height="10px" 
                viewBox="0 0 13 10"
              >
                <path d="M1,5 L11,5" strokeLinecap="round" strokeLinejoin="round"></path>
                <polyline points="8 1 12 5 8 9" strokeLinecap="round" strokeLinejoin="round"></polyline>
              </svg>
            </span>
          </button>
        </div>

      </div>
    </main>
  );
};

export default App;

