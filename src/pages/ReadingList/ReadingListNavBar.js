import NavBarStyles from "./ReadingListNavBar.module.css"
import { Link } from "react-router-dom"
import { DarkModeSwitch } from 'react-toggle-dark-mode';

// className={`${NavBarStyles["nav-bar"]} ${NavBarStyles[`nav-bar__${darkMode}`]}`}


export default function ReadingListNavBar() {
    return (
        <nav className={NavBarStyles["nav-bar--container"]}>
            <ul className={NavBarStyles["nav-bar"]}>
                <li className={NavBarStyles["nav-bar__link"]}><Link to="/">Home</Link></li>
                <li className={`${NavBarStyles["nav-bar__link"]} ${NavBarStyles["nav-bar__link--linkedin"]}`}><a target="_blank" href="https://www.linkedin.com/in/daan-warming-613932175/">LinkedIn</a></li>
                <li className={NavBarStyles["nav-bar__link"]}><Link to="/ReadingList">ReadingList</Link></li>
            </ul>
        </nav>
    )
}