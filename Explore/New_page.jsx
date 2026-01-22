import React from 'react';
import { ArrowRight, Sparkles, Image as ImageIcon, Wand2, Scissors, Palette, Layers } from 'lucide-react';

/**
 * Reusable Card Component
 * Optimized for responsiveness and clean UI
 */
const Card = ({ title, description, imageUrl, Icon }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-5 flex flex-col items-start transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl group">
      {/* Image Container with Aspect Ratio */}
      <div className="w-full relative aspect-video overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop";
          }}
        />
        {/* Floating Icon Overlay */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm">
          {Icon && <Icon size={20} className="text-green-600" />}
        </div>
      </div>

      {/* Content */}
      <div className="mt-5 w-full">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-gray-600 leading-relaxed text-sm md:text-base line-clamp-3">
          {description}
        </p>
      </div>

      {/* Action Button */}
      <button className="w-full mt-6 py-3 px-4 bg-black text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:bg-green-600 active:scale-95">
        Let's go
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

/**
 * Main Explore Page Component
 */
const App = () => {
  // Mock data with icons for a better UI
  const cardData = [
    {
      id: 1,
      title: "Image Upscale",
      Icon: Sparkles,
      description: "Enhance your low-resolution images to stunning high-definition quality instantly using our advanced AI algorithms.",
      imageUrl: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1032&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "AI Generation",
      Icon: Wand2,
      description: "Turn your creative thoughts into beautiful visual art. Just type your prompt and watch the magic happen.",
      imageUrl: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1032&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Smart Editing",
      Icon: ImageIcon,
      description: "Professional grade editing tools simplified for everyone. Adjust lighting, focus, and composition with ease.",
      imageUrl: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1032&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Background Remover",
      Icon: Scissors,
      description: "Remove distracting backgrounds perfectly in one click. Ideal for product photography and profile pictures.",
      imageUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1032&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Color Enhancer",
      Icon: Palette,
      description: "Make your photos pop with vibrant, true-to-life colors. Automatically balance saturation and contrast.",
      imageUrl: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1032&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Style Transfer",
      Icon: Layers,
      description: "Apply the aesthetic of famous paintings or modern styles to your own photos effortlessly.",
      imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1032&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16">
          <span className="text-green-600 font-bold tracking-widest uppercase text-sm">Discover AI Tools</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
            Explore <span className="text-green-600">Possibilities</span>
          </h1>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            Powerful AI-driven tools to transform your creative workflow.
          </p>
          <div className="mt-6 w-20 h-1.5 bg-green-600 mx-auto rounded-full"></div>
        </header>

        {/* Grid System - Mobile: 1, Tablet: 2, Desktop: 3 */}
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {cardData.map((data) => (
            <Card
              key={data.id}
              title={data.title}
              description={data.description}
              imageUrl={data.imageUrl}
              Icon={data.Icon}
            />
          ))}
        </main>
      </div>
      
      {/* Footer Branding */}
 <footer className="mt-20 text-center text-gray-400 text-sm">
        © 2024 AI Creative Suite. All rights reserved.
      </footer>
    </div>
  );
};

export default App;

