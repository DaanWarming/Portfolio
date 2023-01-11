import ProjectStyles from "./Projects.module.css"
import PayApiThumbnail from "../../assets/PayApi-sc.png"

import { FormattedMessage } from "react-intl"


export default function PayApi({darkMode}) {
    return (
        <>
            <div className={`${ProjectStyles["projects__preview__container"]} ${ProjectStyles[`projects__preview__container__${darkMode}`]}`}>
                <a className={ProjectStyles["project__preview"]} href="https://daanwarming.github.io/PayApi/index.html" target="_blank">
                    <div className={`${ProjectStyles["project__image--container"]} ${ProjectStyles[`project__image--container__${darkMode}`]}`}>
                        <img className={ProjectStyles["project__image"]} src={PayApiThumbnail}></img>
                    </div>
                    <div className={`${ProjectStyles["project__description"]} ${ProjectStyles[`project__description__${darkMode}`]}`}>
                        <h2 className={ProjectStyles["project__description__title"]}><FormattedMessage id="projects.payapi-title" defaultMessage="Audiophile E-Commerce Website" /></h2>
                        <p className={ProjectStyles["project__description__text"]}><FormattedMessage id="projects.payapi-text" defaultMessage="An e-commerce website made with React and css with a range of content and UI elements, including responsive navigation, product pages and a shoppingcart where you can edit quantities." /></p>
                        <ul className={ProjectStyles["project__description__tags"]}>
                            <li className={`${ProjectStyles["project__description__tag"]} ${ProjectStyles[`project__description__tag__${darkMode}`]}`}> <svg viewBox="0 0 576 512" className={ProjectStyles["project__description__icon"]}> 
                                <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"/></svg>
                                Responsive Design
                            </li>
                            <li className={`${ProjectStyles["project__description__tag"]} ${ProjectStyles[`project__description__tag__${darkMode}`]}`}> <svg viewBox="0 0 384 512" className={ProjectStyles["project__description__icon"]}>
                                <path d="M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 320.417 272.081 320.417H274.161C309.737 320.417 338.576 291.577 338.576 256.002C338.576 220.427 309.737 191.587 274.161 191.587H272.081C236.505 191.587 207.666 220.427 207.666 256.002ZM109.793 351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 415.167V351.795H109.793ZM109.793 31.3778C74.2172 31.3778 45.3778 60.2173 45.3778 95.7924C45.3778 131.368 74.2172 160.207 109.793 160.207H176.288V31.3778H109.793ZM207.666 160.207H274.161C309.737 160.207 338.576 131.368 338.576 95.7924C338.576 60.2173 309.737 31.3778 274.161 31.3778H207.666V160.207Z"/></svg>
                                Figma 
                            </li>
                            <li className={`${ProjectStyles["project__description__tag"]} ${ProjectStyles[`project__description__tag__${darkMode}`]}`}> <svg viewBox="0 0 384 512" className={ProjectStyles["project__description__icon"]}>
                                <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
                                HTML
                            </li>
                            <li className={`${ProjectStyles["project__description__tag"]} ${ProjectStyles[`project__description__tag__${darkMode}`]}`}> <svg  viewBox="0 0 384 512" className={ProjectStyles["project__description__icon"]}> 
                                <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>
                                CSS
                            </li>
                        </ul>
                    </div>
                    <div className={`${ProjectStyles["project__view-bar"]} ${ProjectStyles[`project__view-bar__${darkMode}`]}`}><span className={ProjectStyles["project__view-bar__text"]}><FormattedMessage id="projects.project-btn" defaultMessage="View Live Example" /> <svg width="34" height="34" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/></svg>
                        </span>
                    </div>
                </a>
            </div>
        </>
    )
}