import React from 'react';
import { FaBolt, FaGamepad, FaStar } from 'react-icons/fa';

/**
 * GameFeatures Component - Displays the core features of the game
 * @returns {JSX.Element} Game features section
 */
const GameFeatures = () => {
  const features = [
    {
      icon: <FaStar className="size-12" />,
      title: 'Shiny Greninja & Giratina Collection',
      description:
        'Hunt legendary shinies like Greninja, Giratina, and Ceruledge. Join 40,000+ trainers in collecting 6,000+ rare Pokemon variants.',
      stats: '40,500+ Active Trainers',
      gradient: 'from-yellow-400 via-amber-400 to-orange-500',
      textColor: 'text-amber-400',
    },
    {
      icon: <FaBolt className="size-12" />,
      title: 'Pokemon Fusion System',
      description:
        'Create powerful combinations with our innovative fusion poke system. Discover unique evolution paths for Totodile and other Pokemon.',
      stats: '4,400+ Fusion Combinations',
      gradient: 'from-blue-400 via-indigo-400 to-purple-500',
      textColor: 'text-blue-400',
    },
    {
      icon: <FaGamepad className="size-12" />,
      title: 'Real-time Strategy Battles',
      description:
        'Engage in tactical card battles across multiple zones. Master type advantages and special abilities in real-time combat.',
      stats: '27,100+ Daily Battles',
      gradient: 'from-emerald-400 via-green-400 to-teal-500',
      textColor: 'text-emerald-400',
    },
  ];

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#1A237E] py-16"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/assets/images/grid.png')] bg-repeat opacity-20" />

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold text-white lg:text-6xl">
            Core Game Features
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-300/90">
            Experience the next evolution of Pokemon gaming with our innovative
            features and mechanics
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="group h-full">
              {/* Card */}
              <div className="relative flex h-full flex-col rounded-2xl bg-gray-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/70">
                {/* Icon */}
                <div
                  className={`mb-4 ${feature.textColor} transition-transform duration-300 group-hover:scale-110`}
                >
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="mb-2 text-2xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="mb-4 grow text-lg text-gray-300/80">
                  {feature.description}
                </p>

                {/* Stats */}
                <div>
                  <span
                    className={`text-lg font-semibold ${feature.textColor}`}
                  >
                    {feature.stats}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Stars */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute size-1 animate-sparkle-star rounded-full bg-white"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.4}s`,
            opacity: Math.random() * 0.5 + 0.3,
          }}
        />
      ))}
    </section>
  );
};

export { GameFeatures };
