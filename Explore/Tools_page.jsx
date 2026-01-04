import React from 'react';
import Card from './Card';

const ExplorePage = () => {
  // Mock data for the cards
  const cardData = [
    {
      id: 1,
      title: "Image Upscale",
      description: "utamur ancillae deseruisse perpetua inimicus primis dolor volumus vix saperet dis vidisse constituam lacinia curae",
      imageUrl: "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1032&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "AI Generation",
      description: "utamur ancillae deseruisse perpetua inimicus primis dolor volumus vix saperet dis vidisse constituam lacinia curae",
      imageUrl: "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1032&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Smart Editing",
      description: "utamur ancillae deseruisse perpetua inimicus primis dolor volumus vix saperet dis vidisse constituam lacinia curae",
      imageUrl: "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1032&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Background Remover",
      description: "utamur ancillae deseruisse perpetua inimicus primis dolor volumus vix saperet dis vidisse constituam lacinia curae",
      imageUrl: "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1032&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Color Enhancer",
      description: "utamur ancillae deseruisse perpetua inimicus primis dolor volumus vix saperet dis vidisse constituam lacinia curae",
      imageUrl: "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1032&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Style Transfer",
      description: "utamur ancillae deseruisse perpetua inimicus primis dolor volumus vix saperet dis vidisse constituam lacinia curae",
      imageUrl: "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1032&auto=format&fit=crop"
    }
  ];

  return (
    <section className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            Explore
          </h1>
          {/* Green Line Decor */}
          <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
        </header>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((data) => (
            <Card 
              key={data.id}
              title={data.title}
              description={data.description}
              imageUrl={data.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExplorePage;

