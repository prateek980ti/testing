import React from "react";

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

const CompaignCard: React.FC<CardProps> = ({
  title,
  description,
  tags,
  progress,
}) => {
  return (
    <div className="bg-gradient-to-r from-primaryC to-accent p-[2px] rounded-[24px] w-[354px] h-[226px]">
      <div className="bg-primaryA backdrop-blur-md rounded-[22px] p-2 text-white relative pb-20 w-full h-full">
        <div className="flex justify-between">
          <div>
            <div className="flex items-center gap-2">
              <img src="images/Rectangle.svg" alt="" />
             <div className="flex justify-baseline">
             <div className="flex flex-col items-start">
               <div className="flex gap-25">
               <h2 className="text-[20px] font-bold ">{title}</h2>
               <img src="images/settings.svg" alt="" />
               </div>
                <div className="flex  text-[12px] mt-1">
                  {tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
             </div>
            </div>
          </div>
        </div>

        <p className="mt-3 mb-10 text-sm text-[12px] ">
          {description}{" "}
          <span className="font-medium cursor-pointer text-accent hover:underline">
            Read More
          </span>
        </p>

        <div className="absolute mt-20 bottom-4 left-4 right-4">
          <div className="mb-5 font-semibold text-center text-primaryB">
            {progress}%
          </div>
          <div className="relative w-[330px] h-[18px] overflow-visible bg-gray-300 rounded-b-md">
            <div className="flex flex-col">
            <div
              className="absolute top-[-4.5px] h-[22px] w-[210px] rounded-t-md bg-gradient-to-r from-[#8E1BA4] to-[#B70849]"
              style={{ width: '${progress}%' }}
            />
            <div className="absolute -top-7 right-39">
             <img src="images/Call.svg" alt="" />
             </div>
            </div>
             <div className="absolute -top-2 right-40">
             <img src="images/Group.svg" alt="" />
             </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaignCard;
