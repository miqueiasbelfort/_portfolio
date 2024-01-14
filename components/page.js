import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { Lightbulb, TextSelect, PencilRuler, Home } from "lucide-react";

import EUA from '@/public/icones/eua.png';
import BR from '@/public/icones/brasil.png';
import { useEffect, useContext } from "react";
import { AppContext } from "@/context/context"

export default function Page({ children }) {

    const pathname = usePathname();
    const { lang, setLang, changeLang } = useContext(AppContext);

    const getLang = () => {
        const langStore = localStorage.getItem('lang');
        if (langStore) {
            setLang(langStore);
        };
    };

    useEffect(() => {
        getLang();
    }, [])

    return (
        <div className={cn("relative w-full h-screen overflow-x-hidden", pathname === "/" ? "cursor-[url('../public/cursorwhite.png'),_pointer]" : "cursor-[url('../public/cursor.png'),_pointer]")}>
            <div className="fixed top-3 right-32 z-10">
                <button onClick={changeLang} className={cn("absolute flex items-center gap-2 transition-opacity opacity-80 hover:opacity-100", pathname === '/' ? 'text-white' : 'text-slate-500 cursor-[url("../public/pointer.png"),_pointer]')} href="/about">
                    {lang == "en" ? <>English <Image className="w-4 h-4" src={EUA} alt="eua" /></> : <>Portuguese <Image className="w-4 h-4" src={BR} alt="brasil" /></>}
                </button>
            </div>
            <main className="absolute left-0 top-0 w-full h-screen">{children}</main>
            <div className="fixed bottom-72 left-5 ">
                <ul className={cn("absolute z-20 border p-3 w-10 h-60 rounded-md flex flex-col items-center justify-around", pathname === '/' ? 'border-white text-white' : 'border-slate-500 text-slate-500')}>
                    <li>
                        <Link className={pathname !== "/" ? 'cursor-[url("../public/pointer.png"),_pointer] transition-colors hover:text-slate-900' : 'transition-colors hover:text-slate-400'} href="/"><Home /></Link>
                    </li>
                    <li>
                        <Link className={pathname !== "/" ? 'cursor-[url("../public/pointer.png"),_pointer] transition-colors hover:text-slate-900' : 'transition-colors hover:text-slate-400'} href="/about"><TextSelect /></Link>
                    </li>
                    <li>
                        <Link className={pathname !== "/" ? 'cursor-[url("../public/pointer.png"),_pointer] transition-colors hover:text-slate-900' : 'transition-colors hover:text-slate-400'} href="/projects"><Lightbulb /></Link>
                    </li>
                    <li>
                        <Link className={pathname !== "/" ? 'cursor-[url("../public/pointer.png"),_pointer] transition-colors hover:text-slate-900' : 'transition-colors hover:text-slate-400'} href="/skills"><PencilRuler /></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};