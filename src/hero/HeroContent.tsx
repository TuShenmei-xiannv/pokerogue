import React from 'react';

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
    <div className="relative z-10 flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 opacity-50" />
      <div className="absolute inset-0 bg-[url('/assets/images/grid.png')] bg-repeat opacity-20" />

      <div className="relative grid w-full grid-cols-8 items-center gap-16">
        {/* Left Content */}
        <div className="col-span-3 flex flex-col items-center space-y-12 text-center lg:items-start lg:text-left">
          {/* Main Title Area */}
          <div className="group relative w-full">
            {/* 背景效果 */}
            <div className="absolute inset-0 -mx-4 -mt-4 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 opacity-25 blur transition duration-1000 group-hover:opacity-40 group-hover:duration-200" />

            {/* 标题内容 */}
            <div className="relative px-2 pb-6 pt-8">
              <h1 className="lg:text-8xl xl:text-9xl text-6xl font-black leading-normal tracking-wider">
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
          <div className="relative z-20">
            <p className="group relative cursor-default text-xl font-light text-gray-200/90 lg:text-3xl">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Begin Your Pokemon Adventure
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
            </p>
          </div>

          {/* Start Game Button with Enhanced Effects */}
          <button className="group relative z-20">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-25 blur transition duration-200 group-hover:opacity-75 group-hover:duration-200" />
            <div className="relative rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 px-12 py-5 text-2xl font-semibold text-white shadow-xl transition-all duration-300 active:scale-95 group-hover:scale-105 group-hover:shadow-2xl group-hover:brightness-110">
              Play Now
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </button>

          {/* Stats Area with Enhanced Cards */}
          <div className="relative z-20 mt-8 flex w-full justify-start gap-2">
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
                className="perspective-1000 group aspect-square w-[80px] cursor-default"
              >
                <div className="group-hover:rotate-y-12 relative flex h-full flex-col items-center justify-center rounded-lg border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-500 group-hover:scale-105">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-lg opacity-10 transition-opacity duration-500 group-hover:opacity-20`}
                  />
                  <div className="mb-0.5 text-base">{stat.icon}</div>
                  <p className="bg-gradient-to-br from-white to-gray-300 bg-clip-text text-sm font-bold leading-none text-white">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[10px] leading-none text-gray-300/90">
                    {stat.label}
                  </p>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/5 to-white/0 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Game Preview */}
        <div className="group relative col-span-5">
          {/* Game Screenshot Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-[0_0_40px_rgba(60,60,255,0.15)] transition-all duration-700 group-hover:scale-[1.02]">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-70" />

            {/* Main Image */}
            <img
              src="/assets/images/game-preview.png"
              alt="Pokemon battle interface showing Charmander vs Cyndaquil"
              className="relative z-10 h-auto w-full min-w-[700px]"
            />

            {/* Frame Effects */}
            <div className="absolute inset-0 rounded-2xl border-2 border-blue-400/20" />
            <div className="absolute inset-[2px] rounded-2xl border border-blue-400/10" />

            {/* Corner Glows */}
            <div className="absolute left-0 top-0 size-32 rounded-tl-2xl bg-gradient-to-br from-blue-500/30 to-transparent" />
            <div className="absolute bottom-0 right-0 size-32 rounded-br-2xl bg-gradient-to-tl from-purple-500/30 to-transparent" />
          </div>

          {/* Floating Feature Tags */}
          <div className="absolute -right-8 -top-8 transition-transform duration-500 group-hover:-translate-y-2">
            <div className="-rotate-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 text-lg font-medium text-white shadow-lg transition-transform duration-300 hover:scale-105">
              Turn-based Strategy
            </div>
          </div>
          <div className="absolute -bottom-8 -left-8 transition-transform duration-500 group-hover:translate-y-2">
            <div className="rotate-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 text-lg font-medium text-white shadow-lg transition-transform duration-300 hover:scale-105">
              Pixel Perfect Graphics
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
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
    </div>
  );
};
