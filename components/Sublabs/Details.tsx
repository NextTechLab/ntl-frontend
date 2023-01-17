import React from "react";

function Details(props: any) {
  return (
    <div className=" text-center">
      <div className="">{props.name}</div>
      <div className=" font-semibold">{props.position}</div>
    </div>
  );
}

export default Details;
