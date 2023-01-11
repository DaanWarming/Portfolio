import styles from "./ProjectsTitle.module.css"
import { FormattedMessage } from "react-intl"

export default function ProjectsTitle() {
    return (
        <>
            <h1 className={styles["projects__title"]}><FormattedMessage id="projects.title" defaultMessage="Projects"/></h1>
            <div className={styles["projects__underline"]}></div>
        </>
    )
}