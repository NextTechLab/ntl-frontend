import React, { FunctionComponent } from 'react'
import Details from './Details'
// interface detailsType{
//   name:String;
//   domName:String;
//   deptName:String;
//   yearOfStudy:String;
// }

const Memebrs:FunctionComponent=()=> {
  return (
    <div className='flex justify-center items-center md:w-[15%] w-[45%] mx-2 my-5'>
      
      <div className=""><Details/></div>
      
    </div>
  )
}

export default Memebrs

// {name,domName,deptName,yearOfStudy}:detailsType