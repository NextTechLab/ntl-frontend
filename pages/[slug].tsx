import React from "react";
import Details from "../components/Sublabs/Details";
type Props = {
  syndicates: any;
  members: any;
  about: any;
};

function Lab({ syndicates, members, about }: Props): JSX.Element {
  // console.log(data);
  //   console.log(syndicates);
  //   console.log(members);
  return (
    <div className="bg-[#FFFFF0] text-black">
      <div className="">
        <picture>
          <img className="w-full" src="/sublab.svg" alt="" />
        </picture>
      </div>
      <div className=" bg-[#FFFFF0] ">
        <p className="text-black font-cuprum text-justify px-10 md:px-16 lg:px-20 pt-6 font-semibold">
          {about}
        </p>
        <p className="pl-20 pt-4 font-medium text-lg text-[#016FB9]">
          2022-2023
        </p>
      </div>

      <div className=" ">
        {/* <Title title="Syndicates" /> */}
        <div className="flex flex-wrap justify-center">
          {syndicates.map(function (syndicate: any, key: any) {
            return (
              <div
                key={key}
                className="flex justify-center items-center w-40 h-20 mx-2 my-5 p-10"
              >
                <Details key={key} name={syndicate.name} position="Syndicate" />
              </div>
            );
          })}
        </div>

        {/* <Title title="Members" /> */}
        <div className=" text-center flex flex-wrap justify-center">
          {members.map(function (member: any, key: any) {
            return (
              <div
                key={key}
                className="flex justify-center items-center p-4 w-40 h-20 mx-2 my-5"
              >
                <Details key={key} name={member.name} position="Member" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Fetching data from the JSON file
import fsPromises from "fs/promises";
import path from "path";
export async function getServerSideProps(context: any) {
  const filePath = path.join(process.cwd(), "utils/Data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());
  const data = objectData.data.filter((item: any) => {
    return item.lab === context.params.slug;
  });
  const allMembers = data[0].members;
  const about = data[0].about;
  const syndicates = allMembers.filter(
    (item: any) => item.position === "syndicate"
  );

  const members = allMembers.filter((item: any) => item.position === "member");

  return {
    props: {
      syndicates,
      about,
      members,
    },
  };
}

export default Lab;
