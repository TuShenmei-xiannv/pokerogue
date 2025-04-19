import type { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
  logo: ReactNode;
  iconList: ReactNode;
  children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="relative py-12 text-center">
    {/* Logo */}
    <div className="transition-transform duration-300 hover:scale-105">
      {props.logo}
    </div>

    {/* Separator Line */}
    <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-gray-400/20 to-transparent" />

    {/* Navigation */}
    <nav className="relative mt-8">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/5 to-transparent" />
      <ul className="navbar relative flex flex-row justify-center gap-8 text-base font-medium text-gray-300/90">
        {props.children}
      </ul>
    </nav>

    {/* Separator Line */}
    <div className="mx-auto mt-8 h-px w-48 bg-gradient-to-r from-transparent via-gray-400/20 to-transparent" />

    {/* Social Icons */}
    <div className="relative mt-8">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/5 to-transparent" />
      <div className="relative flex justify-center">
        <div className="flex items-center gap-6 rounded-full bg-white/5 px-8 py-4 backdrop-blur-sm">
          <FooterIconList>
            <div className="flex items-center gap-6 opacity-80 transition-opacity hover:opacity-100">
              {props.iconList}
            </div>
          </FooterIconList>
        </div>
      </div>
    </div>

    {/* Separator Line */}
    <div className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-gray-400/20 to-transparent" />

    {/* Copyright */}
    <div className="relative mt-8 text-sm text-gray-400/80">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/5 to-transparent" />
      <FooterCopyright />
    </div>

    <style jsx>
      {`
        .navbar :global(li) {
          @apply relative;
        }
        .navbar :global(li a) {
          @apply hover:text-white transition-colors duration-300;
          @apply px-4 py-2 rounded-lg hover:bg-white/5 backdrop-blur-sm;
        }
        .navbar :global(li a::after) {
          content: '';
          @apply absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300;
        }
        .navbar :global(li a:hover::after) {
          @apply w-full;
        }
        .navbar :global(li:not(:last-child)::after) {
          content: '•';
          @apply absolute right-[-1rem] top-1/2 -translate-y-1/2 text-gray-500/50;
        }
      `}
    </style>
  </div>
);

export { CenteredFooter };
