import React from 'react'
import Memebrs from '../../components/Sublabs/Memebrs'
import Syndicates from '../../components/Sublabs/Syndicates'
import Title from '../../components/Sublabs/Title'

function sublab() {
  return (
    <div className='bg-[#FFFFF0] text-black'>
        <div className=' w-screen'>
            <picture >
                <img className='w-full' src="/sublab.svg" alt="" />
            </picture>
        </div>
        <div className=' bg-[#FFFFF0] '>
            <p className='text-black font-cuprum text-justify px-20 pt-6 font-semibold'>Pausch Lab for Human-Computer Interactions works on any field of tech that is closely related to interactive experiences with machines. Domains such as video game design and development, extended reality research which includes augmented reality, virtual reality and mixed reality, digital arts, 3D modelling, animations, user interface and experience design and audio design and engineering all come under this umbrella term of HCI. The interactive element of the research and development makes work done in this lab both intensive and fun. Members may specialise in only one of the aforementioned domains, or gain proficiency in some or all of them.</p>
            <p className='pl-20 pt-4 font-medium text-lg text-[#016FB9]'>2022-2023</p>
        </div>

        <div className=" ">
          <Title title="Syndicates"/>
          <div className="flex flex-wrap">
            <Syndicates/>
            <Syndicates/>
            <Syndicates/>
          </div>

          <Title title= "Members"/>
          <div className="flex flex-wrap">
            <Memebrs/>
            <Memebrs/>
            <Memebrs/>
            <Memebrs/>
            <Memebrs/>
            <Memebrs/>
            <Memebrs/>
            <Memebrs/>
            <Memebrs/>
          </div>
          
        </div>
    </div>
  )
}

export default sublab