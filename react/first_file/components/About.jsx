import { Chip } from "./Chip";
import { AboutList } from "./AboutList";
import { Aboutdata } from "../../Data/Aboutdata";

export function About() {
  return (
    <div className="container mx-auto ">
      <div className="flex-inline justify-center mt-40 ">
        <Chip label={"About me"} />
        <AboutList item={Aboutdata} />
      </div>
    </div>
  );
}
