import React, { FunctionComponent } from "react";
import Labcards from "./Labcards";
import {
  TESLA,
  MCCARTHY,
  SATOSHI,
  NORMAN,
  PAUSCH,
} from "../../utils/constants";
const Sublabs: FunctionComponent = () => {
  return (
    <div className=" pb-10">
      <h1 className=" font-abril pt-10  text-3xl text-center text-[#29D9FE]">
        Sublabs
      </h1>
      <div className="flex mx-6 pb-10 lg:mx-28 md:flex-wrap md:flex-row items-center justify-center md:justify-evenly lg:justify-around mt-14 flex-col">
        <Labcards image="/mccarthy.png" name={MCCARTHY.NAME} />
        <Labcards image="/norman.png" name={NORMAN.NAME} />
        <Labcards image="/pausch.png" name={PAUSCH.NAME} />
        <Labcards image="/satoshi.png" name={SATOSHI.NAME} />
        <Labcards image="/tesla.png" name={TESLA.NAME} />
      </div>
    </div>
  );
};

export default Sublabs;
