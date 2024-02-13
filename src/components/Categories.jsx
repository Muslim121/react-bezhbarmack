import React from "react";

function Categories() {
  const [category, setCategory] = React.useState(0);

  const categories = [
    "Все",
    "Казахский",
    "Татарский",
    "Муслимский",
    "Фирменный",
    "От мамы",
    "От бабушки",
  ];
  return (
    <div className="category">
      <ul className="list">
        {categories.map((value, i) => (
          <li
            key={i}
            onClick={() => setCategory(i)}
            className={category == i ? "active" : "passive"}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
