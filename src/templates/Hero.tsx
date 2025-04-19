import Link from 'next/link';

import { Background } from '../background/Background';
import { BackgroundEffect } from '../hero/BackgroundEffect';
import { HeroContent } from '../hero/HeroContent';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { AppConfig } from '../utils/AppConfig';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-game-primary">
    <div className="relative min-h-screen">
      <BackgroundEffect />

      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link
              href="https://discord.gg/pokerogue"
              className="text-gray-200 transition-colors hover:text-game-accent"
            >
              Discord
            </Link>
          </li>
          <li>
            <Link
              href={AppConfig.mainGameUrl}
              className="text-gray-200 transition-colors hover:text-game-accent"
            >
              Play Now
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <HeroContent
          stats={{
            trainers: 40500,
            battles: 27100,
            shinies: 22200,
          }}
        />
      </Section>
    </div>
  </Background>
);

export { Hero };
