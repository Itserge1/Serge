"use client"

import styles from "./Projects.module.css"
import ProjectCart from "@/components/ProjectCart/projectCart";


const Projects = () => {
    return(
        <section className={styles.projects}>
            <div className={styles["projects__title"]}>
                <h2>Projects</h2>
                <div className={styles["projects__bar"]}></div>
            </div>

            <div className={styles["projects__content"]}>
                <ProjectCart />
                <ProjectCart />
                <ProjectCart />
            </div>

        </section>
    )
}

export default Projects;