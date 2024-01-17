import { Chip } from "./Chip";
import { ContainerTwo } from "./ContainerTwo";
export function SectionTwo() {
  return (
    <div>
      <div className="flex justify-center">
        <Chip label={"Work"} />
      </div>
      <p className="text-center mt-4 mb-10">
        Here is a quick summary of my most recent experiences:
      </p>
      <div className="flex flex-col gap-2 md:flex-row ">
        <div className=" md:w-1/2 p-8  bg-slate-100 rounded-md flex justify-center items-center">
          <img className="" src="Picture.png" alt="" />
        </div>
        <div className=" md:w-1/2">
          <ContainerTwo />
        </div>
      </div>
    </div>
  );
}
