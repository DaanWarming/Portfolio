import { useState, useContext } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import navStyles from "./Navigation.module.css"
import { FormattedMessage } from "react-intl"
import { Context } from '../Wrapper';




export default function Navigation({darkMode, isDarkMode, toggleDarkMode}) {
    const context = useContext(Context)

    function goToAbout() {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    
    function goToSkills() {
        window.scrollTo({top: 800, behavior: 'smooth'})
    }

    function goToProjects() {
        window.scrollTo({top: 1570, behavior: 'smooth'})
    }


    return (
        <nav className={`${navStyles["nav__container"]} ${navStyles[`container__${darkMode}`]}`}>
            <ul className={navStyles["nav__links--container"]}>
                <li className={`${navStyles["nav__links"]} ${navStyles["nav__links--home"]} ${navStyles[`nav__links__${darkMode}`]}`}>
                    <a className={navStyles["nav__links--item"]}><p className={`${navStyles["link"]} ${navStyles[`link__${darkMode}`]}`}>Home</p></a>
                </li>
                <li className={`${navStyles["nav__links"]} ${navStyles["nav__links--about"]} ${navStyles[`nav__links__${darkMode}`]}`} onClick={goToAbout}>
                    <a className={navStyles["nav__links--item"]} >
                        <svg viewBox="0 0 512 512" width="21" className={`${navStyles["icon"]} ${navStyles[`icon__${darkMode}`]}`} title="user-alt">
                            <path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z" />
                        </svg>
                        <p className={`${navStyles["link"]} ${navStyles[`link__${darkMode}`]}`}>About</p>
                    </a>
                </li>
                <li className={`${navStyles["nav__links"]} ${navStyles["nav__links--skills"]} ${navStyles[`nav__links__${darkMode}`]}`} onClick={goToSkills}>
                    <a className={navStyles["nav__links--item"]}>
                        <svg viewBox="0 0 640 512" width="28" className={`${navStyles["icon"]} ${navStyles[`icon__${darkMode}`]}`} title="code">
                            <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z" />
                        </svg>
                        <p className={`${navStyles["link"]} ${navStyles[`link__${darkMode}`]}`}>Skills</p>
                    </a>
                </li>
                <li className={`${navStyles["nav__links"]} ${navStyles["nav__links--projects"]} ${navStyles[`nav__links__${darkMode}`]}`} onClick={goToProjects}>
                    <a className={navStyles["nav__links--item"]}>
                        <svg viewBox="0 0 640 512" width="30" className={`${navStyles["icon"]} ${navStyles[`icon__${darkMode}`]}`} title="laptop">
                            <path d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z" />
                        </svg>
                        <p className={`${navStyles["link"]} ${navStyles[`link__${darkMode}`]}`}><FormattedMessage id="navigation.projects" defaultMessage="Projects" /></p>
                    </a>
                </li>
                <li className={`${navStyles["nav__links"]} ${navStyles[`nav__links__${darkMode}`]}`}>
                    <Link to="/ReadingList" className={navStyles["nav__links--item"]}>
                        <svg viewBox="0 0 448 512" width="30" className={`${navStyles["icon"]} ${navStyles[`icon__${darkMode}`]}`} title="book">
                            <path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z" />
                        </svg>
                        <p className={`${navStyles["link"]} ${navStyles[`link__${darkMode}`]}`}> <FormattedMessage id="navigation.reading" defaultMessage="Reading" /></p>
                    </Link>
                </li>
            </ul>
            <DarkModeSwitch className={navStyles["toggle"]}  // https://www.npmjs.com/package/react-toggle-dark-mode
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={40}
            />
            <select value={context.locale} onChange={context.selectLang} className={`${navStyles["language"]} ${navStyles[`language__${darkMode}`]}`}>
                <option value="nl">Dutch</option>
                <option value="en">English</option>
            </select>
        </nav>
    )
}