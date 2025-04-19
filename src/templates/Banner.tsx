import Link from 'next/link';

import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';

const Banner = () => (
  <Section>
    <CTABanner
      title="Ready to Begin Your Pokemon Adventure?"
      subtitle="Join thousands of trainers in the most innovative Pokemon card game. Experience epic battles, rare collections, and unique fusion mechanics!"
      button={
        <Link href={AppConfig.mainGameUrl}>
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-500">
            {/* Button background */}
            <div className="absolute inset-0 animate-gradient rounded-lg bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-[length:200%_auto] transition-all duration-500 group-hover:scale-110" />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />
            {/* Button content */}
            <span className="relative flex items-center">
              Play Free Now
              <svg
                className="ml-2 size-5 transition-transform duration-500 group-hover:translate-x-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
