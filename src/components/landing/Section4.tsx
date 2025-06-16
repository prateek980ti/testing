import React from 'react'
import { logos } from '../../../public/logos';

const Info= {
  "0": {
    "svg": logos.landing.group,
    "title": "Getting Started\nwith Voicera",
    "description": "Set up voice & messaging\nAPIs in minutes."
  },
  "1": {
    "svg": logos.landing.api,
    "title": "API Integration",
    "description": "Step by step guidance for\nintegrating with any stack."
  },
  "2": {
    "svg": logos.landing['shield-check'],
    "title": "Security &\ncompliance",
    "description": "Learn how we keep your\ndata safe."
  },
  "3": {
    "svg": logos.landing['shield-check'],
    "title": "Billing &\nPricing FAQs",
    "description": "All your billing queries,\nanswered."
  },
};

interface InfoCardProps {
  svg: string;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ svg, title, description }) => {
  return (
    <div className='w-80 h-90 bg-gradient-to-br from-[#B70849] to-[#652CFE] p-0.5 rounded-4xl'>
      <div className='w-full h-full bg-black rounded-4xl flex flex-col items-center'>
        <div className="w-fit h-fit my-6" dangerouslySetInnerHTML={{ __html: svg }} />
        <h4 className='text-2xl font-medium mb-16 h-20'>
          {title.split('\n').map((line: string, index: number) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))
          }
        </h4>
        <p className='text-lg'>
          {description.split('\n').map((line: string, index: number) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))
          }
        </p>
      </div>
    </div>
  );
}

const Section4 = () => {
  return (
    <section className='py-10 px-10 w-full'>
      <h1 className='text-[#662DFF] text-7xl font-medium'>Need Help?</h1>
      <h2 className='text-5xl font-medium my-6 tracking-wide'>SUPPORT THAT SPEAKS<br />YOUR LANGUAGE</h2>
      <p>Quick answers, real-time help, and detailed guides — all built to<br />support and empower developers."</p>
      <div className='flex justify-around w-full my-12'>
        {
          Object.values(Info).map((item, index) => (
            <InfoCard 
              key={index}
              svg={item.svg}
              title={item.title}
              description={item.description}
            />
          ))
        }
      </div>
      <h3 className='font-medium text-4xl'>Need Real Time-Help?</h3>
      <p className='my-3'>Our Ai Assistant and Support Engineers are available 24/7.</p>
    </section>
  )
}

export default Section4