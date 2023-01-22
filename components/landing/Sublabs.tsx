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
      <h1 className=" font-serif font-semibold pt-10  text-4xl text-center text-[#29D9FE]">
        Sublabs
      </h1>
      <div className="flex mx-6 pb-10 lg:mx-28 md:flex-wrap md:flex-row items-center justify-center md:justify-evenly lg:justify-around mt-14 flex-col">
        <Labcards image="/ntl.png" name={MCCARTHY.NAME} slug={MCCARTHY.SLUG} />
        {/* <Labcards image="/mccarthy.png" name={NORMAN.NAME} slug={NORMAN.SLUG} /> */}
        <Labcards image="/ntl.png" name={PAUSCH.NAME} slug={PAUSCH.SLUG} />
        <Labcards image="/ntl.png" name={SATOSHI.NAME} slug={SATOSHI.SLUG} />
        <Labcards image="/ntl.png" name={TESLA.NAME} slug={TESLA.SLUG} />
      </div>
    </div>
  );
};

export default Sublabs;
