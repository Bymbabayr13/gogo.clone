import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { About } from "@/components/About";
export default function Home() {
  return (
    <body>
      <div className="p-4">
        <Header />
        <Main />
        <About />
      </div>
    </body>
  );
}
