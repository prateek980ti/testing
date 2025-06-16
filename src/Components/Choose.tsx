// components/WhyChooseUs/WhyChooseUs.tsx
import React from 'react';
import ChooseContainer from './ChooseContainer';
import { features } from './Data';

const Choose: React.FC = () => {
  return (
    <section className="min-h-screen px-4 py-16 text-center text-white bg-primaryA">
    
<h2 className="inline-block font-bold text-transparent text-large bg-gradient-to-r from-pink to-purple bg-clip-text w-fit">
  WHY CHOOSE US?
</h2>

      <p className="font-bold text-md text-white/80">
        Discover What Sets Vociera Apart In World Of Voice Technology
      </p>

      <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto lg:grid-cols-2">
        {features.map((feature, index) => (
          <ChooseContainer
            key={index}
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
