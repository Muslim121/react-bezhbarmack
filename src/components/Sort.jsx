import React from "react";

function Sort() {
  const sortElements = ["популярности", "цене", "алфавиту"];

  const [sorting, setSorting] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const onSelect = (i) => {
    setSorting(i);
    setOpen(false);
  };

  return (
    <div>
      <div className="flex-align sort">
        <p id="sortirovka">Сортировка по:</p>
        <span onClick={() => setOpen(!open)} className="sort-element">
          {sortElements[sorting]}
        </span>
      </div>
      <div>
        {open && (
          <div className="sort-popup">
            <ul className="list-popup">
              {sortElements.map((value, i) => (
                <li
                  id="li-popup"
                  onClick={() => onSelect(i)}
                  key={i}
                  className={sorting == i ? "active" : "passiv"}
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sort;
