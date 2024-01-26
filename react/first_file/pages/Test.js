import { Counter } from "../components/OtherFile/Counter";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

// function Test() {
//   const [state, setState] = useState(0);
//   const arr = [null, null, null, null, null];

//   function onselect(arrlength) {
//     setState(arrlength);
//   }
//   return (
//     <div className="flex">
//       {arr.map((_, index) => {
//         return (
//           <Stars
//             key={index}
//             select={state < index}
//             onselect={() => onselect(index)}
//           />
//         );
//       })}
//     </div>
//   );
// }
// const Stars = ({ select, onselect }) => {
//   const color = select ? "grey" : "green";
//   return (
//     <FaStar color={color} onClick={onselect} style={{ cursor: "pointer" }} />
//   );
// };

export default Test;
