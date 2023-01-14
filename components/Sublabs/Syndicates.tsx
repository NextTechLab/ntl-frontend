import React from 'react'
import Image from 'next/image'
import myImage from '../../public/image.png'
import Details from './Details'

function Syndicates() {
  return (
    <div className='flex justify-center items-center md:w-[30%] w-[90%] mx-2 my-5'>
      <div className="">
        <Image src={myImage} alt="image"/>
      </div>
      <Details/>
    </div>
  )
}

export default Syndicates