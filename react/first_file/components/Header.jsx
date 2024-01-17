import { Logo } from "./icons/Logo";
import { Menu } from "./icons/Menu";
import { Sun } from "./icons/sun";
import { MenuItem } from "./MenuItem";
export function Header() {
  const menuItems = [
    { label: "about", link: "/about" },
    { label: "work", link: "/work" },
    { label: "destination", link: "/destination" },
    { label: "contact", link: "/contact" },
  ];
  return (
    <div className="flex , justify-between p-4">
      <Logo />
      <div className="hidden gap-2 md:flex">
        <MenuItem items={menuItems} />
        <Sun />
        <div className="bg-black , rounded-md text-white p-1">
          <p>Download CV</p>
        </div>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
    </div>
  );
}
