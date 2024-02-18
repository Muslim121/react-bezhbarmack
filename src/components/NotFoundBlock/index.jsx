import React from "react";
import style from "./NotFoundBlock.module.css";

const NotFoundBlock = () => {
  return (
    <div className={style.root}>
      <h1>
        <span className={style.span}>😕</span>
        <br />
        <h1>Ничего не найдено</h1>
      </h1>
      <p className={style.description}>
        К сожалению данная страница отсутствует на нашем интернет-магазине
      </p>
    </div>
  );
};

export default NotFoundBlock;
