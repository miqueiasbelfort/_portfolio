import { createContext, useState } from "react";
import { useRouter } from 'next/router';

export const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [lang, setLang] = useState("en");
    const router = useRouter();

    const changeLang = () => {
        localStorage.setItem("lang", lang == "pt" ? "en" : "pt");
        setLang(lang == "pt" ? "en" : "pt");
        router.reload();
    };

    return (
        <AppContext.Provider
            value={{lang, setLang, changeLang}}
        >
            {children}
        </AppContext.Provider>
    );
};