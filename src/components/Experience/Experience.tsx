"use client"
import styles from "./Experience.module.css"
import { useState } from "react";

const Experience = () => {
    const [activeExperience, setActiveExperience] = useState("microsoft");

    return(
        <section className={styles.experience}>
            <div className={styles.experience__title}>
                <span
                    className={activeExperience === "microsoft" ? styles.active : ""}
                    onClick={() => setActiveExperience("microsoft")}
                >
                    Microsoft
                </span>

                <span
                    className={activeExperience === "pas" ? styles.active : ""}
                    onClick={() => setActiveExperience("pas")}
                >
                    PA Solutions
                </span>

                <span
                    className={activeExperience === "dojo" ? styles.active : ""}
                    onClick={() => setActiveExperience("dojo")}
                >
                    Coding Dojo
                </span>
            </div>

            <div className={styles.experience__content}>
                {activeExperience === "microsoft" &&
                    <div className={styles["experience__infos"]}>
                        <div className={styles["experience__infos__header"]}>
                            <h3>Software engineer @ <span>Microsoft</span></h3>
                            <p>2021 - present</p>
                        </div>

                        <div className={styles["experience__infos__points"]}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti distinctio doloremque enim facilis qui velit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti distinctio doloremque enim facilis qui velit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti distinctio doloremque enim facilis qui velit.</p>
                        </div>
                    </div>
                }
                {activeExperience === "pas" &&
                    <div className={styles["experience__infos"]}>
                        <div className={styles["experience__infos__header"]}>
                            <h3>Software engineer @ <span>PAS SOLUTIONS</span></h3>
                            <p>2021 - present</p>
                        </div>

                        <div className={styles["experience__infos__points"]}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti distinctio doloremque enim facilis qui velit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti distinctio doloremque enim facilis qui velit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti distinctio doloremque enim facilis qui velit.</p>
                        </div>
                    </div>
                }
                {activeExperience === "dojo" &&
                    <div className={styles["experience__infos"]}>
                        <div className={styles["experience__infos__header"]}>
                            <h3>Junior Software engineer @ <span>Coding Dojo</span></h3>
                            <p>2021 - present</p>
                        </div>

                        <div className={styles["experience__infos__points"]}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti distinctio doloremque enim facilis qui velit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti distinctio doloremque enim facilis qui velit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti distinctio doloremque enim facilis qui velit.</p>
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}

export default Experience;
