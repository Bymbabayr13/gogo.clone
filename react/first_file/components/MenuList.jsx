export function MenuList({ items }) {
  return (
    <div className="flex gap-2 ">
      {items.map((item, i) => {
        return (
          <a className="" href={item.link}>
            {item.label}
          </a>
        );
      })}
    </div>
  );
}
