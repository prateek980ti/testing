import React from "react";

interface Props {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const ChooseContainer: React.FC<Props> = ({ icon, title, description }) => {
  return (
    <div className="flex justify-center mt-10">
      <div className=" shadow-md hover:scale-105 transition-transform duration-300 w-[300px] flex justify-center items-center flex-col text-center ">
        {icon}
        <h3 className="text-[24px] text-center text-primaryB">
          {title}
        </h3>
        <p className=" text-primaryB text-center font-display font-medium leading-[32px] ">{description}</p>
      </div>
    </div>
  );
};

export default ChooseContainer;
