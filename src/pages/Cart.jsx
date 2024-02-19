import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { Link, Links } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.cart_all}>
      <div className={styles.cart_space}>
        <div className={styles.cart}>
          <FaShoppingCart className="cart-icon" />
          <h2>Корзина</h2>
        </div>
        <div className={styles.cart_right}>
          <FaRegTrashAlt className={styles.cart_icon} />
          <span>Очистить корзину</span>
        </div>
      </div>
      <div>
        <div className={styles.bezhbarmack_cart}>
          <img
            src="https://storage.emenu.delivery/product/images/7r/de/7rdenprfsx1sujgkxmcmfmske5nwbw-e.jpg"
            alt="bezhbarmack"
            className={styles.img_cart}
          />
          <div className={styles.start_title}>
            <h3>Бежбармак классический</h3>
            <p className={styles.text_down}>тонкое тесто, 26см</p>
          </div>
          <div className={styles.button_add}>
            <p className={styles.add}>-</p>
            <p>2</p>
            <p className={styles.add}>+</p>
          </div>
          <p className={styles.price}>770 ₽</p>
          <MdCancel className={styles.cancel} />
        </div>
        <div className={styles.all}>
          <h3>
            Всего <b>1шт</b>
          </h3>
          <h3>
            Сумма заказа: <b>770 ₽</b>
          </h3>
        </div>
        <div className={styles.last}>
          <Link to="/" className={styles.but_dec}>
            <div className={styles.button_back}>
              <IoIosArrowBack />
              <p>Вернуться назад</p>
            </div>
          </Link>
          <div className={styles.button_back}>
            <p>Оплатить сейчас</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
