"use client"

import styles from "./Background.module.css"
import {useState} from "react";

const Background = () => {
    const [activeSection, setActiveSection] = useState<string>("experience");

    return(
        <section className={styles.background}>
            <div className={styles["background__container"]}>
                <div className={styles["background__select"]}>
                    <span className={ activeSection === "experience" ? styles["active"] : ""} onClick={() => setActiveSection("experience")}>Experience</span>
                    <span className={ activeSection === "education" ? styles["active"] : ""} onClick={() => setActiveSection("education")}>Education</span>
                    <span className={activeSection === "certs" ? styles["active"] : ""} onClick={() => setActiveSection("certs")}>Clouds Certs</span>
                </div>

                <div className={styles["background__contents"]}>
                    { activeSection === "experience" && (
                        <div className={styles["background__experiences"]}>
                            My experience here
                        </div>
                    )}

                    { activeSection === "education" &&(
                        <div className={styles["background__education"]}>
                            My education here
                        </div>
                    )}

                    { activeSection === "certs" && (
                        <div className={styles["background__certificates"]}>
                            My Cloud Certs here
                        </div>
                    )}
                </div>
            </div>

        </section>
    )
}

export default Background;