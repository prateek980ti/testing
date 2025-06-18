import React from 'react';
import ChooseContainer from './ChooseContainer';
import { topFeatures, bottomFeatures } from './Data';
import earthVideo from '/src/assets/logo/earth gif.mp4';

const Choose: React.FC = () => {
  return (
    <section className="min-h-screen px-4 py-16 text-center text-primaryB bg-primaryA">
      <h2 className="inline-block font-bold text-transparent text-large bg-gradient-to-r from-pink to-purple bg-clip-text w-fit">
        WHY CHOOSE US?
      </h2>

      <p className="font-bold text-md text-white/80">
        Discover What Sets Vociera Apart In World Of Voice Technology
      </p>

      <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2">
        {topFeatures.map((feature, index) => (
          <ChooseContainer
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
        <div className="flex items-center justify-center col-span-1 sm:col-span-2">
          <video
            width="562"
            height="349"
            autoPlay
            muted
            loop
            className="rounded-full shadow-2xl"
          >
            <source src={earthVideo} type="video/mp4" />
          </video>
        </div>
        {bottomFeatures.map((feature, index) => (
          <ChooseContainer
            key={index + 2}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Choose;
