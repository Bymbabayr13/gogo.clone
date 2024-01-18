import { Note } from "./icons/Note";
import { Chip } from "./Chip";
export function ContainerTwo() {
  return (
    <div className="rounded-md md:w-1/2 bg-slate-100">
      <div className="p-8">
        <p className="my-2 text-xl  dark:text-black">Fiskil</p>
        <p className=" dark:text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
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
  );
}
