import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../redux/Slices/filterSlice";

function Sort({ value, OnClickSort }) {
  const dispatch = useDispatch();
  const sorting = useSelector((state) => state.filter.sort);

  const sortElements = [
    { name: "популярности DESC", sort: "-rating" },
    { name: "популярности ASC", sort: "rating" },
    { name: "цене DESC", sort: "-price" },
    { name: "цене ASC", sort: "price" },
    { name: "алфавиту DESC", sort: "-title" },
    { name: "алфавиту ASC", sort: "title" },
  ];

  const [open, setOpen] = React.useState(false);

  const onSelect = (obj) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  return (
    <div>
      <div className="flex-align sort">
        <p id="sortirovka">Сортировка по:</p>
        <span onClick={() => setOpen(!open)} className="sort-element">
          {sorting.name}
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
                  className={sorting.sort == obj.sort ? "active" : "passiv"}
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
