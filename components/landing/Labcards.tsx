import React, { FunctionComponent } from "react";
interface Labtype {
  name: string;
  image: string;
}

const Labcards: FunctionComponent<Labtype> = ({ name, image }: Labtype) => {
  return (
    <div>
      <div className="lg:mx-6 md:w-80 md:h-96 flex flex-col rounded-xl border-4 lg:mb-24 mb-10 border-[#29D9FE] p-14 pt-16 bg-[#292929]">
        <div className="event-card-master lg:block md:flex md:flex-col md:justify-evenly lg:mt-2 ">
          <div className="-mt-10 image-block justify-center flex mb-3">
            <picture>
              <img src={image} alt="lab-image" />
            </picture>
          </div>
          <h3 className=" text-center md:text-2xl sm:tracking-widest md:tracking-tight font-semibold mb-3">
            {name}
          </h3>
          <div className="flex justify-center pt-4">
            <button className="m-0 border-2 font-WorkSans bg-[#29D9FE] border-blue-200 hover:bg-blue-600 p-2 rounded-xl text-sm">
              <span className=" font-cuprum">View Lab</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Labcards;
