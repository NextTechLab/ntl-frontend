import Link from "next/link";
import React, { FunctionComponent } from "react";
import { DETAILS } from "../../utils/constants";
const Landing: FunctionComponent = () => {
  return (
    <div className=" bg-[#FFFFF0] -mb-20">
      <div>
        <div className=" flex bg-[#292929] px-10 h-screen flex-col lg:flex-row justify-evenly items-center md:pr-10">
          <div className=" lg:max-w-2xl lg:mr-10 text-center md:text-justify md:-mt-14">
            <h1 className="text-[#29D9FE] text-4xl mb-2 font-abril">
              The Next Tech Lab
            </h1>
            <p className="font-cuprum text-sm md:text-xl md:tracking-wide">
              {DETAILS.ABOUT}
            </p>
          </div>
          <div>
            <picture className="">
              <img src="/ntl.png" alt="ntl" />
            </picture>
          </div>
        </div>
        <div className="flex justify-center -mt-2 md:-mt-28 pb-36 bg-[#292929]">
          <picture>
            <img src="/scroll.png" alt="" className="hover:cursor-pointer" />
          </picture>
        </div>
      </div>

      <div className=" h-96 lg:h-screen bg-[#FFFFF0] -mb-16">
        <div className="flex justify-center">
          <div className=" mx-10 -mt-16 absolute w-11.5/12 bg-[#fffff0] hover:cursor-pointer border-2">
            <h3 className="relative -top-10 text-[#29D9FE] font-abril text-2xl">
              Sublabs
            </h3>
            <div className="md:flex text-[#016FB9] text-xl font-abril pb-10 md:pb-0">
              <Link href="">
                <div className=" flex flex-1 flex-col min-w-0 items-center justify-between md:border-r-2 hover:w-full duration-1000 -mt-8 space-y-14 border-[#016FB9]">
                  <p className="mt-10 font-cuprum px-20">McCarthy</p>
                  <picture className="hidden md:inline">
                    <img src="/mcarthy.png" alt="mccarthyImage" />
                  </picture>
                </div>
              </Link>

              <Link href="">
                <div className=" flex flex-1 flex-col  min-w-0 items-center justify-between md:border-r-2 hover:w-full duration-1000 -mt-8 space-y-14 border-[#016FB9]">
                  <p className="mt-10 font-cuprum">Norman</p>
                  <picture className="hidden md:inline">
                    <img src="/mcarthy.png" alt="normanImage" />
                  </picture>
                </div>
              </Link>

              <Link href="">
                <div className="flex flex-col flex-1 items-center  min-w-0 duration-1000  justify-between md:border-r-2 -mt-8 hover:w-full space-y-14 border-[#016FB9]">
                  <p className="mt-10 font-cuprum">Pausch</p>
                  <picture className="hidden md:inline">
                    <img src="/pausch.png" alt="pauschImage" />
                  </picture>
                </div>
              </Link>
              <Link href="">
                <div className="flex flex-col flex-1 items-center min-w-0 duration-1000  justify-between md:border-r-2 -mt-8 space-y-14 hover:w-full border-[#016FB9]">
                  <p className="mt-10 font-cuprum">Satoshi</p>
                  <picture className="hidden md:inline">
                    <img src="/pausch.png" alt="satoshiImage" />
                  </picture>
                </div>
              </Link>
              <Link href="">
                <div className="flex flex-col flex-1 items-center  min-w-0 -mt-8  duration-1000 justify-between border-[#016FB9] hover:w-full">
                  <p className="mt-10 font-cuprum">Tesla</p>
                  <picture className="hidden md:inline">
                    <img src="/tesla.png" alt="teslaImage" />
                  </picture>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
