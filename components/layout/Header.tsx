import React from 'react'

function Header() {
  return (
    <div className='flex font-roboto items-center justify-end bg-[#016FB9] text-[#E4FF1A] py-1 pr-20 space-x-6'>
        <p>Projects</p>
        <p>Alumni</p>
        <p className=' text-lg text-white'>|</p>
        <p>Instagram</p>
        <p>Twitter</p>
    </div>
  )
}

export default Header