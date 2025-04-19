import React from 'react';

const BackgroundEffect = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base Background */}
      <div className="absolute inset-0 animate-gradient bg-gradient opacity-30" />

      {/* Radial Overlay */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />

      {/* Floating Pokemon Silhouettes */}
      <div className="absolute inset-0">
        {/* Large circles with blur effect */}
        <div className="absolute -left-20 top-1/4 size-96 animate-float-slow rounded-full bg-yellow-500 opacity-20 mix-blend-overlay blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 size-96 animate-float-medium rounded-full bg-pink-500 opacity-20 mix-blend-overlay blur-3xl" />

        {/* Pokemon Silhouettes */}
        <div className="absolute left-1/4 top-1/4 -rotate-12 animate-float-slow opacity-20">
          <div className="mask-pokemon-1 size-32 bg-white" />
        </div>
        <div className="absolute right-1/4 top-1/2 rotate-12 animate-float-medium opacity-20">
          <div className="mask-pokemon-2 size-24 bg-white" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float-fast opacity-20">
          <div className="mask-pokemon-3 size-16 bg-white" />
        </div>
      </div>

      {/* Shiny Particles Effect */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              backgroundColor: ['#FFD700', '#FFF', '#FF4081'][
                Math.floor(Math.random() * 3)
              ],
              borderRadius: '50%',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Additional Light Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-game-primary/50 to-game-primary opacity-50" />
    </div>
  );
};

export { BackgroundEffect };
