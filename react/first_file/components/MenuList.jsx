import { PhoneMenu } from "./PhoneMenu";
import { Menuitems } from "@/Data/Menuitems";
export function MenuList({ items, className }) {
  return (
    <div className="flex gap-2 ">
      {items.map((item, i) => {
        return (
          <a className={className} href={item.link}>
            {item.label}
          </a>
        );
      })}
      <div></div>
    </div>
  );
}
