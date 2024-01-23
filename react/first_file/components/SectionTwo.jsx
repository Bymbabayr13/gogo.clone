import { Chip } from "./Chip";
import { ContainerTwo } from "./ContainerTwo";
import { Work } from "@/Data/Work";
export function SectionTwo() {
  return (
    <div className="dark:text-slate-200">
      <div className="flex justify-center my-10">
        <Chip label={"Work"} />
      </div>
      <p className="text-center mt-4 mb-10 ">
        Here is a quick summary of my most recent experiences:
      </p>
      <div className="flex flex-col justify-items-stretch items-stretch gap-2 md:flex-row my-10">
        <ContainerTwo value={Work} />
      </div>
      <div className=" flex my-10 flex-col justify-items-stretch items-stretch gap-2  md:flex-row ">
        <ContainerTwo value={Work} />
      </div>
      <div className="flex my-10 flex-col justify-items-stretch items-stretch gap-2 md:flex-row ">
        <ContainerTwo value={Work} />
      </div>
    </div>
  );
}
