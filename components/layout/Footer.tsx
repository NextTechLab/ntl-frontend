import React, { FunctionComponent } from "react";
import Link from "next/link";
import { DETAILS } from "../../utils/constants";
const Footer: FunctionComponent = () => {
  return (
    <div className="bg-[#292929] pb-8">
      <div className="flex justify-center items-center pt-4">
        <picture className="justify-center hidden md:flex">
          <img className=" ml-6  md:mr-2" src="/address.svg" alt="" />
        </picture>
        <p className="mx-2 text-center text-sm md:text-md pb-2">
          {DETAILS.ADDRESS}
        </p>
      </div>
      <div className="flex justify-center">
        <picture className=" flex lg:space-x-4 space-x-2 pt-2">
          <Link
            href="https://www.instagram.com/nexttechlab/?hl=en"
            target="_blank"
          >
            <picture>
              <img
                className=" hover:cursor-pointer"
                src="/instagram.svg"
                alt="instagram image"
              />
            </picture>
          </Link>
          <Link href="https://twitter.com/nexttechlab">
            <picture>
              <img
                className=" hover:cursor-pointer"
                src="/twitter.svg"
                alt="twitter image"
              />
            </picture>
          </Link>
          <Link href="https://www.youtube.com/@nexttechlab9568">
            <picture>
              <img
                className=" hover:cursor-pointer"
                src="/youtube.svg"
                alt="youtube image"
              />
            </picture>
          </Link>
        </picture>
      </div>
      <div className=" text-center pt-4 text-sm md:text-md">
        Designed & Developed with 🪄 by
      </div>
      <div className="text-center text-sm md:text-md">The Next Tech Lab</div>
    </div>
  );
};

export default Footer;
