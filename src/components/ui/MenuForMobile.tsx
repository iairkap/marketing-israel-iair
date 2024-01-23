

/* this is going to be the menu for mobile with the hamburguerIcon, states etx */
import React, { useState, useEffect } from 'react';
import styles from "../styles/menuMobile.module.css"

interface MenuForMobileProps {
    language?: string;


}

function MenuForMobile(props: MenuForMobileProps) {
    const [open, setIsOpen] = useState(false);

    const handleButtonClick = () => {
        setIsOpen(!open);
    };

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [open]);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const href = e.currentTarget.getAttribute('href');

        if (href && href.startsWith("#")) {
            e.preventDefault();

            const isHebrew = window.location.pathname.includes("/he");

            if (window.location.pathname.includes("/contact")) {
                window.location.href = isHebrew ? "/he" + href : "/" + href;
            } else {
                const target = document.querySelector(href);

                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            }
        }
    };


    return (
        <div>
            <button onClick={handleButtonClick} className={styles.button}>
                {!open && <div className={styles.button}>☰</div>}
                {open && <div className={styles.button}>X</div>}
            </button>

            {open && (

                <div className={styles.container}>

                    <div className={`${styles.menuOpen} ${open ? styles.menuOpenOpen : ''}`}>

                        <a href="#works" onClick={handleLinkClick}>

                            <button className={styles.menuOptions}>Work</button>
                        </a>
                        <a href="#services" onClick={handleLinkClick}>

                            <button className={styles.menuOptions}>Services</button>
                        </a>
                        <a href="contact" onClick={handleLinkClick}>

                            <button className={styles.menuOptions}>Contact</button>
                        </a>
                        <div>
                            <button className={styles.callUs}>Call Us!</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MenuForMobile;

/* return (
    <div>
        <button onClick={handleButtonClick} className={styles.button}>
            <div className={open ? styles.lineOpen1 : styles.line}></div>
            <div className={open ? styles.lineOpen2 : styles.line}></div>
            <div className={open ? styles.lineOpen3 : styles.line}></div>
            <div className={open ? styles.lineOpen4 : styles.line}></div>
        </button>

        {
            open && (
                <div className={styles.menuOpen}>
                    <button className={styles.menuOptions}>Work</button>
                    <button className={styles.menuOptions}>Services</button>
                    <button className={styles.menuOptions}>Contact</button>
                    <div><button>Call Us!</button></div>
                </div>
            )
        }
    </div >
}

export default MenuForMobile;

*/