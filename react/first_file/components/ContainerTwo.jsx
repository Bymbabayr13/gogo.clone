import { Note } from "./icons/Note";
import { Chip } from "./Chip";
export function ContainerTwo() {
  return (
    <div className="rounded-md bg-slate-100">
      <div className="p-8">
        <p className="my-2 text-xl">Fiskil</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
        <div className="flex gap-2 flex-wrap mt-4">
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
        <div className="mt-4">
          <Note />
        </div>
      </div>
    </div>
  );
}
