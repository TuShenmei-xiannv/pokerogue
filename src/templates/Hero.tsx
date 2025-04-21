import Link from 'next/link';

import { FAQ } from '@/feature/FAQ';
import { GameFeatures } from '@/feature/GameFeatures';
import { HeroContent } from '@/hero/HeroContent';

import { Background } from '../background/Background';
import { BackgroundEffect } from '../hero/BackgroundEffect';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { AppConfig } from '../utils/AppConfig';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-game-primary">
    <div className="relative min-h-screen">
      <BackgroundEffect />

      <Section yPadding="py-4">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link
              href={AppConfig.mainGameUrl}
              className="text-gray-200 transition-colors hover:text-game-accent"
            >
              Play Now
            </Link>
          </li>
          <li>
            <Link
              href="#features"
              className="text-gray-200 transition-colors hover:text-game-accent"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#faq"
              className="text-gray-200 transition-colors hover:text-game-accent"
            >
              FAQ
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <div className="flex flex-col">
        <HeroContent
          stats={{
            trainers: 40500,
            battles: 27100,
            shinies: 22200,
          }}
        />
        <GameFeatures />
        <FAQ />
      </div>
    </div>
  </Background>
);

export { Hero };
