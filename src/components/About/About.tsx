"use client"

import styles from "./About.module.css"

const About = () => {
    return(
        <section className={styles.about}>
            <div className={styles["about__title"]}>
                <h2>About Me</h2>
                <div className={styles["about__bar"]}></div>
            </div>
            <div className={styles["about__text"]}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid atque beatae corporis culpa
                    cum dolores ipsum magnam molestiae neque obcaecati odit possimus, provident qui quidem quis recusandae
                    sint vel veritatis voluptates. Non nostrum sed ut! Alias assumenda aut consectetur distinctio ea eaque
                    eligendi eveniet, exercitationem fugit, in inventore libero maxime nisi quia suscipit tenetur veritatis.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid atque beatae corporis culpa
                    cum dolores ipsum magnam molestiae neque obcaecati odit possimus, provident qui quidem quis recusandae
                    sint vel veritatis voluptates. Non nostrum sed ut! Alias assumenda aut consectetur distinctio ea eaque
                    eligendi eveniet, exercitationem fugit, in inventore libero maxime nisi quia suscipit tenetur veritatis.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid atque beatae corporis culpa
                    cum dolores ipsum magnam molestiae neque obcaecati odit possimus, provident qui quidem quis recusandae
                    sint vel veritatis voluptates. Non nostrum sed ut! Alias assumenda aut consectetur distinctio ea eaque
                    eligendi eveniet, exercitationem fugit, in inventore libero maxime nisi quia suscipit tenetur veritatis.
                </p>
            </div>
        </section>
    )
}

export default About;