import { Duplicate } from "./icons/Duplicate";
import { Phone } from "./icons/Phone";
import { Chip } from "@/components/Chip";
import { Cat } from "./icons/Cat";
import { Figma } from "./icons/Figma";
import { Twitter } from "./icons/Twitter";

export function Footer() {
  return (
    <>
      <div className="flex justify-center mt-20 ">
        <Chip label={"Get in Touch"} />
      </div>
      <div className="flex flex-col items-center mt-4 ">
        <p>
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
        <div className=" flex mt-3">
          <Duplicate />
          <p className="mx-3">reachsagarshah@gmail.com</p>
          <Duplicate />
        </div>
        <div className="flex gap-2">
          <Phone />
          <p>You may also find me on these platforms!</p>
          <Duplicate />
        </div>
        <div className="flex gap-2">
          <Cat />
          <Twitter />
          <Figma />
        </div>
      </div>
    </>
  );
}
