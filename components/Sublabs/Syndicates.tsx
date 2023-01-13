import React from 'react'
import Image from 'next/image'
import myImage from '../../public/image.png'

function Syndicates() {
  return (
    <div className='flex justify-center items-center md:w-[30%] w-[90%] mx-2 my-5'>
      <div className="">
        <Image src={myImage} alt="image"/>
      </div>
      <div className=" ml-5 text-lg">
        <div className="">John Doe</div>
        <div className="">Domain name</div>
        <div className="">Department name</div>
        <div className="">year of study</div>
      </div>
    </div>
  )
}

export default Syndicates