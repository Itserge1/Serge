"use client"

import styles from "./Background.module.css"
import Experience from "@/components/Experience/Experience";

const Background = () => {
    return(
        <section className={styles.background}>
            <div className={styles["background__title"]}>
                <h2>Experience</h2>
                <div className={styles["background__bar"]}></div>
            </div>
            <div className={styles["background__container"]}>
                <div className={styles["background__contents"]}>
                    <div className={styles["background__experiences"]}>
                        <Experience/>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Background;