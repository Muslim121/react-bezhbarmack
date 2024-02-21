import React from "react";

function Categories({ value, onClickCategory }) {
  const categories = ["Все", "Казахский", "Татарский", "Муслимский"];
  return (
    <div className="category">
      <ul className="list">
        {categories.map((val, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={value == i ? "active" : "passive"}
          >
            {val}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
