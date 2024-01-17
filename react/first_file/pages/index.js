import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { About } from "@/components/About";
import { Aside } from "../components/Aside";
import { SectionOne } from "../components/SectionOne";
import { SectionTwo } from "../components/SectionTwo";

export default function Home() {
  return (
    <div className="p-4 bg-slate-500">
      <Header />
      <Main />
      <About />
      <Aside />
      <SectionOne />
      <SectionTwo />
    </div>
  );
}
