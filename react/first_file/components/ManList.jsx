import { Cat } from "./icons/Cat";
import { Figma } from "./icons/Figma";
import { Twitter } from "./icons/Twitter";
export function ManList({ item }) {
  return (
    <>
      <img
        style={{ boxShadow: "1px 25px 16px 23px rgba(0,0,0,0.57)" }}
        className="m-auto w-3/6 m-12 order-2 md:1/3"
        src={item.image}
      />

      <div className="md:pr-20 ">
        <h1 className="mt-24 md:mt-0 text-4xl py-4 order-1">{item.name}</h1>
        <p>{item.story}</p>
        <div className="flex gap-2 mb-2 mt-3">
          <img src="location.png" alt="location" />
          <p>{item.location}</p>
        </div>
        <div className="flex gap-2">
          <div className="bg-green-600 w-4 h-4 rounded-lg pl-3 p-auto"></div>
          <p>{item.status}</p>
        </div>
        <div className="flex gap-3 mt-8">
          <Cat />
          <Twitter />
          <Figma />
        </div>
      </div>
    </>
  );
}
