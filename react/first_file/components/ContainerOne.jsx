export function ContainerOne({ value }) {
  return (
    <div className="p-8 dark:bg-slate-800 dark:text-slate-300 bg-slate-50 mb-12 rounded-md">
      <div className="md:flex flex-row justify-between  dark:text-white ">
        <div className="">
          <img src={value.img}></img>
        </div>
        <div className="my-4 md:my-0 md:order-2 ">{value.day}</div>
        <div className="w-3/5  dark:text-slate-300">
          <h1>{value.who}</h1>

          <p className="order-1">{value.about}</p>
        </div>
      </div>
    </div>
  );
}
