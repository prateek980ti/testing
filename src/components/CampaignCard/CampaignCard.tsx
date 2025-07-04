import React, { useEffect, useState } from "react";

export enum CardTag {
  AI = "Ai",
  BETA_TEST = "Beta Test",
  CONTENT_CREATION = "Content Creation",
  DESIGN = "Design",
  DEVELOPMENT = "Development",
}

export interface CardProps {
  title: string;
  description: string;
  tags: CardTag[];
  progress: number;
}

const CampaignCard: React.FC<CardProps> = ({
  title,
  description,
  tags,
  progress,
}) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const stepTime = 10;
    const steps = duration / stepTime;
    const stepSize = progress / steps;

    const interval = setInterval(() => {
      start += stepSize;
      if (start >= progress) {
        setAnimatedProgress(progress);
        clearInterval(interval);
      } else {
        setAnimatedProgress(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="bg-gradient-to-r from-primaryC to-accent p-[2px] rounded-[24px] w-[354px] h-[228px] ">
      <div className="bg-primaryA backdrop-blur-md rounded-[22px] p-2 text-white relative pb-20 w-full h-full">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <img src="images/Rectangle.svg" alt="icon" />
            <div className="flex flex-col items-start">
              <div className="flex gap-25">
                <h2 className="text-[20px] font-bold">{title}</h2>
                <img src="images/settings.svg" alt="settings" />
              </div>
              <div className="flex text-[12px] mt-1 flex-wrap">
                {tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>


        <p className="mt-3 mb-2 text-[12px]">
          {description}
          <span className="font-medium cursor-pointer text-accent hover:underline">
            Read More
          </span>
        </p>


        <div className="absolute bottom-4 left-4 right-4">
          <div className="relative w-[330px] h-[18px] bg-gray-300 rounded-b-md ">

            <div
              className="absolute top-[-10px]  h-[28px] rounded-md bg-gradient-to-r from-[#8E1BA4] to-[#B6084B]"
              style={{
                width: `${animatedProgress}%`,
                transition: "width 0.2s ease-in",
              }}
            ></div>


            <div
              className="absolute flex flex-col items-center  transition-all duration-300"
              style={{
                left: `calc(${animatedProgress}% - 35px)`,
                top: "-60px",
              }}
            >
              <span className="text-sm font-semibold text-white mt-1">

                {animatedProgress}%
              </span>
              <img src="images/Call.svg" alt="call" className="w-6 h-6" />
              <img src="images/Group.svg" alt="group" className="w-4 h-4"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
