import React from "react";

const Card = ({ title, description, className }) => {
  return (
    <div
      className={`bg-black text-gray-800 p-6 rounded-lg shadow-lg border border-gray-600 ${className}`}
    >
      <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

const Projects = () => {
  const cards = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
    },
    {
      title: "The Pursuit of Knowledge",
      description: "Join the quest for understanding and enlightenment.",
    },
    {
      title: "The Joy of Creation",
      description:
        "Experience the thrill of creating something new and impactful.",
    },
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* Top row: 3 small cards */}
          {cards.slice(0, 3).map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
          {/* Second row: one large card and one small */}
          <Card
            title={cards[3].title}
            description={cards[3].description}
            className="lg:col-span-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
