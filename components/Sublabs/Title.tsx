import React, { FunctionComponent } from 'react'

interface titleType {
  title: string;
};

const Title:FunctionComponent<titleType>=({title}:titleType) =>{
  return (
    <div className=' text-[#29D9FE] w-full flex justify-center items-center text-3xl font-bold my-2'>
      {title}
    </div>
  )
}

export default Title