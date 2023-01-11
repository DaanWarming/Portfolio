import {Link} from "react-router-dom"

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

export default function ReadingList22() {
    return (
        <>
            <ReadingListNavBar />
            <div className={ReadingListStyles["reading-list--container"]}>
                <main className={ReadingListStyles["reading-list"]}>
                    <div className={ReadingListStyles["reading-list__book-icon"]}>📓</div>
                    <h1 className={ReadingListStyles["reading-list__title"]} >Reading List 2022</h1>
                    <p className={ReadingListStyles["reading-list__sub-text"]}>This is a collection of interesting articles that I read in 2022, articles with a ⭐ are the most noteworthy</p>
                    <p className={ReadingListStyles["reading-list__sub-text--date"]}>(Updated: 01.01.2023)</p>
                    <div className={ReadingListStyles["reading-list__books-icon"]}>📚 2022</div>
                    <ul className={ReadingListStyles["reading-list__list"]} >
                        <ArticlePage 
                            star={true}
                            link="https://hbr.org/2010/07/how-will-you-measure-your-life"
                            shortLink="hbr.org"
                            title="How Will You Measure Your Life?"
                            name="MeasureYourLife"
                        />
                        <ArticlePage 
                            star={true}
                            link="https://medium.com/parsa-vc/7-lessons-from-andy-rachleff-on-product-market-fit-9fc5eceb4432"
                            shortLink="medium.com"
                            title="7 Lessons from Andy Rachleff on Product-Market Fit"
                            name="LessonsOnProductMarketFit"
                        />
                        <ArticlePage 
                            star={true}
                            link="https://www.dwarkeshpatel.com/p/annus-mirabilis"
                            shortLink="dwarkeshpatel.com"
                            title="The mystery of the miracle year"
                            name="TheMiracleYear"
                        />
                        <ArticlePage 
                            star={true}
                            link="https://alexw.substack.com/p/betting-on-unknown-unknowns"
                            shortLink="alexw.substack.com"
                            title="Betting on Unknown Unknowns"
                            name="BettingOnUnknownUnknowns"
                        />
                        <ArticlePage 
                            star={true}
                            link="https://gigaom.com/2009/07/12/diversification-mediocrity/"
                            shortLink="gigaom.com"
                            title="Why Diversification Results In Mediocrity"
                            name="DiversificationResultsInMediocrity"
                        />
                        <ArticlePage 
                            star={true}
                            link="https://blakeir.com/reading-list/reading-lists-from-previous-months/september-2021-archive/pricing-niche-products-why-sell-a-mechanical-keyboard-kit-for-1668"
                            shortLink="kevinlynagh.com"
                            title="Pricing niche products: Why sell a mechanical keyboard kit for $1,668?"
                            name="PricingNicheProducts"
                        />
                        <ArticlePage 
                            star={true}
                            link="https://www.tesla.com/blog/master-plan-part-deux"
                            shortLink="tesla.com"
                            title="Master Plan, Part Deux | Tesla"
                            name="MasterPlanTesla"
                        />
                        <ArticlePage 
                            star={true}
                            link="https://pmarchive.com/guide_to_startups_part4.html"
                            shortLink="pmarchive.com"
                            title="The only thing that matters"
                            name="OnlyThingThatMatters"
                        />
                        <ArticlePage 
                            star={true}
                            link="https://nesslabs.com/time-anxiety"
                            shortLink="nesslabs.com"
                            title="Time anxiety: is it too late?"
                            name="TimeAnxiety"
                        />
                        <ArticlePage 
                            star={true}
                            link="https://stonemaiergames.com/kickstarter-lesson-204-your-idea-is-brilliant-your-idea-is-worthless/"
                            shortLink="stonemaiergames.com"
                            title="Your Idea Is Brilliant, Your Idea Is Worthless"
                            name="YourIdeaIsWorthless"
                        />
                        <ArticlePage 
                            star={true}
                            link="https://medium.com/predict/https-medium-com-strategy-insider-the-supreme-theory-of-hype-branding-af3f9acd7fe"
                            shortLink="medium.com"
                            title="The “SUPREME” theory of hype branding"
                            name="TheSUPREMEBranding"
                        />
                        <ArticlePage 
                            star={true}
                            link="https://blog.samaltman.com/advice-for-ambitious-19-year-olds"
                            shortLink="samaltman.com"
                            title="Advice for ambitious 19 year olds"
                            name="AdviceForAmbitious"
                        />
                        <ArticlePage 
                            star={true}
                            link="https://www.nytimes.com/2022/02/25/opinion/covid-pandemic-depressing-math.html"
                            shortLink="nytimes.com"
                            title="How Covid Stole Our Time and How We Can Get It Back"
                            name="CovidStoleOurTime"
                        />
                        <ArticlePage 
                            star={true}
                            link="https://decorrespondent.nl/13782/nee-je-bent-niet-goed-zoals-je-bent/529848990-4ead1cf1"
                            shortLink="decorrespondent.nl"
                            title="Nee, je bent niet goed zoals je bent"
                        />
                        <ArticlePage 
                            star={true}
                            link="https://www.nateliason.com/blog/infomania"
                            shortLink="nateliason.com"
                            title="Fighting Infomania: Why 80% of Your Reading is a Waste of Time"
                        />
                        <ArticlePage 
                            star={true}
                            link="https://www.shopify.com/blog/mrbeast-business-backstory"
                            shortLink="shopify.com"
                            title="You’ve Met MrBeast, the YouTuber. Now Meet Jimmy, the Business Mogul."
                        />
                        <ArticlePage 
                            star={true}
                            link="http://www.paulgraham.com/know.html"
                            shortLink="paulgraham.com"
                            title="How You Know"
                        />
                        <ArticlePage 
                            star={true}
                            link="http://www.paulgraham.com/mean.html"
                            shortLink="paulgraham.com"
                            title="Mean People Fail"
                        />
                        <ArticlePage 
                            star={true}
                            link="http://www.paulgraham.com/ecw.html"
                            shortLink="paulgraham.com"
                            title="How to Be an Expert in a Changing World"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://americanbusinesshistory.org/jim-casey-the-unknown-entrepreneur-who-built-the-great-ups/"
                            shortLink="americanbusinesshistory.org"
                            title="Jim Casey: The Unknown Entrepreneur Who Built The Great UPS"
                            name="TheGreatUPS"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://lancaric.me/survivor-io-global-launch-ua-case-study/"
                            shortLink="lancaric.me"
                            title="Survivor.io global launch UA case study"
                            name="SurvivorIoCaseStudy"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://www.theatlantic.com/technology/archive/2022/09/youtube-homepage-editor-google-algorithm-book-excerpt/671339/"
                            shortLink="theatlantic.com"
                            title="Before YouTube’s Algorithm, There Were ‘Coolhunters’"
                            name="YoutubeCoolhunters"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://www.bedelstein.com/post/mcmaster-carr"
                            shortLink="bedelstein.com"
                            title="The Smartest Website You Haven't Heard of"
                            name="TheSmartestWebsite"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://www.deconstructoroffun.com/blog/2022/6/4/battle-passes-analysis"
                            shortLink="deconstructoroffun.com"
                            title="Battle Passes - Everything You Ought to Know and Then Some"
                            name="BattlePasses"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://www.fastcompany.com/90741893/epic-games-ceo-tim-sweeney-talks-the-metaverse-crypto-and-antitrust"
                            shortLink="fastcompany.com"
                            title="Epic Games CEO Tim Sweeney talks the metaverse and crypto"
                            name="TimSweeneyTalks"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://www.drorpoleg.com/impossibly-useless/"
                            shortLink="drorpoleg.com"
                            title="Impossibly Useless"
                            name="ImpossiblyUseless"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://every.to/superorganizers/how-i-got-my-brain-back"
                            shortLink="every.to"
                            title="How I Got My Brain Back"
                            name="GotMyBrainBack"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://nav.al/possible-careers"
                            shortLink="nav.al"
                            title="The Internet Has Massively Broadened Career Possibilities"
                            name="InternetHasBroadenedCareer"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://www.drorpoleg.com/the-ponzi-career/"
                            shortLink="drorpoleg.com"
                            title="The Ponzi Career"
                            name="ThePonziCareer"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://blakeir.com/reading-list/reading-lists-from-previous-months/september-2021-archive/speculation-is-a-superpower"
                            shortLink="blakeir.com"
                            title="Speculation is a Superpower"
                            name="SpeculationIsASuperpower"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://blakeir.com/reading-list/reading-lists-from-previous-months/september-2021-archive/why-the-most-successful-startup-ideas-are-often-seem-like-the-dumbest"
                            shortLink="blakeir.com"
                            title="Why the most successful startup ideas are often seem like the dumbest"
                            name="StartupIdeasDumbest"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://blakeir.com/reading-list/reading-lists-from-previous-months/may-2021-archive/the-day-one-fan-a-change-in-fandom"
                            shortLink="blakeir.com"
                            title="The Day One Fan. A Change in Fandom"
                            name="TheDayOneFan"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://a16z.com/2011/10/08/nobody-cares/"
                            shortLink="a16z.com"
                            title="Nobody Cares"
                            name="NobodyCares"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://www.drorpoleg.com/betting-the-firm/"
                            shortLink="drorpoleg.com"
                            title="Betting the Firm"
                            name="BettingTheFirm"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://www.thediff.co/p/the-factorio-mindset?utm_source=substack&utm_medium=email&utm_content=share"
                            shortLink="thediff.co"
                            title="The Factorio Mindset"
                            name="TheFactorioMindset"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://www.gamesindustry.biz/clone-culture-and-its-continuous-impact-on-indie-devs"
                            shortLink="gamesindustry.biz"
                            title="Clone culture and its continuous impact on indie developers"
                            name="CloneCulture"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://avc.com/2022/03/competing-to-win-deals-2/"
                            shortLink="avc.com"
                            title="Competing To Win Deals"
                            name="CompetingToWinDeals"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://lancaric.me/how-to-soft-launch-a-mobile-game-in-2022/"
                            shortLink="lancaric.me"
                            title="How to soft launch a mobile game in 2022?"
                            name="SoftLaunchAMobileGame"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://www.nateliason.com/blog/29"
                            shortLink="nateliason.com"
                            title="Lessons from Year 29 - Nat Eliason"
                            name="LessonsFromYear29"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://avc.com/2022/03/the-benefits-of-venture-capital-in-web3/"
                            shortLink="avc.com"
                            title="The Benefits Of Venture Capital In Web3"
                            name="VentureCapitalInWeb3"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://blog.samaltman.com/the-days-are-long-but-the-decades-are-short"
                            shortLink="samaltman.com"
                            title="The days are long but the decades are short"
                            name="DecadesAreShort"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://avc.com/2022/02/a-return-to-fundamentals/"
                            shortLink="avc.com"
                            title="A Return To Fundamentals"
                            name="ReturnToFundamentals"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://stratechery.com/2022/the-current-thing/"
                            shortLink="stratechery.com"
                            title="The Current Thing"
                            name="TheCurrentThing"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://dmtcapital.substack.com/p/why-crypto-gaming-is-not-the-future?s=r"
                            shortLink="substack.com"
                            title="Why crypto gaming is not the future"
                            name="CryptoGamingIsNotTheFuture"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://uxdesign.cc/the-power-of-seeing-only-the-questions-in-a-piece-of-writing-8f486d2c6d7d"
                            shortLink="uxdesign.cc"
                            title="The power of seeing only the questions in a piece of writing"
                            name="SeeingOnlyTheQuestions"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://www.lennysnewsletter.com/p/the-inside-story-of-facebook-marketplace?r=il6m&utm_source=url"
                            shortLink="lennysnewsletter.com"
                            title="The inside story of Facebook Marketplace"
                            name="InsideFacebookMarketplace"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://www.julian.com/blog/mental-model-examples"
                            shortLink="julian.com"
                            title="Mental model examples: How to actually use them"
                            name="MentalModelExamples"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://vitalik.eth.limo/general/2022/01/26/soulbound.html"
                            shortLink="vitalik.eth.limo"
                            title="Soulbound"
                            name="Soulbound"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://blakeir.com/reading-list/reading-lists-from-previous-months/february-2021-archive/user-engagement-is-code-for-addiction"
                            shortLink="blakeir.com"
                            title="“User Engagement” Is Code for “Addiction”"
                            name="UserEngagement"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://blakeir.com/reading-list/zhang-yimings-last-speech-part-i"
                            shortLink="blakeir.com"
                            title="Zhang Yiming’s Last Speech: Part I"
                            name="ZhangYiming"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://www.theatlantic.com/magazine/archive/2022/05/social-media-democracy-trust-babel/629369/"
                            shortLink="theatlantic.com"
                            title="WHY THE PAST 10 YEARS OF AMERICAN LIFE HAVE BEEN UNIQUELY STUPID"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://fictivekin.github.io/pmarchive-jekyll/guide_to_startups_part5.html"
                            shortLink="fictivekin.github.io"
                            title="The Moby Dick theory of big companies"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://pfauth.com/boekentips/psychologie-van-geld/"
                            shortLink="pfauth.com"
                            title="Acht inzichten over de psychologie van geld"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://pfauth.com/media/get-rich/"
                            shortLink="pfauth.com"
                            title="Waarom micro-influencers commercieel interessanter zijn dan de Kardashians en Hadids"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://pfauth.com/media/meelezen-met-de-dms-van-elon-musk/"
                            shortLink="pfauth.com"
                            title="Meelezen met de DM’s van Elon Musk"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://pfauth.com/intentioneel-leven/doe-de-warren-buffett-check/"
                            shortLink="pfauth.com"
                            title="Doe de Warren Buffett-check"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://blog.samaltman.com/the-strength-of-being-misunderstood"
                            shortLink="samaltman.com"
                            title="The Strength of Being Misunderstood"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://blog.samaltman.com/how-to-be-successful"
                            shortLink="samaltman.com"
                            title="How To Be Successful"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://decorrespondent.nl/13854/belastingen-makkelijker-kunnen-we-het-maar-niet-maken/833474636346-4a48f1b5"
                            shortLink="decorrespondent.nl"
                            title="Belastingen: makkelijker kunnen we het maar niet maken<"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://every.to/divinations/the-inner-ring-of-the-internet"
                            shortLink="every.to"
                            title="The Inner Ring of The Internet"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://www.vox.com/future-perfect/21728843/best-charities-donate-giving-tuesday"
                            shortLink="vox.com"
                            title="Want to donate to charity? Here are 10 guidelines for giving effectively."
                        />
                        <ArticlePage 
                            star={false}
                            link="https://blog.samaltman.com/pg-and-jessica"
                            shortLink="PG and Jessica"
                            title="samaltman.com"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://blog.samaltman.com/idea-generation"
                            shortLink="samaltman.com"
                            title="Idea Generation"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://blog.samaltman.com/hard-startups"
                            shortLink="samaltman.com"
                            title="Hard Startups"
                        />
                        <ArticlePage 
                            star={false}
                            link="http://www.paulgraham.com/talk.html"
                            shortLink="paulgraham.com"
                            title="Write Like You Talk"
                        />
                        <ArticlePage 
                            star={false}
                            link="http://www.paulgraham.com/work.html"
                            shortLink="paulgraham.com"
                            title="What Doesn't Seem Like Work?"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://theprofile.substack.com/p/content-diet"
                            shortLink="theprofile.substack.com"
                            title="How to Improve Your Content Diet in the New Year"
                        />
                        <ArticlePage 
                            star={false}
                            link="https://hbr.org/2022/08/quiet-quitting-is-about-bad-bosses-not-bad-employees"
                            shortLink="hbr.org"
                            title="Quiet Quitting Is About Bad Bosses, Not Bad Employees"
                        />
                        <ArticlePage 
                            star={false}
                            link="http://www.paulgraham.com/disagree.html"
                            shortLink="paulgraham.com"
                            title="How to Disagree"
                        />
                        <ArticlePage 
                            star={false}
                            link="http://www.paulgraham.com/hwh.html"
                            shortLink="paulgraham.com"
                            title="How to Work Hard"
                        />
                    </ul>
                </main>
            </div>
        </>
    )
}