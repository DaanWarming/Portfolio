import { Link } from "react-router-dom"

import ReadingListStyles from "./ReadingList.module.css"
import ReadingListNavBar from "./ReadingListNavBar"

function ArticlePage({star, link, shortLink, title, name}) {
    return (
        <li className={ReadingListStyles["reading-list__article--container"]}>
            <div className={ReadingListStyles["reading-list__icon-article"]}>
                {star ? <span className={ReadingListStyles["reading-list__star-icon"]}>⭐</span> : 
                <svg className={ReadingListStyles["reading-list__paper-icon"]} viewBox="0 0 512 512">
                    <path d="M456 32h-304C121.1 32 96 57.13 96 88v320c0 13.22-10.77 24-24 24S48 421.2 48 408V112c0-13.25-10.75-24-24-24S0 98.75 0 112v296C0 447.7 32.3 480 72 480h352c48.53 0 88-39.47 88-88v-304C512 57.13 486.9 32 456 32zM464 392c0 22.06-17.94 40-40 40H139.9C142.5 424.5 144 416.4 144 408v-320c0-4.406 3.594-8 8-8h304c4.406 0 8 3.594 8 8V392zM264 272h-64C186.8 272 176 282.8 176 296S186.8 320 200 320h64C277.3 320 288 309.3 288 296S277.3 272 264 272zM408 272h-64C330.8 272 320 282.8 320 296S330.8 320 344 320h64c13.25 0 24-10.75 24-24S421.3 272 408 272zM264 352h-64c-13.25 0-24 10.75-24 24s10.75 24 24 24h64c13.25 0 24-10.75 24-24S277.3 352 264 352zM408 352h-64C330.8 352 320 362.8 320 376s10.75 24 24 24h64c13.25 0 24-10.75 24-24S421.3 352 408 352zM400 112h-192c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h192c17.67 0 32-14.33 32-32v-64C432 126.3 417.7 112 400 112z"/>
                </svg>}
                {name === undefined ? <a target="_blank" href={link} className={ReadingListStyles["reading-list__article"]}>{title}</a>: <Link to={`/${name}`} className={ReadingListStyles["reading-list__article"]}>{title}</Link>}
            </div>
            <a target="_blank" href={link} className={ReadingListStyles["reading-list__article--link"]}>{shortLink}</a>
        </li>
    )
}

export default function ReadingList23() {
    return (
        <>
            <ReadingListNavBar />
            <div className={ReadingListStyles["reading-list--container"]}>
                <main className={ReadingListStyles["reading-list"]}>
                    <div className={ReadingListStyles["reading-list__book-icon"]}>📓</div>
                    <h1 className={ReadingListStyles["reading-list__title"]} >Reading List 2023</h1>
                    <p className={ReadingListStyles["reading-list__sub-text"]}>This is a collection of interesting articles that I read this past year, articles with a ⭐ are the most noteworthy</p>
                    <p className={ReadingListStyles["reading-list__sub-text--date"]}>(Updated: 07.01.2023)</p>
                    <div className={ReadingListStyles["reading-list__books-icon"]}>📚 2023</div>
                    <ul className={ReadingListStyles["reading-list__list"]} >
                        <ArticlePage 
                            star={true}
                            link="https://decorrespondent.nl/14047/aan-alle-wereldverbeteraars-van-nu-idealen-zijn-mooi-resultaten-nog-beter/540036915-952c0cc2"
                            shortLink="decorrespondent.nl"
                            title="Aan alle wereldverbeteraars van nu: idealen zijn mooi, resultaten nog beter"
                        />
                        <ArticlePage 
                            star={true}
                            link="https://www.nrc.nl/nieuws/2023/01/05/soms-slaat-arne-slot-door-in-zijn-drang-naar-perfectie-a4153475"
                            shortLink="nrc.nl"
                            title="Soms slaat Arne Slot door in zijn drang naar perfectie"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://nabeelqu.co/advice"
                            shortLink="nabeelqu.co"
                            title="Advice That Actually Worked For Me"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://www.marketingfacts.nl/berichten/blendle-en-de-kunst-van-het-koppen-maken-die-zelfs-journalisten-wilden-afkijken/"
                            shortLink="marketingfacts.nl"
                            title="Blendle en de kunst van het koppen maken"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://lspace.swyx.io/p/reverse-prompt-eng"
                            shortLink="lspace.swyx.io"
                            title="Reverse Prompt Engineering for Fun and (no) Profit"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://www.leagueoflegends.com/en-au/news/dev/tf-t-minus-eighteen-weeks-the-story-of-tft-part-1/"
                            shortLink="leagueoflegends.com"
                            title="(TF)T-MINUS EIGHTEEN WEEKS: THE STORY OF TFT (PART 1)"
                            name="TheStoryOfTFT"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://www.leagueoflegends.com/en-pl/news/dev/tf-t-minus-ten-weeks-the-story-of-tft-part-2/"
                            shortLink="leagueoflegends.com"
                            title="(TF)T-MINUS TEN WEEKS: THE STORY OF TFT (PART 2)"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://slatestarcodex.com/2018/10/30/sort-by-controversial/"
                            shortLink="slatestarcodex.com"
                            title="Sort By Controversial (Fiction)"
                            name="SortByControversial"
                        />
                    </ul>
                </main>
            </div>
        </>
    )
}