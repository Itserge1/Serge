"use client";

import styles from "./Cart.module.css"

type CartProps = {
    // title: string,
    isActive?: boolean
    onMouseEnter?: () => void
};

const Cart = ({ isActive = true, onMouseEnter }: CartProps) => {
    return(
        <section
            className={`${styles.cart} ${isActive? styles["cart-active"] : ""}`}
            onMouseEnter={onMouseEnter}
        ></section>
    )
}

export default Cart;