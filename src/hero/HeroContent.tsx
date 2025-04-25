import React from 'react';
import { FaBolt, FaGamepad, FaMousePointer, FaStar } from 'react-icons/fa'; // Import icons for the list

import { Button } from '@/button/Button';

type HeroContentProps = {
  stats: {
    trainers: number;
    battles: number;
    shinies: number;
  };
};

/**
 * HeroContent Component - Displays the main hero section content
 * @param {HeroContentProps} props - Component props containing stats
 * @returns {JSX.Element} Hero section content
 */
export const HeroContent = ({ stats }: HeroContentProps): JSX.Element => {
  return (
    <div className="relative z-10 mt-1 flex w-full flex-col items-center overflow-hidden">
      {/* Background Gradient Animation & Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 opacity-50" />
      <div className="absolute inset-0 bg-[url('/assets/images/grid.png')] bg-repeat opacity-20" />

      {/* Main Content Container */}
      <div className="relative w-full max-w-[1440px] px-4 pt-6 md:px-6">
        {/* Top Header Section with Title and Subtitle */}
        <div className="mb-8 flex flex-col items-center text-center">
          {/* Main Title with Glow Effect */}
          <div className="group relative mb-4">
            <div className="absolute -inset-1 -z-10 rounded-lg bg-gradient-to-r from-purple-600/30 to-blue-600/30 blur-xl transition duration-1000 group-hover:opacity-75"></div>
            <h1 className="relative font-mono text-6xl font-bold leading-tight tracking-wide xl:text-7xl">
              <span className="inline-block animate-gradient bg-gradient-to-br from-blue-400 via-purple-400 to-pink-500 bg-[length:200%_auto] bg-clip-text text-transparent transition-all duration-300 hover:from-pink-500 hover:to-purple-500">
                Poke
              </span>
              <span className="inline-block animate-gradient bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 bg-[length:200%_auto] bg-clip-text text-transparent transition-all duration-300 hover:from-red-500 hover:to-orange-500">
                Rogue
              </span>
            </h1>
          </div>

          {/* Subtitle with Glow Effect */}
          <div className="relative max-w-3xl px-4">
            <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-md"></div>
            <h2 className="font-mono text-xl font-semibold text-gray-100/90 md:text-2xl">
              Catch Legendary Shinies, Fuse Infinite Power: Begin Your PokeRogue
              Adventure!
            </h2>
          </div>
        </div>

        {/* Main Content Grid: Left Text, Right Image */}
        <div className="relative grid w-full grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
          {/* Left Column: Text Content with Enhanced Background */}
          <div className="flex flex-col items-center space-y-6 rounded-xl border border-indigo-500/20 bg-indigo-900/30 p-6 backdrop-blur-sm md:items-start md:p-8 md:text-left">
            {/* Feature Highlights List */}
            <ul className="space-y-5 pt-2 text-base text-gray-300/90">
              <li className="flex items-start gap-4">
                <FaStar className="mt-1 size-5 text-yellow-400" />
                <span>
                  Hunt Rare Shinies: Discover and catch valuable Shiny Pokémon,
                  including{' '}
                  <strong className="font-medium text-yellow-300">
                    Shiny Greninja
                  </strong>{' '}
                  &{' '}
                  <strong className="font-medium text-purple-300">
                    Giratina
                  </strong>
                  .
                </span>
              </li>
              <li className="flex items-start gap-4">
                <FaBolt className="mt-1 size-5 text-blue-400" />
                <span>
                  Innovative Fusion System: Experiment with{' '}
                  <strong className="font-medium text-blue-300">
                    Pokemon Fusion
                  </strong>
                  , combining Pokémon like{' '}
                  <strong className="font-medium text-cyan-300">
                    Totodile
                  </strong>{' '}
                  for unique tactics.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <FaGamepad className="mt-1 size-5 text-emerald-400" />
                <span>
                  Deep Strategy Battles: Master turn-based combat, type
                  advantages, and skill combos.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1 text-xl">💎</span>{' '}
                {/* Diamond emoji as icon */}
                <span>
                  Vast Collection: Over 6,000+ Pokémon variants await, build
                  your exclusive Pokédex.
                </span>
              </li>
            </ul>

            {/* Call to Action Button - Centered and linked */}
            <div className="flex w-full justify-center pt-4">
              <a
                href="https://pokerogue.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="group relative rounded-full bg-blue-600 transition duration-200 hover:bg-blue-700">
                  <div className="relative z-10 flex items-center space-x-2 px-4 py-2 text-base font-bold text-white">
                    <FaMousePointer className="size-4" />
                    <span>Play Now</span>
                  </div>
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Game Preview with Enhanced Border */}
          <div className="group relative mt-4 w-full overflow-hidden md:mt-0">
            {/* Game Screenshot Container */}
            <div className="relative rounded-xl border-2 border-indigo-500/30 shadow-2xl shadow-blue-900/30 transition-all duration-500 group-hover:border-indigo-500/50 group-hover:shadow-blue-700/40">
              {/* Background Grid - REMOVED */}
              {/* <div className="absolute inset-0 bg-[url('/assets/images/grid.png')] bg-repeat opacity-10" /> */}

              {/* Dialog Box Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-black/30 backdrop-blur-sm" />

              {/* Main Image */}
              <div className="relative overflow-hidden">
                <img
                  src="/assets/images/game-preview.png"
                  alt="Pokemon battle interface showing Charmander vs Cyndaquil"
                  className="relative z-10 h-auto w-full object-cover"
                />
                {/* Status Bar Overlay */}
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/20 to-transparent backdrop-blur-[2px]" />
              </div>

              {/* Corner Glows */}
              <div className="absolute left-0 top-0 size-48 bg-gradient-to-br from-blue-500/10 to-transparent" />
              <div className="absolute bottom-0 right-0 size-48 bg-gradient-to-tl from-purple-500/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Second Screen Content (Game Stats) - Further reduced bottom margin */}
      <div className="relative mb-8 w-full bg-indigo-900/30">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/20 to-transparent" />

        {/* Content Container */}
        <div className="relative z-20 mx-auto w-full max-w-[1200px] px-8 py-16">
          {/* Title with Separators - Reduced bottom margin */}
          <div className="mb-8 flex w-full items-center space-x-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200/20 to-transparent" />
            <h3 className="whitespace-nowrap px-4 text-2xl font-medium text-gray-200/90">
              Game Stats
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200/20 to-transparent" />
          </div>

          {/* Game Description - Removed mx-auto for full width */}
          <div className="mb-8">
            <p className="text-left text-base font-normal leading-relaxed text-gray-200/90">
              Dive into the amazing world of PokeRogue! Experience an innovative
              game blending strategic card battles with exciting Pokémon
              collection. Hunt for the legendary{' '}
              <strong className="font-medium text-yellow-300">
                Shiny Greninja
              </strong>
              , challenge the mighty{' '}
              <strong className="font-medium text-purple-300">Giratina</strong>,
              and explore the unique{' '}
              <strong className="font-medium text-blue-300">
                Pokemon Fusion (Fusion Poke)
              </strong>{' '}
              system. Collect over 6,000 rare variants, including elusive
              treasures like{' '}
              <strong className="font-medium text-pink-300">
                Shiny Ceruledge
              </strong>{' '}
              and{' '}
              <strong className="font-medium text-gray-300">
                Shiny Hisuian Zoroark
              </strong>
              . Engage in tactical turn-based combat across diverse{' '}
              <strong className="font-medium text-teal-300">Poke Zones</strong>{' '}
              and prove your skills. Are you ready to build your ultimate
              Pokémon team?
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {[
              {
                label: 'Active Trainers',
                value: stats.trainers.toLocaleString(),
                icon: '👥',
                color: 'from-blue-500 to-cyan-500',
                description: 'Daily active players worldwide',
              },
              {
                label: 'Daily Battles',
                value: stats.battles.toLocaleString(),
                icon: '⚔️',
                color: 'from-red-500 to-orange-500',
                description: 'Tactical battles fought each day',
              },
              {
                label: 'Shiny Variants',
                value: '6,000+',
                icon: '✨',
                color: 'from-yellow-500 to-amber-500',
                description: 'Unique shiny Pokemon to collect',
              },
              {
                label: 'Fusion Combos',
                value: '4,400+',
                icon: '🔮',
                color: 'from-purple-500 to-pink-500',
                description: 'Possible Pokemon combinations',
              },
              {
                label: 'Rare Collection',
                value: '2,200+',
                icon: '💎',
                color: 'from-emerald-500 to-teal-500',
                description: 'Special items and artifacts',
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="perspective-1000 group cursor-default"
              >
                <div className="group-hover:rotate-y-12 relative flex h-full flex-col items-center justify-center rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-md transition-all duration-500 group-hover:scale-105">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-xl opacity-10 transition-opacity duration-500 group-hover:opacity-20`}
                  />
                  {/* Icon with Glow */}
                  <div className="relative mb-4">
                    <div
                      className={`absolute -inset-2 bg-gradient-to-br ${stat.color} rounded-full opacity-30 blur-lg transition-opacity duration-500 group-hover:opacity-50`}
                    />
                    <div className="relative text-4xl">{stat.icon}</div>
                  </div>
                  {/* Value */}
                  <p className="bg-gradient-to-br from-white to-gray-300 bg-clip-text text-2xl font-bold leading-none text-transparent">
                    {stat.value}
                  </p>
                  {/* Label */}
                  <p className="mt-2 text-base font-medium text-gray-300/90">
                    {stat.label}
                  </p>
                  {/* Description */}
                  <p className="mt-2 text-center text-sm text-gray-400/80">
                    {stat.description}
                  </p>
                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-white/0 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements (Background Sparkles) - Remains unchanged */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute size-1 animate-sparkle-star rounded-full bg-white opacity-30"
            style={{
              top: `${(i * 7) % 100}%`,
              left: `${(i * 13) % 100}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
