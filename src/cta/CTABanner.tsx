import type { ReactNode } from 'react';
import { FaGamepad, FaStar } from 'react-icons/fa';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
    {/* Background with grid and gradient overlay */}
    <div className="absolute inset-0 bg-black/20" />
    <div className="absolute inset-0 bg-[url('/assets/images/grid.png')] bg-repeat opacity-5" />

    {/* Glowing orbs */}
    <div className="absolute -left-20 -top-20 size-40 animate-pulse-soft rounded-full bg-purple-500/5 blur-3xl" />
    <div className="absolute -bottom-20 -right-20 size-40 animate-pulse-soft rounded-full bg-blue-500/5 blur-3xl" />

    {/* Content container */}
    <div className="relative z-20 px-8 py-16">
      <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="relative mb-6 text-4xl font-bold text-white drop-shadow-lg md:text-5xl">
            {props.title}
          </h2>
          <p className="relative text-xl font-medium leading-relaxed text-gray-100 drop-shadow md:max-w-2xl">
            {props.subtitle}
          </p>
        </div>

        {/* CTA Button */}
        <div className="relative">
          <div className="absolute -inset-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 opacity-25 blur transition duration-300 group-hover:opacity-100" />
          <div className="relative z-10">{props.button}</div>

          {/* Decorative icons */}
          <FaGamepad className="absolute -right-6 -top-6 size-8 animate-float text-blue-400/30" />
          <FaStar className="absolute -bottom-6 -left-6 size-6 animate-float-delayed text-purple-400/30" />
        </div>
      </div>
    </div>

    {/* Animated stars */}
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="absolute size-1 animate-sparkle-star rounded-full bg-white"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${i * 0.5}s`,
          opacity: Math.random() * 0.4 + 0.2,
          transform: `scale(${Math.random() * 0.5 + 0.5})`,
        }}
      />
    ))}
  </div>
);

export { CTABanner };
