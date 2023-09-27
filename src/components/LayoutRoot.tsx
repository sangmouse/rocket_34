import { Link, Outlet } from "react-router-dom"
import styles from "styles/root.module.scss"

export default function LayoutRoot() {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <ul>
                        <li>
                            <Link to="/" className={styles["header__link"]}>Home Page</Link>
                        </li>
                        <li>
                            <Link to="contact" className={styles["header__link"]}>Contact Page</Link>
                        </li>
                        <li>
                            <Link to="users" className={styles["header__link"]}>Users Page</Link>
                        </li>
                        <li>
                            <Link to="users-axios" className={styles["header__link"]}>Users Axios Page</Link>
                        </li>
                        <li>
                            <Link to="about-us" className={styles["header__link"]}>About Us</Link>
                        </li>
                        <li>
                            <Link to="services" className={styles["header__link"]}>Services</Link>
                        </li>
                        <li>
                            <Link to="users2" className={styles["header__link"]}>Users2</Link>
                        </li>
                    </ul>
                </div>
                <Outlet />
                <div className={styles.footer}>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old.</p>
                </div>
            </div>

        </div>
    )
}