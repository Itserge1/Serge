"use client"

import styles from "./CarHolder.module.css"

import Cart from "@/components/Cart/Cart";

import {useState} from "react";

const CarHolder = () => {
    const carts = ["cart1", "cart2", "cart3", "cart4", "cart5", "cart6"];
    const[activeIndex, setActiveIndex] = useState<number>(0);

    return(
        <section className={`${styles.cartHolder} ${styles["cartHolder-border"]}`}>
            {carts.map((text, index) => (
                <Cart key={index} isActive={activeIndex === index} onMouseEnter={() => setActiveIndex(index)}/>
            ))}
        </section>
    )
}

export default CarHolder;