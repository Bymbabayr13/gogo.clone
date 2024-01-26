export const { useState } = require("react");

export function Counter() {
  const [render, setRender] = useState();

  const button = (event) => {
    setRender(event.target.value);
  };
  return (
    <div className="">
      <div>
        <h1>todo list</h1>
      </div>
      <div>{render}</div>
      <div className="flex">
        <input
          type="text"
          id="render"
          value={render}
          className="border-red-800"
          placeholder="text"
        />
        <button className="bg-green-800" onClick={button}>
          add
        </button>
      </div>
    </div>
  );
}
