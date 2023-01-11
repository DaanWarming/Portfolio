import { Link } from "react-router-dom";
import ReadingListNavBar from "./ReadingListNavBar";
import ReadingListStyles from "./ReadingList.module.css"

export default function ReadingList() {
    return (
        <>
            <ReadingListNavBar />
            <div className={ReadingListStyles["reading-list--container"]}>
                <main className={ReadingListStyles["reading-list"]}>
                    <div className={ReadingListStyles["reading-list__book-icon"]}>📕</div>
                    <h1 className={ReadingListStyles["reading-list__title"]} >Reading List</h1>
                    <p className={ReadingListStyles["reading-list__sub-text"]}>Links to reading lists from different years</p>
                    <p className={ReadingListStyles["reading-list__sub-text--date"]}>(Updated: 07.01.2023)</p>
                    <div className={ReadingListStyles["reading-list__books-icon"]}>📚</div>
                    <ul className={ReadingListStyles["reading-list__list"]} >
                        <li className={ReadingListStyles["reading-list__article--container"]}>
                            <div className={ReadingListStyles["reading-list__icon-article"]}>
                                <span className={ReadingListStyles["reading-list__star-icon"]}>📅</span>
                                <Link to="/ReadingList23" className={ReadingListStyles["reading-list__year"]}>Reading List 2023</Link>
                            </div>
                        </li>
                        <li className={ReadingListStyles["reading-list__article--container"]}>
                            <div className={ReadingListStyles["reading-list__icon-article"]}>
                                <span className={ReadingListStyles["reading-list__star-icon"]}>📅</span>
                                <Link to="/ReadingList22" className={ReadingListStyles["reading-list__year"]}>Reading List 2022</Link>
                            </div>
                        </li>
                    </ul>
                </main>
            </div>
        </>
    )
}