import { Js } from "./icons/Js";
import { TypeScript } from "./icons/TypeScript";
import { React } from "./icons/react";
import { Chip } from "./Chip";

export function Aside() {
  return (
    <div className=" mt-24 ">
      <div className="flex justify-center">
        <Chip label={"Skill"} />
      </div>
      <div className="flex justify-center mt-8">
        <p>The skills, tools and technologies I am really good at:</p>
      </div>
      <div className="flex justify-between flex-wrap gap-8 mt-10">
        <Js />
        <TypeScript />
        <React />
        <Js />
        <TypeScript />
        <React />
        <Js />
        <TypeScript />
        <React />
        <Js />
        <TypeScript />
        <React />
        <Js />
        <TypeScript />
        <React />
      </div>
    </div>
  );
}
