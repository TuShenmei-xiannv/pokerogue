import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <div className="relative bg-[#1A237E]/95 backdrop-blur-sm">
    {/* Background grid */}
    <div className="absolute inset-0 bg-[url('/assets/images/grid.png')] bg-repeat opacity-10" />

    {/* Content */}
    <Section>
      <CenteredFooter logo={<Logo />} iconList={<></>}>
        <div className="text-sm text-gray-400/80">
          © {new Date().getFullYear()} PokeRogue - All rights reserved
        </div>
      </CenteredFooter>
    </Section>
  </div>
);

export { Footer };
