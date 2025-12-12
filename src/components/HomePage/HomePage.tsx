"use client"

import styles from "./HomePage.module.css"

import Introduction from "@/components/Introduction/Introduction";
import About from "@/components/About/About";
import Background from "@/components/Background/Background";
import Projects from "@/components/Projects/Projects";
import FadeInSection from "@/components/FadeInSection/FadeInSection";

const HomePage = () => {
    return(
        <section className={styles.homepage}>
            <div>
                <Introduction />
            </div>

            <FadeInSection>
                <About />
            </FadeInSection>

            <FadeInSection>
                <Background />
            </FadeInSection>

            <FadeInSection>
                <Projects />
            </FadeInSection>
        </section>
    )
}

export default HomePage;