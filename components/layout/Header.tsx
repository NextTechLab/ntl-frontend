import React from 'react'

function Header() {
  return (
    <div className='flex font-roboto items-center justify-end bg-[#016FB9] text-[#E4FF1A] py-1 pr-20 space-x-6'>
        <p className='hover:cursor-pointer'>Projects</p>
        <p className='hover:cursor-pointer'>Alumni</p>
        <p className=' text-lg text-white'>|</p>
        <p className='hover:cursor-pointer'>Instagram</p>
        <p className='hover:cursor-pointer'>Twitter</p>
    </div>
  )
}

export default Header