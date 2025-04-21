import Link from 'next/link';
import React from 'react';

import { AppConfig } from '../utils/AppConfig';

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
    <div className="relative z-10 -mt-8 flex w-full flex-col items-center overflow-hidden">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 opacity-50" />
      <div className="absolute inset-0 bg-[url('/assets/images/grid.png')] bg-repeat opacity-20" />

      {/* First Screen Content */}
      <div className="relative flex w-full max-w-[1440px] flex-col items-center gap-8 px-4 pt-4">
        {/* Top Content: Title Area */}
        <div className="flex w-full flex-col items-center space-y-4">
          {/* Main Title Area */}
          <div className="group relative">
            {/* 背景效果 */}
            <div className="absolute -inset-8 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 opacity-20 blur-xl transition duration-1000 group-hover:opacity-30 group-hover:duration-200" />

            {/* 标题内容 */}
            <div className="relative">
              <h1 className="text-center font-mono text-6xl font-bold leading-tight tracking-wide">
                <span className="inline-block animate-gradient bg-gradient-to-br from-blue-400 via-purple-400 to-pink-500 bg-[length:200%_auto] bg-clip-text text-transparent transition-all duration-300 hover:from-pink-500 hover:to-purple-500">
                  Poke
                </span>
                <span className="inline-block animate-gradient bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 bg-[length:200%_auto] bg-clip-text text-transparent transition-all duration-300 hover:from-red-500 hover:to-orange-500">
                  Rogue
                </span>
              </h1>
            </div>
          </div>

          {/* Subtitle with Glowing Effect */}
          <div className="relative z-20 mb-6 px-4 py-2">
            <p className="group relative cursor-default text-center font-mono text-xl font-light text-gray-200/90">
              <span className="relative z-10 leading-relaxed transition-colors duration-300 group-hover:text-white">
                Begin Your Pokemon Adventure
              </span>
            </p>
          </div>
        </div>

        {/* Game Preview */}
        <div className="group relative -mt-4 w-full max-w-[1600px]">
          {/* Game Screenshot Container */}
          <div className="relative">
            {/* Main Image */}
            <img
              src="/assets/images/game-preview.png"
              alt="Pokemon battle interface showing Charmander vs Cyndaquil"
              className="relative z-10 h-auto w-full object-cover"
            />

            {/* Corner Glows */}
            <div className="absolute left-0 top-0 size-48 bg-gradient-to-br from-blue-500/20 to-transparent" />
            <div className="absolute bottom-0 right-0 size-48 bg-gradient-to-tl from-purple-500/20 to-transparent" />

            {/* Centered Play Button */}
            <div className="absolute inset-0 z-30 flex items-center justify-center">
              <Link href={AppConfig.mainGameUrl}>
                <div className="relative animate-button-breath">
                  {/* Outer Glow */}
                  <div className="absolute -inset-4 animate-pulse-soft rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-xl" />
                  {/* Inner Glow */}
                  <div className="absolute -inset-2 animate-glow rounded-full bg-gradient-to-r from-blue-400/40 via-purple-400/40 to-pink-400/40 blur-md" />

                  <button className="relative rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-24 py-6 shadow-lg">
                    {/* Button Content */}
                    <span className="relative block text-3xl font-bold text-white">
                      Play Now
                      {/* Text Glow */}
                      <span className="absolute inset-0 rounded-full bg-white/20 blur-sm" />
                    </span>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/0 via-purple-600/50 to-pink-600/0 opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Floating Feature Tags */}
          <div className="absolute -right-3 -top-3 z-30 transition-transform duration-500 group-hover:-translate-y-2">
            <div className="-rotate-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 text-lg font-medium text-white shadow-lg transition-transform duration-300 hover:scale-105">
              Turn-based Strategy
            </div>
          </div>
          <div className="absolute -bottom-3 -left-3 z-30 transition-transform duration-500 group-hover:translate-y-2">
            <div className="rotate-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 text-lg font-medium text-white shadow-lg transition-transform duration-300 hover:scale-105">
              Pixel Perfect Graphics
            </div>
          </div>
        </div>
      </div>

      {/* Second Screen Content */}
      <div className="relative mb-24 mt-32 w-full bg-indigo-900/30">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/20 to-transparent" />

        {/* Content Container */}
        <div className="relative z-20 mx-auto w-full max-w-[800px] px-8 py-12">
          {/* Title with Separators */}
          <div className="mb-12 flex w-full items-center space-x-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200/20 to-transparent" />
            <h3 className="whitespace-nowrap px-4 text-xl font-medium text-gray-200/90">
              Game Stats
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200/20 to-transparent" />
          </div>

          {/* Stats Cards */}
          <div className="flex justify-center gap-8">
            {[
              {
                label: 'Trainers',
                value: stats.trainers.toLocaleString(),
                icon: '👥',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                label: 'Battles',
                value: stats.battles.toLocaleString(),
                icon: '⚔️',
                color: 'from-red-500 to-orange-500',
              },
              {
                label: 'Shinies',
                value: stats.shinies.toLocaleString(),
                icon: '✨',
                color: 'from-yellow-500 to-amber-500',
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="perspective-1000 group w-[120px] cursor-default"
              >
                <div className="group-hover:rotate-y-12 relative flex h-full flex-col items-center justify-center rounded-lg border border-white/10 bg-black/40 py-4 backdrop-blur-md transition-all duration-500 group-hover:scale-105">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-lg opacity-10 transition-opacity duration-500 group-hover:opacity-20`}
                  />
                  <div className="mb-2 text-2xl">{stat.icon}</div>
                  <p className="bg-gradient-to-br from-white to-gray-300 bg-clip-text text-lg font-bold leading-none text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-none text-gray-300/90">
                    {stat.label}
                  </p>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/5 to-white/0 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
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

<style jsx>{`
  .breathing-button {
    animation: breathing 2s ease-in-out infinite;
  }

  @keyframes breathing {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  .play-now-button {
    position: relative;
    animation: playNowBreath 2s ease-in-out infinite;
    transform-origin: center;
    border: 2px solid red; /* Debug border */
  }

  @keyframes playNowBreath {
    0%,
    100% {
      transform: scale(1);
      border-color: blue; /* Debug color */
    }
    50% {
      transform: scale(1.2);
      border-color: green; /* Debug color */
    }
  }
`}</style>;
