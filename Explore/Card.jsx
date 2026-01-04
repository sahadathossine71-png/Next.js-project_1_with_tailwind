import React from 'react';

/**
 * Reusable Card Component
 * @param {string} title - The title of the card
 * @param {string} description - The text content
 * @param {string} imageUrl - Source of the image
 */
const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center transition-all duration-300 ease-in-out hover:-translate-y-2.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] group">
      {/* Image Container */}
      <div className="w-full overflow-hidden rounded-xl h-[200px]">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Title */}
      <h3 className="mt-4 text-2xl font-bold capitalize text-gray-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-center text-gray-600 leading-relaxed text-sm md:text-base">
        {description}
      </p>

      {/* Button */}
      <button className="w-full mt-6 py-3 bg-black text-white font-bold rounded-lg transition-all duration-300 hover:bg-green-600 active:scale-95">
        Let's go
      </button>
    </div>
  );
};

export default Card;

