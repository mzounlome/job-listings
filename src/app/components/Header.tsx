"use client";
import { FC } from "react";
import headerImg from "../images/bg-header-mobile.svg";
import JobFilter from "./JobFilter";

interface HeaderProps {
  handler: any;
  searchTerm: any;
}
import Image from "next/image";
const Header: FC<HeaderProps> = ({ handler, searchTerm }) => {
  return (
    <div className="bg-teal-600 container h-40  relative flex justify-center flex-wrap">
      <Image className="h-full container" src={headerImg} alt={headerImg} />
      <JobFilter handler={handler} searchTerm={searchTerm} />
    </div>
  );
};

export default Header;
