import Navigation from "../../components/navigation/Navigation"
import Footer from "../../components/footer/Footer"
import AboutMe from "../../components/About/About"
import Skills from "../../components/Skills/Skills"
import AudiophileWebShop from "../../components/Projects/AudiophileWebShop"
import InvoicesApp from "../../components/Projects/InvoicesApp"
import ProjectsTitle from "../../components/Projects/ProjectsTitle"



export default function Home({darkMode, isDarkMode, toggleDarkMode}) {
    return (
        <>
            <Navigation darkMode={darkMode} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}  />
            <main className={`main-content ${`main-content__${darkMode}`}`}>
                <AboutMe darkMode={darkMode}/>
                <Skills darkMode={darkMode}/>
                <section className="side-margins">
                    <ProjectsTitle darkMode={darkMode}/>
                    <AudiophileWebShop darkMode={darkMode}/>
                    <InvoicesApp darkMode={darkMode}/>
                </section>
            </main>
            <Footer darkMode={darkMode}/>
        </>
    )
}