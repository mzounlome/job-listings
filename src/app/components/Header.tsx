"use client"
import { FC } from "react";
import headerImg from "../images/bg-header-mobile.svg"

interface HeaderProps {}
import Image from "next/image";
const Header: FC<HeaderProps> = ({}) => {
  return (

    <div className="bg-teal-600 container h-40 " >
<Image className="h-full container" src={headerImg} alt={headerImg}/>

    </div>
  );
};

export default Header; 