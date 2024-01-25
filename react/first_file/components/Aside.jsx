import { Js } from "./icons/Js";
import { TypeScript } from "./icons/TypeScript";
import { React } from "./icons/React";
import { Chip } from "./Chip";
import { Nextjs } from "./icons/Nextjs";
import { Node } from "./icons/Node";
import { Express } from "./icons/Express";
import { Nest } from "./icons/Nest";
import { Postgre } from "./icons/Postgre";
import { MongoDb } from "./icons/MongoDb";
import { SassScss } from "./icons/SassScss";
import { TailwindCss } from "./icons/TailwindCss";
import { FigmaImg } from "./icons/FigmaImg";
import { Cypress } from "./icons/Cypress";
import { StoryBook } from "./icons/StoryBook";
import { Git } from "./icons/Git";

export function Aside() {
  return (
    <div className=" mt-24  container mx-auto">
      <div className="flex justify-center">
        <Chip label={"Skill"} />
      </div>
      <div className="flex justify-center mt-8">
        <p>The skills, tools and technologies I am really good at:</p>
      </div>
      <div className="flex   justify-center md:justify-normal flex-wrap gap-9 mt-10">
        <Js />
        <TypeScript />
        <React />
        <Node />
        <Express />
        <Nest />
        <Postgre />
        <MongoDb />
        <SassScss />
        <FigmaImg />
        <Cypress />
        <StoryBook />
        <Git />
      </div>
    </div>
  );
}
