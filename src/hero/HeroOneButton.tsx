import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
  stats?: {
    trainers?: number;
    battles?: number;
    shinies?: number;
  };
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="bg-gradient-to-b from-white to-gray-100 py-20 text-center">
    <h1 className="mb-6 whitespace-pre-line text-6xl font-bold leading-hero text-gray-900">
      {props.title}
    </h1>
    <div className="mb-8 text-2xl text-gray-700">{props.description}</div>

    {props.button}

    {props.stats && (
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-8">
        {props.stats.trainers && (
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">
              {props.stats.trainers.toLocaleString()}+
            </div>
            <div className="text-gray-600">Trainers</div>
          </div>
        )}
        {props.stats.battles && (
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600">
              {props.stats.battles.toLocaleString()}+
            </div>
            <div className="text-gray-600">Battles</div>
          </div>
        )}
        {props.stats.shinies && (
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600">
              {props.stats.shinies.toLocaleString()}+
            </div>
            <div className="text-gray-600">Shinies</div>
          </div>
        )}
      </div>
    )}
  </header>
);

export { HeroOneButton };
