import React from "react";

function MembersDescription(props:any) {
  return (
    <div className=" ml-5 text-lg">
      <div className="">{props.name}</div>
      <div className="">{props.position}</div>
    </div>
  );
}

export default MembersDescription;
