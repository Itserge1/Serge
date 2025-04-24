"use client"

import styles from "./NavBar.module.css"

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbWriting } from "react-icons/tb";

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles["navbar-test"]}>
                <h1>Serge</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Project</li>
                </ul>
            </div>
            <div className={styles["navbar-icons"]}>
                <a href="https://github.com/Itserge1" target="_blank" rel="noopener noreferrer" ><FaGithub className={styles.icon}/></a>
                <a href="https://www.linkedin.com/in/itserge1/" target="_blank" rel="noopener noreferrer" ><FaLinkedin className={styles.icon}/></a>
                <a href="mailto:realitserge@gmail.com"><MdOutlineEmail className={styles.icon}/></a>
                <a href="https://github.com/Itserge1" target="_blank" rel="noopener noreferrer" ><TbWriting className={styles.icon}/></a>
            </div>
        </nav>
    )
}

export default NavBar;