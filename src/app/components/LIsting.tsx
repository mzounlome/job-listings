"use client"
import { FC, useState } from "react";

interface ListingProps {}
import Image from "next/image";
import photoSnap from "../images/photosnap.svg"


const Listing: FC<ListingProps> = ({}) => {

  return (

    <div className="bg-white w-10/12 h-80  shadow-[-9px_0_0_0px] shadow-teal-600/80 rounded relative desktop:h-36 desktop:flex desktop:flex-row"  >
         <Image className="absolute -top-10  left-5 desktop:top-5 " src={photoSnap} alt={photoSnap}/> 
<div className="container  h-2/5  p-2 flex flex-col justify-around mt-12 desktop:h-full desktop:mt-0" >
     <div className="flex flex-wrap justify-between  w-4/5 container px-4 desktop:ml-32   desktop:w-3/5 "> 
    <p className="text-base text-teal-600 font-bold "> Photosnap</p>
    <p className="text-base text-white bg-teal-600 rounded-xl w-14 text-center ml-4 "> NEW!</p>
    <p className="text-base text-white bg-gray-700 rounded-xl w-28 text-center ml-4"> FEATURED</p>
    </div>
    <div>
    <p className="text-gray-700 container flex pl-6 font-bold ml-32" >Senior Frontend Developer</p>
    </div>
    <div className="flex flex-wrap justify-between w-4/5 px-6 desktop:ml-32 desktop:w-2/5 ">
    <p className="text-gray-500">1d ago</p>
    <p className="text-gray-500">Full Time</p>
    <p className="text-gray-500">USA only</p>
</div>
<div className="flex justify-evenly desktop:hidden">
 <hr className="border-gray-700 w-11/12 desktop:hidden "/> 
 </div>
</div>
<div className="container h-2/5 p-6 flex flex-col desktop:h-full">
    <div className="flex flex-wrap justify-evenly h-96 w-80 desktop:w-full desktop:items-center ">
<p className="text-lg text-teal-600  bg-teal-50 rounded h-8  p-4 flex justify-center items-center font-bold mb-4 desktop:mb-0 " > Frontend</p>
<p className="text-lg text-teal-600 bg-teal-50 rounded h-8  p-4 flex justify-center items-center font-bold"> Senior</p>
<p className="text-lg text-teal-600 bg-teal-50 rounded h-8  p-4 flex justify-center items-center font-bold"> HTML</p>
<p className="text-lg text-teal-600 bg-teal-50 rounded h-8  p-4 flex justify-center items-center font-bold"> CSS</p>
<p className="text-lg text-teal-600 bg-teal-50 rounded h-8  p-4 flex justify-center items-center font-bold"> Javascript</p>
</div>
</div>

    </div>
  );
};

export default Listing; 