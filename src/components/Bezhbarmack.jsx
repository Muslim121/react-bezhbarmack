import React from "react";

function Bezhbarmack({ title, imageUrl, types, sizes, price }) {
  const [type, setType] = React.useState(0);
  const [size, setSize] = React.useState(0);

  const typesName = ["традиционный", "фирменный"];

  const [index, setIndex] = React.useState(0);

  const OnClickIndex = () => {
    setIndex(index + 1);
  };

  return (
    <div className="bezh">
      <img src={imageUrl} alt="bezhbarmak" className="image" />
      <h3 id="title-bezh">{title}</h3>
      <div className="bezh-block">
        <ul className="list-popup flexx">
          {types.map((typeId) => (
            <li
              id="list-type"
              key={typeId}
              onClick={() => setType(typeId)}
              className={type == typeId ? "active" : "passive"}
            >
              {typesName[typeId]}
            </li>
          ))}
        </ul>
        <ul className="list-popup flexx">
          {sizes.map((sizes, i) => (
            <li
              id="list-size"
              key={i}
              onClick={() => setSize(i)}
              className={size == i ? "active" : "passive"}
            >
              {sizes}
            </li>
          ))}
        </ul>
      </div>
      <div className="bezh-block-bottom flex-align">
        <h3 id="price">от {price} ₽</h3>
        <div className="button">
          <p className="but flex-align" onClick={() => OnClickIndex()}>
            Добавить<div className="chet"> {index}</div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bezhbarmack;
