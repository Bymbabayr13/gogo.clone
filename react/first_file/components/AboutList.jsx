export function AboutList({ item }) {
  return (
    <div className="md:flex justify-center justify-between mt-16 gap-8">
      <img
        style={{ boxShadow: "1px 22px 8px 18px rgba(0,0,0,0.43)" }}
        className=" md:w-2/5 h-50 md:h-80 w-4/6 mx-auto "
        src="martin.webp"
      ></img>
      <div className="mt-20  md:mt-0  flex flex-col gap-3">
        <p className="text-2xl">{item.sec1}</p>
        <p>{item.sec2}</p>
        <p>{item.sec3}</p>
        <p>{item.sec4}</p>
        <p>{item.sec5}</p>
      </div>
    </div>
  );
}
