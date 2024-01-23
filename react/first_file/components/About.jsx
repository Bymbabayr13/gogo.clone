import { Chip } from "./Chip";
import { AboutList } from "./AboutList";
import { Aboutdata } from "../Data/Aboutdata";

export function About() {
  return (
    <div className="container mx-auto ">
      <div className=" mt-40  ">
        <div className="flex justify-center">
          <Chip label={"About me"} />
        </div>
        <AboutList item={Aboutdata} />
      </div>
    </div>
  );
}
