import Table, { SENTIMENT } from "./Table";
import Topbar from "./Topbar";
import Pagination from "../Pagination";
import { useState } from "react";
import Filterbar from "./Filterbar";

const data = [
  {
    trackingid: "001",
    mobileno: 1234567890,
    customer: "Suraj Sharma",
    date: "2025-06-26",
    callduration: "2:35",
    lead: 90,
    sentiment: SENTIMENT.HIGHLYINTERESTED,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    trackingid: "002",
    mobileno: 9876543210,
    customer: "Riya Verma",
    date: "2025-06-25",
    callduration: "4:12",
    lead: 60,
    sentiment: SENTIMENT.NOTINTERESTED,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    trackingid: "001",
    mobileno: 1234567890,
    customer: "Suraj Sharma",
    date: "2025-06-26",
    callduration: "2:35",
    lead: 90,
    sentiment: SENTIMENT.HIGHLYINTERESTED,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    trackingid: "002",
    mobileno: 9876543210,
    customer: "Riya Verma",
    date: "2025-06-25",
    callduration: "4:12",
    lead: 60,
    sentiment: SENTIMENT.NOTINTERESTED,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    trackingid: "001",
    mobileno: 1234567890,
    customer: "Suraj Sharma",
    date: "2025-06-26",
    callduration: "2:35",
    lead: 90,
    sentiment: SENTIMENT.HIGHLYINTERESTED,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    trackingid: "002",
    mobileno: 9876543210,
    customer: "Riya Verma",
    date: "2025-06-25",
    callduration: "4:12",
    lead: 60,
    sentiment: SENTIMENT.NOTINTERESTED,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    trackingid: "001",
    mobileno: 1234567890,
    customer: "Suraj Sharma",
    date: "2025-06-26",
    callduration: "2:35",
    lead: 90,
    sentiment: SENTIMENT.HIGHLYINTERESTED,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    trackingid: "002",
    mobileno: 9876543210,
    customer: "Riya Verma",
    date: "2025-06-25",
    callduration: "4:12",
    lead: 60,
    sentiment: SENTIMENT.NOTINTERESTED,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    trackingid: "001",
    mobileno: 1234567890,
    customer: "Suraj Sharma",
    date: "2025-06-26",
    callduration: "2:35",
    lead: 90,
    sentiment: SENTIMENT.HIGHLYINTERESTED,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    trackingid: "002",
    mobileno: 9876543210,
    customer: "Riya Verma",
    date: "2025-06-25",
    callduration: "4:12",
    lead: 60,
    sentiment: SENTIMENT.NOTINTERESTED,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    trackingid: "001",
    mobileno: 1234567890,
    customer: "Suraj Sharma",
    date: "2025-06-26",
    callduration: "2:35",
    lead: 90,
    sentiment: SENTIMENT.HIGHLYINTERESTED,
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    trackingid: "002",
    mobileno: 9876543210,
    customer: "Riya Verma",
    date: "2025-06-25",
    callduration: "4:12",
    lead: 60,
    sentiment: SENTIMENT.NOTINTERESTED,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

function ConversationTableSection() {
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="sticky top-0 z-20 bg-white dark:bg-[#0f172a]">
        <Topbar />
        <Filterbar status={2} />
      </div>

      <div className="flex-1 overflow-y-auto">
        <Table data={data} />
      </div>

      <div className="sticky bottom-0 z-20 bg-white dark:bg-[#0f172a]">
        <Pagination
          totalPages={10}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default ConversationTableSection;
