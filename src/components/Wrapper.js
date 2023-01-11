import React, {useState} from "react";
import { IntlProvider } from "react-intl"
import English from "../lang/en.json"
import Dutch from "../lang/nl.json"

export const Context = React.createContext()

const local = navigator.language;

let lang;
if (local==="en") {
    lang = English;
}  else {
    lang = Dutch;
}

export default function Wrapper(props) {
    const [locale, setLocale] = useState(local)
    const [messages, setMessages] = useState(lang)

    function selectLang(e) {
        const newLocale = e.target.value
        setLocale(newLocale)
        if (newLocale === "nl") {
            setMessages(Dutch)
        } else {
            setMessages(English)
        }
    }

    return (
        <Context.Provider value={{locale, selectLang}}>
            <IntlProvider messages={messages} locale={locale}>
                {props.children}
            </IntlProvider>
        </Context.Provider>

    )
}