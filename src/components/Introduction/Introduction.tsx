"use client"

import styles from "./Introduction.module.css"
import {useFadeIn} from "@/hooks/useFadeIn";
import ParticleOrb from "@/components/ParticleOrb/ParticleOrb";

const Introduction = () => {
    const fadeInRef = useFadeIn();

    return(
        <section ref={fadeInRef} className={`${styles.intro} fade-in-section`}>
            <div className={styles.testInfos}>
                <p className={styles["testInfos-title"]}>Hi, My Name is Serge</p>
                <p className={styles["testInfos-sub-title"]}>Software engineer in Nyc</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolores eius fugiat temporibus
                    veniam.
                    Aspernatur corporis esse hic ipsa natus nobis repellat tempore. Commodi iusto nostrum odit soluta,
                    sunt
                    voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolores eius fugiat
                    temporibus veniam.
                </p>

                <a href="mailto:realitserge@gmail.com">
                    <button className={styles["testInfo-Button"]}>Say Hi 👋</button>
                </a>
            </div>
            <div className={styles.SvgWrapper}>
                <ParticleOrb />
            </div>
        </section>
    )
}

export default Introduction;