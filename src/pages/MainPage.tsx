import Sidebar from "../components/Mainpage/Sidebar/Sidebar";
// import Aivoice from '../components/Mainpage/Ai-voice/Aivoice'
import Table, { SENTIMENT } from "../components/ConversationDataCard/Table";
import FilterBar from "../components/ConversationDataCard/Filterbar";
import Topbar from "../components/ConversationDataCard/Topbar";

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

function MainPage() {
  return (
    <div className="flex min-hull h-screen">
      <Sidebar />
      <div className="flex flex-col overflow-y-scroll h-full w-full">
        <Topbar/>
        <FilterBar status={2}/>
        <Table data={data} />
      </div>
    
    </div>
  );
}

export default MainPage;
