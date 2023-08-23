import React, { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
const Header: FunctionComponent = () => {
  return (
    // <div className="flex font-roboto items-center justify-center md:justify-end bg-[#016FB9] text-[#E4FF1A] py-1 md:pr-20 space-x-6">
    //   <p className="hover:cursor-pointer">Projects</p>
    //   <p className="hover:cursor-pointer">Alumni</p>
    //   <p className=" text-lg text-white">|</p>
    //   <Link href="https://www.instagram.com/nexttechlab/?hl=en">
    //     <p className="hover:cursor-pointer">Instagram</p>
    //   </Link>
    //   <Link href="https://twitter.com/nexttechlab">
    //     <p className="hover:cursor-pointer">Twitter</p>
    //   </Link>
    // </div>
    <div className="px-8 py-3 bg-[#016FB9]">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4 hover:cursor-pointer">
          <Link href="/">
            <div className="flex justify-center items-center gap-2">
            <Image src="/ntl-logo.png" width={40} height={40} alt="ntl-logo" />
            <a className="text-2xl font-semibold">Next Tech Lab</a>
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://www.instagram.com/nexttechlab/?hl=en">
            <a className="hover:underline underline-offset-2">Instagram</a>
          </Link>
          <Link href="https://twitter.com/nexttechlab">
            <a className="hover:underline underline-offset-2">Twitter</a>
          </Link>
          </div>
          </div>
    </div>
  );
};

export default Header;
