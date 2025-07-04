import CampaignCard from "./CampaignCard";
import { OutlinedButton } from "../utils/OutlinedButton";
import { IoAddSharp } from "react-icons/io5";
import { CgSearch } from "react-icons/cg";
import CampaignData from "./CampaignData";

const CampaignPage = () => {
  return (
    <div className="bg-backgroundInverseSecondary h-screen p-2 overflow-y-scroll  text-white">
      <div className="flex flex-col p-2">
        <div className="flex justify-between">
          <h1 className="mb-4 text-[24px]">Set Up Your Campaign</h1>
          <div className="flex gap-4 ">
            <OutlinedButton>
              <img src="images/star.svg" alt="" />
              Add Campaign
            </OutlinedButton>
            <OutlinedButton>
              <img src="images/add.svg" alt="" />
              Upgrade Now
            </OutlinedButton>
          </div>
        </div>
        <div className="border-white h-8 px-2 rounded-sm w-[30vw] justify-start gap-2 border  items-center py-2 text-white flex bg-[#2C2C2C]">
          <CgSearch className="" />
          <input
            type="text"
            className="  outline-none text-sm w-full flex justify-center "
            placeholder="Search..."
            name=""
            id=""
          />
        </div>
      </div>
      <div className="flex flex-wrap  gap-4 p-2 bg-[#1E1E1E]">
        {CampaignData.map((card, index) => (
          <CampaignCard
            key={index}
            title={card.title}
            description={card.description}
            tags={card.tags}
            progress={card.progress}
          />
        ))}

        <div className="bg-gradient-to-r from-primaryC to-accent p-[2px] rounded-[24px] w-[354px] h-[226px]">
          <div className="bg-primaryA backdrop-blur-md rounded-[22px] p-2 text-white relative  w-full h-full flex items-center justify-center text-center">
            <div className="flex flex-col  items-center">
              <div className="bg-white h-18 w-18 text-black text-2xl flex justify-center items-center rounded-full">
                <IoAddSharp />
              </div>
              <div>Add Campaign</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignPage;
