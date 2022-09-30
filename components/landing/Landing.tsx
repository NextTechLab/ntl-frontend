import React from 'react'

function Landing() {
  return (
    <div className=' bg-[#FFFFF0] -mb-20'>
      <div>
        <div className=' flex bg-[#292929] px-10 h-screen flex-col md:flex-row justify-evenly items-center md:pr-10'>
             <div className=' lg:max-w-4xl text-center md:text-justify md:-mt-14'>
                <h1 className='text-[#29D9FE] text-4xl mb-2 font-abril'>The Next Tech Lab</h1>
                <p className='font-cuprum text-sm md:text-xl md:tracking-wide'>SRM NextTechLab is a multidisciplinary student-led research and development lab. It is divided into 4 divisions, each specializing in their respective domains covering the spectrum of engineering and science. “The Lab” is a safe haven for it’s members to experiment and learn from others and with others. The Lab provides a self motivated environment which enables its members to continously grow and explore new aspects of their interests or something entirely different to their prior interests.</p>
             </div>
             <div>
                <picture>
                    <img src="/ntl.png" alt="ntl" />
                </picture>
             </div>
        </div>
        <div className='flex justify-center -mt-2 md:-mt-28 pb-36 bg-[#292929]'>
          <picture>
            <img src="/scroll.png" alt="" className='hover:cursor-pointer' />
          </picture>
        </div>
      </div>
      
      <div className=' h-screen bg-[#FFFFF0] -mb-16'>
            <div className='flex justify-center'>
              
              <div className=' h-1/3 mx-10 -mt-16 absolute w-11.5/12 bg-[#fffff0] hover:cursor-pointer'>
              <h3 className='relative -top-10 text-[#29D9FE] font-abril text-2xl'>Sublabs</h3>
              <div className='flex text-[#016FB9] text-xl font-abril'>
              <div className=' flex flex-1 flex-col hover:flex-[10] hover:border-4 min-w-0 items-center justify-between border-r-2 hover:w-full duration-1000 -mt-8 space-y-14 border-[#016FB9]'>
                <p className='mt-10 font-cuprum'>McCarthy</p>
                <picture className=''>
                  <img src="/mcarthy.png" alt="" />
                </picture>
              </div>
              <div className='flex flex-col flex-1 items-center hover:flex-[10] min-w-0 duration-1000 hover:border-4 justify-between border-r-2 -mt-8 hover:w-full space-y-14 border-[#016FB9]'>
                <p className='mt-10 font-cuprum'>Pausch</p>
                <picture>
                  <img src="/pausch.png" alt="" />
                </picture>
              </div>
              <div className='flex flex-col flex-1 items-center hover:flex-[10] min-w-0 duration-1000 hover:border-4 justify-between border-r-2 -mt-8 space-y-14 hover:w-full border-[#016FB9]'>
                <p className='mt-10 font-cuprum'>Satoshi</p>
                <picture>
                  <img src="/pausch.png" alt="" />
                </picture>
              </div>
              <div className='flex flex-col flex-1 items-center hover:flex-[10] min-w-0 -mt-8 hover:border-4 duration-1000 justify-between border-[#016FB9] hover:w-full'>
                <p className='mt-10 font-cuprum' >Tesla</p>
                <picture>
                  <img src="/tesla.png" alt="" />
                </picture>
              </div>
              </div>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Landing