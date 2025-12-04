"use client"

import styles from "./ProjectCart.module.css";

import {LuExternalLink} from "react-icons/lu";
import {FaGithub} from "react-icons/fa";

const ProjectCart = () => {
    return(
        <section>
            <div className={styles["project__card"]}>
                <div className={styles["project__card-image"]}></div>
                <div className={styles["project__card-infos"]}>
                    <div className={styles["project__cart-title"]}>
                        <h3>Project Name</h3>
                        <div className={styles["project__card-links"]}>
                            <a href="https://github.com/Itserge1"><LuExternalLink className={styles["project__icon"]}/></a>
                            <a href="https://github.com/Itserge1"><FaGithub className={styles["project__icon"]}/></a>
                        </div>
                    </div>
                    <div className={styles["project__tech-carts"]}>
                        <span>React</span>
                        <span>Node</span>
                        <span>python</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit numquam omnis possimus.</p>
                </div>
            </div>
        </section>
    )
}

export default ProjectCart;