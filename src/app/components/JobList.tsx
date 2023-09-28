"use client";
import { FC, useState } from "react";
import jobs from "../data";
import Listing from "./LIsting";
import { jobListing } from "./types";

interface JobListProps {}

const JobList: FC<JobListProps> = ({}) => {
  console.log(jobs);
  return (
    <div className="w-10/12 h-80 mb-10">
      {jobs.map((job) => (
        <Listing job={job} key={job.id} />
      ))}
    </div>
  );
};

export default JobList;
