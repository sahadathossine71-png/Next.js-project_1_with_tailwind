import React from 'react';

/**
 * Card Component
 * Handles the individual tool display with a responsive layout
 * Mobile: Vertical stack | Desktop (lg): Horizontal row
 */
const Card = ({ imageSrc, title, category, description, buttonText }) => {
  const isComingSoon = buttonText.toLowerCase().includes('soon');

  return (
    <div className="flex flex-col bg-[#8B1A1A] border-2 border-black rounded-[2rem] overflow-hidden text-white transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl lg:flex-row lg:items-center group">
      {/* Image Section */}
      <div className="relative w-full lg:w-[45%] h-[250px] lg:h-full min-h-[250px] overflow-hidden">
        {/* Floating Badge */}
        <span className="absolute top-4 left-4 bg-white text-black px-5 py-1 rounded-full border-2 border-black z-10 font-bold text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:bg-cyan-200 transition-colors">
          Bata
        </span>
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col gap-3 lg:w-[55%]">
        <h3 className="text-3xl uppercase font-black leading-none tracking-tighter lg:text-2xl">
          {title}
        </h3>
        
        <div className="flex items-center gap-2">
           <span className="bg-cyan-200 text-black border-2 border-black rounded-lg px-3 py-0.5 w-fit text-sm font-bold uppercase">
            {category}
          </span>
          <div className="h-[2px] flex-grow bg-black/20"></div>
        </div>

        <p className="text-base leading-snug text-gray-100 opacity-90 line-clamp-3">
          {description}
        </p>

        <button 
          disabled={isComingSoon}
          className={`px-6 py-3 mt-4 border-2 border-black rounded-xl font-black text-lg transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none
            ${isComingSoon 
              ? 'bg-gray-400 cursor-not-allowed opacity-70' 
              : 'bg-white text-black hover:bg-cyan-300 hover:-translate-y-1'}`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

/**
 * Main Page Component (Home)
 */
const App = () => {
  const upcomingTools = [
    {
      id: 1,
      imageSrc: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1000&auto=format&fit=crop",
      title: "image location tracker",
      category: "Image AI",
      description: "Precisely identify geographical locations from image metadata and visual landmarks using our neural network.",
      buttonText: "Let's Try"
    },
    {
      id: 2,
      imageSrc: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
      title: "Security Scanner",
      category: "Network",
      description: "Advanced packet analysis and vulnerability detection for modern web applications and local infrastructures.",
      buttonText: "Let's Try"
    },
    {
      id: 3,
      imageSrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
      title: "Neural Upscaler",
      category: "Graphics",
      description: "Transform pixelated legacy photos into crystal clear 4K masterpieces without losing original texture details.",
      buttonText: "Coming soon"
    }
  ];

  return (
    <section className="bg-gray-50 min-h-screen pb-20">
      {/* Header Container */}
      <div className="pt-10 mb-10">
        <h2 className="text-center text-[clamp(2.5rem,10vw,5rem)] font-black italic uppercase tracking-tighter leading-none">
          Upcoming
        </h2>
        <div className="w-full h-[4px] bg-black mt-4 shadow-[0_4px_10px_rgba(0,0,0,0.1)]"></div>
      </div>

      {/* Grid Container */}
      <div className="px-5 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {upcomingTools.map((tool) => (
            <Card key={tool.id} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;

    
