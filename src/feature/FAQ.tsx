import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

/**
 * FAQ Component - Displays frequently asked questions about the game
 * @returns {JSX.Element} FAQ section
 */
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How can I obtain Shiny Greninja?',
      answer:
        'You can obtain Shiny Greninja through special missions or by winning battles in the game. Currently featuring increased encounter rates!',
    },
    {
      question: 'How to acquire Giratina in the game?',
      answer:
        'Giratina can be obtained through multiple methods:\n- Complete Legendary Quest Chains\n- Participate in Time-Limited Events\n- Reach specific Collection Milestones',
    },
    {
      question: 'How does the Fusion System work?',
      answer:
        'Our innovative Fusion System allows you to:\n- Combine abilities from two Pokemon\n- Create unique skill combinations\n- Unlock special evolution paths for Pokemon like Totodile',
    },
    {
      question: 'Is the game free to play?',
      answer:
        'Yes! PokeRogue is completely free to play. All Pokemon, including rare ones, can be obtained through in-game activities and daily battles.',
    },
    {
      question: 'How do I start playing PokeRogue?',
      answer:
        'Simply click the &quot;Play Now&quot; button to begin your collection journey! No downloads required &ndash; start battling and collecting instantly.',
    },
  ];

  return (
    <section id="faq" className="relative z-10 bg-[#1A237E] py-12">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/assets/images/grid.png')] bg-repeat opacity-20" />

      <div className="container relative z-20 mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-300/90">
            Get answers to common questions about PokeRogue&apos;s features and
            gameplay
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="relative z-30 grid gap-2 pb-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl bg-gray-800/80 backdrop-blur-sm"
            >
              <button
                className="flex w-full items-center justify-between p-6 text-left hover:bg-gray-800"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>
                <FaChevronDown
                  className={`ml-4 shrink-0 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden bg-gray-800/80 transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="whitespace-pre-line px-6 pb-6 text-base text-gray-400">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Stars */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute size-1 animate-sparkle-star rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export { FAQ };
