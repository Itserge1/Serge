"use client"

import styles from "./About.module.css"
import { RxTriangleRight } from "react-icons/rx";
import Image from "next/image";

const About = () => {

    return(
        <section className={styles.about}>
            <div className={styles["about__title"]}>
                <h2>About Me</h2>
                <div className={styles["about__bar"]}></div>
            </div>
            <div className={styles["about__content"]}>
                <div className={styles["about__text"]}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid atque beatae corporis culpa
                        cum dolores ipsum magnam molestiae neque obcaecati odit possimus, provident qui quidem quis recusandae.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid atque beatae corporis culpa
                        cum dolores ipsum magnam molestiae neque obcaecati odit possimus, provident qui quidem quis recusandae.
                    </p>
                    <ul>
                        <li><RxTriangleRight color="#00C2FF" />python</li>
                        <li><RxTriangleRight color="#00C2FF" />python</li>
                        <li><RxTriangleRight color="#00C2FF" />python</li>
                        <li><RxTriangleRight color="#00C2FF" />python</li>
                        <li><RxTriangleRight color="#00C2FF" />python</li>
                        <li><RxTriangleRight color="#00C2FF" />python</li>
                        <li><RxTriangleRight color="#00C2FF" />python</li>
                        <li><RxTriangleRight color="#00C2FF" />python</li>
                        <li><RxTriangleRight color="#00C2FF" />python</li>
                        <li><RxTriangleRight color="#00C2FF" />python</li>
                        <li><RxTriangleRight color="#00C2FF" />python</li>
                        <li><RxTriangleRight color="#00C2FF" />python</li>
                    </ul>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid atque beatae corporis culpa
                        cum dolores ipsum magnam molestiae neque obcaecati odit possimus, provident qui quidem quis recusandae.
                    </p>
                </div>
                <div className={styles["about__image"]}>
                    <Image
                        src="/images.jpg"
                        alt="picture"
                        fill
                        className={styles["about__image-img"]}
                    />
                </div>
            </div>
        </section>
    )
}

export default About;