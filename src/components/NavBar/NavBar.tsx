"use client"

import styles from "./NavBar.module.css"

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbWriting } from "react-icons/tb";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import {useState} from "react";



const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => setIsOpen(!isOpen);

    return (
        <nav className={styles.navbar}>
            <h1>Serge</h1>
            <div className={styles["navbar__content"]}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Project</li>
                </ul>

                <div className={styles["navbar_socials"]}>
                    <a href="https://github.com/Itserge1" target="_blank" rel="noopener noreferrer" ><FaGithub className={styles.icon}/></a>
                    <a href="https://www.linkedin.com/in/itserge1/" target="_blank" rel="noopener noreferrer" ><FaLinkedin className={styles.icon}/></a>
                    <a href="mailto:realitserge@gmail.com"><MdOutlineEmail className={styles.icon}/></a>
                    <a href="https://github.com/Itserge1" target="_blank" rel="noopener noreferrer" ><TbWriting className={styles.icon}/></a>
                </div>
            </div>


            <div className={`${styles["navbar__content__responsive"]} ${ isOpen ? styles["nav_open"] : ""}`}>
                <div className={styles["navbar__content__responsive__close"]}>
                    <button><FaXmark className={styles.icon} onClick={toggleNav}/></button>
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Project</li>
                </ul>

                <div className={styles["navbar_socials"]}>
                    <a href="https://github.com/Itserge1" target="_blank" rel="noopener noreferrer" ><FaGithub className={styles.icon}/></a>
                    <a href="https://www.linkedin.com/in/itserge1/" target="_blank" rel="noopener noreferrer" ><FaLinkedin className={styles.icon}/></a>
                    <a href="mailto:realitserge@gmail.com"><MdOutlineEmail className={styles.icon}/></a>
                    <a href="https://github.com/Itserge1" target="_blank" rel="noopener noreferrer" ><TbWriting className={styles.icon}/></a>
                </div>
            </div>

            <button className={styles["navbar_socials_icon_bar"]}><FaBars className={styles.icon} onClick={toggleNav}/></button>
        </nav>
    )
}

export default NavBar;