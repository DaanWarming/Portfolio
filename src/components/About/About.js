import AboutStyles from "./About.module.css"
import profilePic from "../../assets/BlueProfilePicture.jpg"
import { FormattedMessage } from "react-intl"
import CV from "../../assets/Daan Warming.pdf"

export default function AboutMe({darkMode}) {
    return (
        <section className={`side-margins ${AboutStyles["about-me--container"]} ${AboutStyles[`about-me--container__${darkMode}`]}`} id="about">
            <h1 className={`${AboutStyles["about-me__title"]} ${AboutStyles[`about-me__title__${darkMode}`]}`}>About Me</h1>
            <div className={AboutStyles["about-me__underline"]}></div>
            <div className={AboutStyles["about-me__image--info"]}>
                <img className={AboutStyles["about-me__image"]} src={profilePic} alt="profile"></img>
                <div className={`${AboutStyles["about-me__info"]} ${AboutStyles[`about-me__info__${darkMode}`]}`}>
                    <div className={AboutStyles["about-me__info__item"]}>
                        <svg  width="25" height="21" viewBox="0 0 512 512" className={`${AboutStyles["about-me__info__item__icon"]} ${AboutStyles[`about-me__info__item__icon__${darkMode}`]}`}>
                            <path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z" />
                        </svg>
                        <p className={`${AboutStyles["about-me__info__item__text"]} ${AboutStyles[`about-me__info__item__text__${darkMode}`]}`}>Daan Warming</p>
                    </div>
                    <div className={AboutStyles["about-me__info__item"]}>
                        <svg width="25" height="20" viewBox="0 0 16 16" className={`${AboutStyles["about-me__info__item__icon"]} ${AboutStyles[`about-me__info__item__icon__${darkMode}`]}`}>
                            <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z"/>
                        </svg>
                        <p className={`${AboutStyles["about-me__info__item__text"]} ${AboutStyles["about-me__info__item__text__function"]} ${AboutStyles[`about-me__info__item__text__${darkMode}`]}`} >Front End React Developer</p>
                    </div>
                    <div className={AboutStyles["about-me__info__item"]}>
                        <svg width="25" height="25" viewBox="0 0 16 16" className={`${AboutStyles["about-me__info__item__icon"]} ${AboutStyles[`about-me__info__item__icon__${darkMode}`]}`}>
                            <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"/>
                        </svg>
                        <a className={`${AboutStyles["about-me__info__item__text"]} ${AboutStyles["about-me__info__item__text__email"]} ${AboutStyles[`about-me__info__item__text__${darkMode}`]}`} href="mailto:Daan.warming@gmail.com">Daan.warming@gmail.com</a>
                    </div>
                </div>
            </div>

            <p className={`${AboutStyles["about-me__text"]} ${AboutStyles[`about-me__text__${darkMode}`]}`}>
                <FormattedMessage 
                    id="about.about"
                    defaultMessage="Hi there!<br/> I'm Daan, and I'm a Dutch front-end developer currently living in The Hague.
                    <br/><br/> I am a self-motivated learner who is constantly seeking new knowledge about business and technology.
                    <br/>I really enjoy getting a Figma design and developing it into a working website. It's very rewarding when you see something you've made working in other people's browsers.
                    <br/><br/>In my free time I like to play video games with friends, play golf with my brother and father, and occasionally cheer for Feyenoord in the stadium."
                />

            </p>
            <div className={AboutStyles["about-me__btn--container"]}>
                <a target="_blank" href={CV} className={`${AboutStyles["about-me__btn"]} ${AboutStyles[`about-me__btn__${darkMode}`]}`}><FormattedMessage id="about.resume" defaultMessage="View Resume" />
                    <svg width="34" height="34" viewBox="0 0 16 16">
                        <path d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/daan-warming" className={`${AboutStyles["about-me__btn"]} ${AboutStyles[`about-me__btn__${darkMode}`]}`}><FormattedMessage id="about.linkedin" defaultMessage="LinkedIn Profile" />
                    <svg width="34" height="34" viewBox="0 0 16 16">
                        <path  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                    </svg>
                </a> 
            </div>
        </section>
    )
}