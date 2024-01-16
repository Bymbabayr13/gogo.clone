import TailwindConfig from "@/tailwind.config";
import { Cat } from "./icons/Cat";
import { Figma } from "./icons/Figma";
import { Twitter } from "./icons/Twitter";

export function Main() {
  return (
    <div className="md:flex  container mx-auto">
      <img
        style={{ boxShadow: "1px 25px 16px 23px rgba(0,0,0,0.57)" }}
        className="m-auto w-3/6 m-12 order-2 md:1/3"
        src="Pic.png"
      ></img>
      <div className="md:pr-20 ">
        <h1 className="mt-24 md:mt-0 text-4xl py-4 order-1">
          Hi, I’m Sagar 👋
        </h1>
        <p>
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
        <div className="flex gap-2 mb-2 mt-3">
          <img src="location.png" alt="location" />
          <p>Ahmedabad, India</p>
        </div>
        <div className="flex gap-2">
          <div className="bg-green-600 w-4 h-4 rounded-lg pl-3 p-auto"></div>
          <p>Available for new projects</p>
        </div>
        <div className="flex gap-3 mt-8">
          <Cat />
          <Twitter />
          <Figma />
        </div>
      </div>
    </div>
  );
}
