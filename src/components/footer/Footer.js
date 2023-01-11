import footerStyle from "./Footer.module.css"
import CV from "../../assets/Daan Warming.pdf"

export default function Footer({darkMode}) {
    return (
        <footer className={`${footerStyle["footer"]} ${footerStyle[`footer__${darkMode}`]} `}>
            <div className={footerStyle["footer__icons--container"]}>  
                <a className={`${footerStyle["footer__icon--circle"]} ${footerStyle[`footer__icon--circle__${darkMode}`]}`} target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/daan-warming" aria-label="LinkedIn logo">
                    <svg width="23" height="23" className={`${footerStyle["footer__icon"]} ${footerStyle[`footer__icon__${darkMode}`]}`} viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                </a>
                <a target="_blank" rel="noreferrer"  href={CV} className={`${footerStyle["footer__icon--circle"]} ${footerStyle[`footer__icon--circle__${darkMode}`]}`} aria-label="Resume Icon">
                    <svg width="23" height="23" className={`${footerStyle["footer__icon"]} ${footerStyle[`footer__icon__${darkMode}`]}`} viewBox="0 0 16 16">
                        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                    </svg>
                </a>
            </div>
            <p className={`${footerStyle["footer__copyright"]} ${footerStyle[`footer__copyright__${darkMode}`]}`}>© Daan Warming, 2023</p>
        </footer>
    )
}