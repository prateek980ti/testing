import Table, { SENTIMENT } from "./Table";
import Topbar from "./Topbar";
import Pagination from "../Pagination";
import { useState } from "react";
import Filterbar from "./Filterbar";
import data from "./Conversationdata";


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
