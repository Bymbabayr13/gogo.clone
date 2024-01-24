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
        <div className="rounded-md md:w-1/2 bg-slate-100 dark:bg-slate-800 dark:text-slate-200">
          <ContainerTwo value={Work} />
        </div>
        <div className=" md:w-1/2 p-8 dark:bg-slate-800  bg-slate-100 rounded-md flex justify-center items-center">
          <img className="" src="Picture.png" alt="" />
        </div>
      </div>
      <div className=" flex my-10 flex-col justify-items-stretch items-stretch gap-2  md:flex-row ">
        <div className=" md:w-1/2 p-8 dark:bg-slate-800  bg-slate-100 rounded-md flex justify-center items-center">
          <img className="" src="Picture.png" alt="" />
        </div>
        <div className="rounded-md md:w-1/2 bg-slate-100 dark:bg-slate-800 dark:text-slate-200">
          <ContainerTwo value={Work} />
        </div>
      </div>
      <div className="flex my-10 flex-col justify-items-stretch items-stretch gap-2 md:flex-row ">
        <div className="rounded-md md:w-1/2 bg-slate-100 dark:bg-slate-800 dark:text-slate-200">
          <ContainerTwo value={Work} />
        </div>
        <div className=" md:w-1/2 p-8 dark:bg-slate-800  bg-slate-100 rounded-md flex justify-center items-center">
          <img className="" src="Picture.png" alt="" />
        </div>
      </div>
    </div>
  );
}
