import React from "react";
import Details from "../components/Sublabs/Details";
type Props = {
  syndicates: any;
  members: any;
};

function Lab({ syndicates, members }: Props): JSX.Element {
  // console.log(data);
  console.log(syndicates);
  console.log(members);
  return (
    <div className="bg-[#FFFFF0] text-black">
      <div className="">
        <picture>
          <img className="w-full" src="/sublab.svg" alt="" />
        </picture>
      </div>
      <div className=" bg-[#FFFFF0] ">
        <p className="text-black font-cuprum text-justify px-20 pt-6 font-semibold">
          Pausch Lab for Human-Computer Interactions works on any field of tech
          that is closely related to interactive experiences with machines.
          Domains such as video game design and development, extended reality
          research which includes augmented reality, virtual reality and mixed
          reality, digital arts, 3D modelling, animations, user interface and
          experience design and audio design and engineering all come under this
          umbrella term of HCI. The interactive element of the research and
          development makes work done in this lab both intensive and fun.
          Members may specialise in only one of the aforementioned domains, or
          gain proficiency in some or all of them.
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
                <Details key={key} name={member.name} position="Members" />
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

  const syndicates = allMembers.filter(
    (item: any) => item.position === "syndicate"
  );

  const members = allMembers.filter((item: any) => item.position === "member");

  return {
    props: {
      syndicates,
      members,
    },
  };
}

export default Lab;
