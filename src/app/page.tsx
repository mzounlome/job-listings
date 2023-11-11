"use client";
import Header from "./components/Header";
import JobList from "./components/JobList";
import { useState, useEffect } from "react";
import jobs from "./data";
export default function Home() {
  const [jobListings, setJobListings] = useState(jobs);
  const [searchTerm, setSearcTerm] = useState("");
  // create onchange handler
  //use job. filter on jobs array by position based on searchTerm
  // call setJobListings to set new array
  const filterJobs = () => {
    const filteredJobs = jobs.filter((job) => {
      return job.position.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setJobListings(filteredJobs);
  };
  useEffect(() => {
    filterJobs();
  }, [searchTerm]);

  console.log(searchTerm);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-auto">
      <Header handler={setSearcTerm} searchTerm={searchTerm} />
      <JobList jobs={jobListings} />

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
