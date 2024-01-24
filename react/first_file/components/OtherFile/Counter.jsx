export const { useState } = require("react");

export function Counter() {
  let [click, setClick] = useState(true);
  function Nock() {
    if ((click = true)) {
      setClick(false);
    } else {
      setClick(true);
    }
  }
  return (
    <div>
      <button
        className={`w-10 rounded-md ${click ? " bg-green-800" : "bg-red-800"}`}
        onClick={Nock}
      >
        {click ? "on" : "off"}
      </button>
    </div>
  );
}
