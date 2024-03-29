import React, { FunctionComponent } from "react"
import Labcards from "./Labcards"
import { TESLA, MCCARTHY, SATOSHI, NORMAN, PAUSCH } from "../../utils/constants"
const Sublabs: FunctionComponent = () => {
  return (
    <div className=" pb-10">
      <h1 className=" font-serif font-semibold pt-10  text-4xl text-center text-[#29D9FE]">
        House of Next Tech
      </h1>
      <div className="flex mx-6 pb-10 lg:mx-28 md:flex-wrap md:flex-row items-center justify-center md:justify-evenly lg:justify-around mt-14 flex-col">
        <Labcards
          image="/mccarthy.jpeg"
          name={MCCARTHY.NAME}
          slug={MCCARTHY.SLUG}
        />
        {/* <Labcards image="/mccarthy.png" name={NORMAN.NAME} slug={NORMAN.SLUG} /> */}
        <Labcards image="/pausch1.jpeg" name={PAUSCH.NAME} slug={PAUSCH.SLUG} />
        <Labcards
          image="/satoshi.jpeg"
          name={SATOSHI.NAME}
          slug={SATOSHI.SLUG}
        />
        <Labcards image="/tesla.jpeg" name={TESLA.NAME} slug={TESLA.SLUG} />
        <Labcards image="/norman.jpeg" name={NORMAN.NAME} slug={NORMAN.SLUG} />
      </div>
    </div>
  )
}

export default Sublabs
