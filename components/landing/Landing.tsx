import React from 'react'

function Landing() {
  return (
    <div className=' bg-[#FFFFF0] -mb-20'>
      <div>
        <div className=' flex bg-[#292929] px-10 h-screen flex-col lg:space-x-16 md:flex-row justify-evenly items-center md:pr-10'>
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
            <div className='flex justify-center '>
              
              <div className=' border-2 border-[#29d9fe] h-5/6 mx-10 -mt-16 absolute w-11/12 bg-[#fffff0]'>
              <h3 className='relative -top-10 text-[#29D9FE] font-abril text-2xl'>Sublabs</h3>
              <div className='flex justify-around text-[#016FB9] text-xl font-abril'>
              <div className=' '>McCarthy</div>
              <div className=' '>Pausch</div>
              <div className=' '>Satoshi</div>
              <div className=' '>Tesla</div>
              </div>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Landing