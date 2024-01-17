export function MenuItem({ items }) {
  console.log(items);
  return (
    <div className="flex ">
      <div className="mx-2">
        <a className="" href={items[0].link}>
          {items[0].label}
        </a>
      </div>
      <div className="mx-2">
        <a className="" href={items[1].link}>
          {items[1].label}
        </a>
      </div>
      <div className="mx-2">
        <a className="" href={items[2].link}>
          {items[2].label}
        </a>
      </div>
      <div className="mx-2">
        <a className="" href={items[3].link}>
          {items[3].label}
        </a>
      </div>
    </div>
  );
}
