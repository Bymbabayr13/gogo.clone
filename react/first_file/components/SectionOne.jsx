import { ContainerOne } from "./ContainerOne";
import { Chip } from "./Chip";
import { Experience } from "@/Data/Experience";
export function SectionOne() {
  return (
    <div>
      <div className="flex justify-center mt-40 ">
        <Chip label={"Experience"} />
      </div>
      <p className="text-center mt-4 mb-10">
        Here is a quick summary of my most recent experiences:
      </p>
      <ContainerOne value={Experience} />
    </div>
  );
}
