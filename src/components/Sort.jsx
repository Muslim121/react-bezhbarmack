import React from "react";

function Sort({ value, OnClickSort }) {
  const sortElements = [
    { name: "популярности DESC", sort: "-rating" },
    { name: "популярности ASC", sort: "rating" },
    { name: "цене DESC", sort: "-price" },
    { name: "цене ASC", sort: "price" },
    { name: "алфавиту DESC", sort: "-title" },
    { name: "алфавиту ASC", sort: "title" },
  ];

  const [open, setOpen] = React.useState(false);

  const onSelect = (i) => {
    OnClickSort(i);
    setOpen(false);
  };

  return (
    <div>
      <div className="flex-align sort">
        <p id="sortirovka">Сортировка по:</p>
        <span onClick={() => setOpen(!open)} className="sort-element">
          {value.name}
        </span>
      </div>
      <div>
        {open && (
          <div className="sort-popup">
            <ul className="list-popup">
              {sortElements.map((obj, i) => (
                <li
                  id="li-popup"
                  onClick={() => onSelect(obj)}
                  key={i}
                  className={value.sort == obj.sort ? "active" : "passiv"}
                >
                  {obj.name}
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
