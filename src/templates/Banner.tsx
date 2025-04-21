import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';

const Banner = () => (
  <Section>
    <CTABanner
      title="Ready to Begin Your Pokemon Adventure?"
      subtitle="Join thousands of trainers in the most innovative Pokemon card game. Experience epic battles, rare collections, and unique fusion mechanics!"
      button={
        <div className="mt-6 flex justify-center">
          <a
            href={AppConfig.gameUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Play Free Now
          </a>
        </div>
      }
    />
  </Section>
);

export { Banner };
