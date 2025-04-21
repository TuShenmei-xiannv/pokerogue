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
      title: 'Rare Shiny Pokemon Collection',
      description:
        'Hunt and collect rare shiny Pokemon including Greninja, Ceruledge, and Hisuian Zoroark.',
      stats: '6000+ Shinies Available',
      gradient: 'from-yellow-400 via-amber-400 to-orange-500',
      textColor: 'text-amber-400',
    },
    {
      icon: <FaBolt className="size-12" />,
      title: 'Revolutionary Fusion Mechanics',
      description:
        'Create unique Pokemon combinations with our innovative fusion system.',
      stats: '4400+ Fusion Combinations',
      gradient: 'from-blue-400 via-indigo-400 to-purple-500',
      textColor: 'text-blue-400',
    },
    {
      icon: <FaGamepad className="size-12" />,
      title: 'Strategic Battle Zones',
      description:
        'Engage in tactical battles across multiple battle zones with real-time strategy.',
      stats: '2400+ Daily Battles',
      gradient: 'from-emerald-400 via-green-400 to-teal-500',
      textColor: 'text-emerald-400',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#1A237E] py-16">
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
            <div key={index} className="group">
              {/* Card */}
              <div className="relative rounded-2xl bg-gray-800/50 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/70">
                {/* Icon */}
                <div
                  className={`mb-6 ${feature.textColor} transition-transform duration-300 group-hover:scale-110`}
                >
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="mb-3 text-2xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="mb-6 text-lg text-gray-300/80">
                  {feature.description}
                </p>

                {/* Stats */}
                <div className="mt-auto">
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
