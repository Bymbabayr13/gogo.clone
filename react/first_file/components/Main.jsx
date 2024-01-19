import TailwindConfig from "@/tailwind.config";
import { Mandata } from "../Data/Mandata";
import { ManList } from "./ManList";

export function Main() {
  return (
    <div className="md:flex  container mx-auto">
      <ManList item={Mandata} />
    </div>
  );
}
