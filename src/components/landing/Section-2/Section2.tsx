import React from 'react';
import SectionContainer from './SectionContainer';
import { leftFeatures, rightFeatures } from './Data';
import earthVideo from "../../../assets/logoimage/earth gif.mp4";

const Section2: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-16 text-white bg-primaryA">
      <h2 className="mb-2 text-4xl font-bold text-transparent bg-gradient-to-r from-pink to-purple bg-clip-text">
        WHY CHOOSE US?
      </h2>
      <p className="mb-10 md:text-lg font-medium text-center text-white/80">
        Discover What Sets Vociera Apart In World Of Voice Technology
      </p>

<<<<<<< HEAD
      <div className="grid gap-10 grid-cols-1 lg:grid-cols-3 items-center">
=======
      <div className="grid gap-10 grid-cols-1 lg:grid-cols-3 items-center md:grid-cols-3">
>>>>>>> 9cdf7cb8b65f921f6465bfcad6374eb7763d9407

        <div className="flex flex-col md:items-end gap-10 ">
          {leftFeatures.map((feature, index) => (
            <SectionContainer
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        <div className="justify-center hidden md:flex">
          <video
            width="762"
            height="749"
            autoPlay
            muted

             className="rounded-full  md:w-[300px] lg:w-[400px] xl:w-[500px]"
          >
            <source src={earthVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex flex-col items-start gap-10">
          {rightFeatures.map((feature, index) => (
            <SectionContainer
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
