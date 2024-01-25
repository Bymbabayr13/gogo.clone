import { Logo } from "./icons/Logo";
import { Close } from "./icons/Close";
import { useState } from "react";
import { Menu } from "./icons/Menu";
import { ThemeMode } from "./ThemeMode";
export function PhoneMenu({ value }) {
  const [visible, setVisible] = useState(false);
  function OpenMenu() {
    setVisible(true);
  }
  function CloseMenu() {
    setVisible(false);
  }
  return (
    <>
      <div className="md:hidden" onClick={OpenMenu}>
        <Menu />
      </div>

      {visible && <div className="fixed inset-0 "></div>}
      <div
        className={`fixed bottom-0 top-0  transition-all p-8 w-full bg-white dark:bg-black ${
          visible ? "right-0" : "-right-full"
        }`}
      >
        <div className="flex justify-between dark:text-white   ">
          <Logo />
          <button onClick={CloseMenu}>
            <Close />
          </button>
        </div>
        <div>
          <div className="flex flex-col gap-4 text-2xl mt-4">
            <h1>{value[0].label}</h1>
            <h1>{value[1].label}</h1>
            <h1>{value[2].label}</h1>
            <h1>{value[3].label}</h1>
          </div>
          <div className="bg-slate-500 h-[1px] my-8"></div>
          <div className="flex justify-between">
            <h1 className="my-7 text-2xl">Switch Them</h1>
            <div className="flex items-center">
              <ThemeMode />
            </div>
          </div>
          <a
            className="bg-black text-white dark:bg-white dark:text-black flex justify-center rounded-md text-black p-1 hover:bg-slate-300 text-xl mt-4"
            href="martin.webp"
            download={true}
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
}
