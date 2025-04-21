import type { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';

type ICenteredFooterProps = {
  logo: ReactNode;
  iconList: ReactNode;
  children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="relative py-4 text-center">
    {/* Logo */}
    <div className="transition-transform duration-300 hover:scale-105">
      {props.logo}
    </div>

    {/* Separator Line */}
    <div className="mx-auto mt-2 h-px w-24 bg-gradient-to-r from-transparent via-gray-400/20 to-transparent" />

    {/* Copyright */}
    <div className="relative mt-2 text-sm text-gray-400/80">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/5 to-transparent" />
      <FooterCopyright />
    </div>
  </div>
);

export { CenteredFooter };
