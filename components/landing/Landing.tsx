import React, { FunctionComponent } from "react";
import { DETAILS } from "../../utils/constants";
import "pure-react-carousel/dist/react-carousel.es.css";
import Sublabs from "./Sublabs";
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
      </div>
      <Sublabs />
    </div>
  );
};

export default Landing;
