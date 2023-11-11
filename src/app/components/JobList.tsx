"use client";
import { FC } from "react";
// import jobs from "../data";
import Listing from "./LIsting";
import { jobListing } from "./types";

interface JobListProps {
  jobs: any;
}

const JobList: FC<JobListProps> = ({ jobs }) => {
  // console.log(jobs);
  return (
    <div className="w-10/12 h-80 ">
      {jobs.map((job: any) => (
        <Listing job={job} key={job.id} />
      ))}
    </div>
  );
};

export default JobList;
