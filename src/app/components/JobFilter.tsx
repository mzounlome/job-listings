"use client";

import { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
interface JobFilterProps {
  searchTerm: any;
  handler: any;
}
//
const JobFilter: FC<JobFilterProps> = ({ handler, searchTerm }) => {
  return (
    <div
      className="w-10/12 h-12  bg-white absolute: bottom 10 rounded-md flex flex-wrap
    items-center desktop:w-3/12 tablet:2/12
    "
    >
      <div className="h-full w-10/12 rounded-l-md flex items-center ">
        <div className="flex items-center  h-8">
          <input
            className="p-2 ml-2"
            placeholder="Search for position..."
            onChange={(e) => handler(e.target.value)}
            value={searchTerm}
            type="text"
          />
        </div>
      </div>
      <div className="h-full w-2/12 rounded-r-md flex items-center ">
        <button
          onClick={() => handler("")}
          className="text-sm text-teal-600/80 hover: underline-offset-2"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default JobFilter;
