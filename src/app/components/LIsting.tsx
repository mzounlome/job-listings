"use client";

import { FC, useState } from "react";
import { jobListing } from "./types";
interface ListingProps {
  job: jobListing;
}
import Image from "next/image";
import photoSnap from "../images/photosnap.svg";

const Listing: FC<ListingProps> = ({ job }) => {
  console.log(job);
  return (
    <div className="bg-white container h-full shadow-[-9px_0_0_0px] shadow-teal-600/80 rounded relative desktop:h-36 bg desktop:flex desktop:flex-row desktop:mb:20">
      <Image
        className="absolute -top-10 left-5 desktop:top-5"
        width={10}
        height={10}
        src={job.logo}
        alt={photoSnap}
      />
      <div className="container  h-3/5 p-2 flex flex-col justify-around mt-12 desktop:h-full desktop:mt-0">
        <div className="flex flex-wrap justify-between  container px-4 desktop:ml-32 mt-10    desktop:w-3/5 ">
          <p className="text-sm text-teal-600/80 font-bold "> {job.company}</p>
          <p className="text-sm text-white bg-teal-600/80 rounded-xl w-14 text-center ml-2 ">
            {" "}
            NEW!
          </p>
          <p className="text-sm text-white bg-gray-700 rounded-xl w-28 text-center ">
            {" "}
            FEATURED
          </p>
        </div>
        <div>
          <p className="text-gray-700 container flex pl-6 font-bold desktop:ml-32">
            {job.position}
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-4/5 px-6 desktop:ml-32 desktop:w-2/5 ">
          <p className="text-gray-500">{job.postedAt}</p>
          <p className="text-gray-500">{job.contract}</p>
          <p className="text-gray-500">{job.location}</p>
        </div>
        <div className="flex justify-evenly desktop:hidden">
          <hr className="border-gray-700 w-11/12 desktop:hidden " />
        </div>
      </div>
      <div className="container h-2/5 p-6 flex flex-col desktop:h-full">
        <div className="flex flex-wrap justify-evenly h-96 w-80 desktop:w-full desktop:items-center ">
          <p className="text-lg text-teal-600  bg-teal-50 rounded h-8  p-4 flex justify-center items-center font-bold mb-4 desktop:mb-0 cursor-pointer hover:text-white hover:bg-teal-600/80 ">
            {" "}
            {job.role}
          </p>
          <p className="text-lg text-teal-600 bg-teal-50 rounded h-8  p-4 flex justify-center items-center font-bold cursor-pointer hover:text-white hover:bg-teal-600/80">
            {" "}
            {job.level}
          </p>
          <p className="text-lg text-teal-600 bg-teal-50 rounded h-8  p-4 flex justify-center items-center font-bold cursor-pointer hover:text-white hover:bg-teal-600/80">
            {" "}
            HTML
          </p>
          <p className="text-lg text-teal-600 bg-teal-50 rounded h-8  p-4 flex justify-center items-center font-bold cursor-pointer hover:text-white hover:bg-teal-600/80">
            {" "}
            CSS
          </p>
          <p className="text-lg text-teal-600 bg-teal-50 rounded h-8  p-4 flex justify-center items-center font-bold cursor-pointer hover:text-white hover:bg-teal-600/80">
            {" "}
            Javascript
          </p>
        </div>
      </div>
    </div>
  );
};

export default Listing;
