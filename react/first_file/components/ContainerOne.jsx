import { Upwork } from "@/components/Upwork";
export function ContainerOne({ value }) {
  return value.map((item, index) => {
    return (
      <div className="p-8 dark:bg-slate-800 dark:text-slate-300 bg-slate-50 mb-12 rounded-md">
        <div className="md:flex flex-row justify-between  dark:text-white ">
          <div className="">
            <Upwork />
          </div>
          <div className="my-4 md:my-0 md:order-2 ">{item.who}</div>
          <div className="w-3/5  dark:text-slate-300">
            <h1>{item.about}</h1>

            <ul className="order-1">
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    );
  });
}
