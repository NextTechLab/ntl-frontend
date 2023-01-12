import React from "react";
import Link from "next/link";
import { DETAILS } from "../../utils/constants";
function Footer() {
  return (
    <div className="bg-[#292929] pb-8">
      <div className="flex justify-center items-center pt-4">
        <picture className=" flex justify-center">
          <img className="mr-2 ml-6" src="/address.svg" alt="" />
        </picture>
        <p className=" text-center">{DETAILS.ADDRESS}</p>
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
      <div className=" text-center pt-6">Designed & Developed with 🪄 by</div>
      <div className="text-center">The Next Tech Lab</div>
    </div>
  );
}

export default Footer;
