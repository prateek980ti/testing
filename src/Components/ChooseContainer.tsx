import React from "react";

interface Props {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const ChooseContainer: React.FC<Props> = ({ icon, title, description }) => {
  return (
    <div className="flex justify-center ">
      <div className=" p-1 shadow-md   hover:scale-105 transition-transform duration-300 w-[300px] flex justify-center items-center flex-col text-center mb-10 mt-10">
        {/* <div className="flex items-center justify-center p-20 mt-10 mb-6 bg-opacity-75 align-center bg-gradient-to-tl from-primaryA via-purple to-black">
          {icon}
        </div> */}
       {icon}
        <h3 className=" text-[25px] font-semibold mb-3 text-primaryB text-center">
          {title}
        </h3>
        <p className="text-[20px] text-primaryB text-center">{description}</p>
      </div>
    </div>
  );
};

export default ChooseContainer;
