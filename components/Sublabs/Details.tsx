import { Github, Linkedin } from "lucide-react";
import React from "react";

function Details(props: any) {
  return (
    <div className="text-center">
      <div className="">{props.name}</div>
      <div className=" font-semibold">{props.position}</div>
      <div className="flex justify-center items-center gap-2 mt-1">
      <a href={props.github ?? null} target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
        <a href={props.linkedin ?? null} target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
      </div>
    </div>
  );
}

export default Details;
