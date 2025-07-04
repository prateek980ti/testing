import React, { useState } from "react";
import { OutlinedButton } from "./utils/OutlinedButton";

interface PaginationProps {
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const getVisiblePages = () => {
    const pages: number[] = [];

    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage === 1) {
        pages.push(1, 2, 3);
      } else if (currentPage === totalPages) {
        pages.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(currentPage - 1, currentPage, currentPage + 1);
      }
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className=" h-[10vh] w-full  flex justify-center select-none items-center gap-4 py-4 bg-[#1C1C1C]">
      <div
        onClick={() => {
          if (currentPage > 1) setCurrentPage(currentPage - 1);
        }}
        className={`text-white cursor-pointer ${
          currentPage === 1 ? "opacity-40 cursor-not-allowed" : ""
        }`}
      >
        Previous
      </div>

      {visiblePages.map((page) => (
        <OutlinedButton
          key={page}
          onClick={() => setCurrentPage(page)}
          className="p-[2px] min-w-8 h-8 rounded-[8px]"
          InnerClass={`rounded-[6px] ${
            page === currentPage ? " bg-[#1C1C1C] " : ""
          }`}
        >
          {page}
        </OutlinedButton>
      ))}

      <div
        onClick={() => {
          if (currentPage < totalPages) setCurrentPage(currentPage + 1);
        }}
        className={`text-white cursor-pointer ${
          currentPage === totalPages ? "opacity-40 cursor-not-allowed" : ""
        }`}
      >
        Next
      </div>
    </div>
  );
};

export default Pagination;
