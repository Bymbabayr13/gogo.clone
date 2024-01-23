import { Note } from "./icons/Note";
import { Chip } from "./Chip";

export function ContainerTwo({ value }) {
  return (
    <>
      <div className="rounded-md md:w-1/2 bg-slate-100 dark:bg-slate-800 dark:text-slate-200">
        <div className="p-8">
          <p className="my-2 text-xl  dark:text-slate-300">Fiskil</p>
          <p className=" dark:text-slate-300">{value.title}</p>
          <div className="flex gap-2 flex-wrap mt-4 pt-4 md:my-10 ">
            <Chip label={"react"} />
            <Chip label={"next.js"} />
            <Chip label={"TypeScript"} />
            <Chip label={"TailwindCss"} />
            <Chip label={"figma"} />
            <Chip label={"react"} />
            <Chip label={"storyBook"} />
            <Chip label={"cypress"} />
            <Chip label={"git"} />
          </div>
          <div className="mt-4 md:my-8 pb-5">
            <Note />
          </div>
        </div>
      </div>
      <div className=" md:w-1/2 p-8 dark:bg-slate-800  bg-slate-100 rounded-md flex justify-center items-center">
        <img className="" src={value.img} alt="" />
      </div>
    </>
  );
}
