import { twMerge } from "tailwind-merge";
import { BsThreeDots } from "react-icons/bs";
import { FaSort } from "react-icons/fa";

export enum SENTIMENT {
  HIGHLYINTERESTED,
  INTERESTED,
  NOTINTERESTED,
  REJECTED,
  NEUTRAL,
}

interface Idata {
  trackingid: string;
  mobileno: number;
  customer: string;
  date: string;
  callduration: string;
  lead: number;
  sentiment: SENTIMENT;
  image?: string; 
}

interface TableProps {
  data: Idata[];
}

const sentimentStyle = (sentiment: SENTIMENT) => {
  switch (sentiment) {
    case SENTIMENT.HIGHLYINTERESTED:
      return twMerge("bg-[#B5FFC1] text-black px-3 py-1 rounded-full text-sm");
    case SENTIMENT.INTERESTED:
      return twMerge("bg-[#B5DAFF] text-black px-3 py-1 rounded-full text-sm");
    case SENTIMENT.NOTINTERESTED:
      return twMerge("bg-[#FFDC81] text-black px-3 py-1 rounded-full text-sm");
    case SENTIMENT.REJECTED:
      return twMerge("bg-[#C83F3F] text-black px-3 py-1 rounded-full text-sm");
    case SENTIMENT.NEUTRAL:
      return twMerge("bg-[#D1D5DB] text-black px-3 py-1 rounded-full text-sm");
    default:
      return "";
  }
};

const sentimentLabel = (sentiment: SENTIMENT) => {
  switch (sentiment) {
    case SENTIMENT.HIGHLYINTERESTED:
      return "Highly Interested";
    case SENTIMENT.INTERESTED:
      return "Interested";
    case SENTIMENT.NOTINTERESTED:
      return "Not Interested";
    case SENTIMENT.REJECTED:
      return "Rejected";
    case SENTIMENT.NEUTRAL:
      return "Neutral";
    default:
      return "";
  }
};

const HeaderCell = ({ label }: { label: string }) => (
  <div className="flex justify-center items-center gap-1 whitespace-nowrap">
    <span>{label}</span>
    <FaSort size={12} className="text-gray-400" />
  </div>
);

function Table({ data }: TableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full bg-[#2C2C2C] text-white text-sm overflow-hidden">
        <thead>
          <tr className="bg-[#2C2C2C] uppercase text-xs font-bold">
            <th className="px-2 py-3">Tracking ID</th>
            <th className="px-2 py-3">
              <HeaderCell label="Mobile No." />
            </th>
            <th className="px-2 py-3">
              <HeaderCell label="Customer" />
            </th>
            <th className="px-2 py-3">
              <HeaderCell label="Date" />
            </th>
            <th className="px-2 py-3">
              <HeaderCell label="Call Duration" />
            </th>
            <th className="px-2 py-3">
              <HeaderCell label="Lead Score" />
            </th>
            <th className="px-2 py-3">
              <HeaderCell label="Sentiments" />
            </th>
            <th className="px-2 py-3">Conversation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr
              key={i}
              className="border-b border-[#333333] odd:bg-[#333333] hover:bg-[#6c6c7f] transition-all"
            >
              <td className="px-2 py-3 whitespace-nowrap">#{item.trackingid}</td>

              <td className="px-2 py-3 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  {item.image && (
                    <img
                      src={item.image}
                      alt="Profile"
                      className="w-7 h-7 rounded-full object-cover"
                    />
                  )}
                  <span>{item.mobileno}</span>
                </div>
              </td>

              <td className="px-2 py-3 whitespace-nowrap">{item.customer}</td>
              <td className="px-2 py-3 whitespace-nowrap">{item.date}</td>
              <td className="px-2 py-3 whitespace-nowrap">{item.callduration}</td>
              <td className="px-2 py-3 whitespace-nowrap">{item.lead} %</td>

              <td className="px-2 py-3 whitespace-nowrap">
                <div className="flex justify-center">
                  <span
                    className={twMerge(
                      sentimentStyle(item.sentiment),
                      "min-w-[140px] text-center"
                    )}
                  >
                    {sentimentLabel(item.sentiment)}
                  </span>
                </div>
              </td>

              <td className="px-2 py-3 whitespace-nowrap">
                <div className="flex justify-center">
                  <BsThreeDots className="text-xl cursor-pointer" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
