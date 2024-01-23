import { Logo } from "./icons/Logo";
import { Menuitems } from "../Data/Menuitems";
import { Menu } from "./icons/Menu";
import { Sun } from "./icons/sun";
import { MenuList } from "./MenuList";

import { PhoneMenu } from "./PhoneMenu";

export function Header() {
  return (
    <div className="flex , justify-between p-4">
      <Logo />
      <div className="hidden gap-2 md:flex">
        <MenuList items={Menuitems} />
        <Sun />
        <a
          className="bg-black , rounded-md text-white p-1 hover:bg-slate-700"
          href="martin.webp"
          download={true}
        >
          Download CV
        </a>
      </div>
      <PhoneMenu value={Menuitems} />
    </div>
  );
}
