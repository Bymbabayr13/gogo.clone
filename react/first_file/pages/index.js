import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { About } from "@/components/About";
import { Aside } from "../components/Aside";
import { SectionOne } from "../components/SectionOne";
import { SectionTwo } from "../components/SectionTwo";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <>
      <div className="p-4 dark:bg-slate-900 dark:text-slate-300">
        <Header />
        <Main />
        <About />
        <Aside />
        <SectionOne />
        <SectionTwo />
        <Footer />
      </div>
      <div className=" flex items-end w-full h-14   justify-center dark: bg-black dark:text-slate-300 py-4">
        2023 | Designed and coded with ❤️️ by Sagar Shah
      </div>
    </>
  );
}
