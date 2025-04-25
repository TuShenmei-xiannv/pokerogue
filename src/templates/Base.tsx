import { NextSeo } from 'next-seo';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';

const Base = () => (
  <div className="min-h-screen bg-[#1A237E] text-gray-600 antialiased">
    <Meta />
    <NextSeo
      title={AppConfig.title}
      description={AppConfig.description}
      openGraph={{
        title: AppConfig.title,
        description: AppConfig.description,
        site_name: AppConfig.site_name,
      }}
      additionalMetaTags={[
        {
          name: 'keywords',
          content: AppConfig.keywords,
        },
      ]}
    />
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto px-4">
          <Hero />
        </div>
        {/* Hero to Features transition */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#1A237E]/90 backdrop-blur-sm"></div>
        <div className="absolute -bottom-px left-1/2 -translate-x-1/2">
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        </div>
      </section>

      {/* Banner Section - Reduced padding */}
      <section className="relative py-4">
        {/* Top decorative elements */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#1A237E]/90 to-transparent backdrop-blur-sm"></div>
        <div className="absolute inset-x-0 top-0 flex justify-center">
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4">
          <Banner />
        </div>

        {/* Bottom decorative elements */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1A237E]/95 to-transparent"></div>
      </section>

      {/* Footer */}
      <footer className="relative">
        <div className="absolute inset-x-0 top-0 flex justify-center">
          <div className="h-1 w-48 bg-gradient-to-r from-transparent via-gray-400/20 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4">
          <Footer />
        </div>
      </footer>
    </div>
  </div>
);

export { Base };
