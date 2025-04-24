"use client"

import styles from "./HomePage.module.css"

import Introduction from "@/components/Introduction/Introduction";
import About from "@/components/About/About";
import CarHolder from "@/components/CarHolder/CarHolder";
import Background from "@/components/Background/Background";
import Projects from "@/components/Projects/Projects";

const HomePage = () => {
    return(
        <section className={styles.homepage}>
            <div>
                <Introduction />
            </div>
            <div>
                <About />
            </div>
            <div>
                <Background />
            </div>
            <div>
                <Projects />
            </div>
        </section>
    )
}

export default HomePage;