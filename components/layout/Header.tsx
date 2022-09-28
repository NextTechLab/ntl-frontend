import React from 'react'
import Link from 'next/link'
function Header() {
  return (
    <div className='flex font-roboto items-center justify-end bg-[#016FB9] text-[#E4FF1A] py-1 pr-20 space-x-6'>
        <p className='hover:cursor-pointer'>Projects</p>
        <p className='hover:cursor-pointer'>Alumni</p>
        <p className=' text-lg text-white'>|</p>
        <Link href="https://www.instagram.com/nexttechlab/?hl=en"><p className='hover:cursor-pointer'>Instagram</p></Link>
        <Link href="https://twitter.com/nexttechlab"><p className='hover:cursor-pointer'>Twitter</p></Link>
    </div>
  )
}

export default Header