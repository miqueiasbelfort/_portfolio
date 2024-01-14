import Page from "@/components/page";
import { Undo2 } from 'lucide-react';
import Link from "next/link";

import language from "@/lib/lang.json";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

export default function About() {

    const [lang, setLang] = useState(language.en);

    useEffect(() => {
        const storage = localStorage.getItem("lang");
        if (storage == "pt") {
            setLang(language.pt);
        };
    }, [])

    return (
        <Page>
            <div>
                <motion.div
                    className="flex items-center gap-3 ml-12 mt-5"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <Link className='cursor-[url("../public/pointer.png"),_pointer]' href="/">
                        <Undo2 className="h-5 w-5" />
                    </Link>
                    <h1 className="text-4xl font-bold underline">{lang.subtitle_home.includes("Bem-vindo") ? "Sobre mim" : "About me"}</h1>
                </motion.div>
                <div className="w-full h-full flex items-center justify-center px-20 mt-5">
                    <div className="w-full flex flex-col">
                        <motion.div 
                            className="flex md:items-start"
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            initial="hidden" 
                            animate="visible" 
                            transition={{duration: .8, delay: 1}}
                        >
                            <p className="max-w-xl text-xl font-semibold">{lang.about_texts.text01}</p>
                        </motion.div>
                        <motion.div 
                            className="flex md:justify-end"
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            initial="hidden" 
                            animate="visible" 
                            transition={{duration: .8, delay: 1}}
                        >
                            <p className="md:text-right max-w-xl text-xl font-semibold">{lang.about_texts.text02}</p>
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            initial="hidden" 
                            animate="visible" 
                            transition={{duration: .8, delay: 1}}
                        >
                            <p className="max-w-xl text-xl font-semibold">{lang.about_texts.text03}</p>
                        </motion.div>
                        <motion.div 
                            className="flex md:justify-center md:mt-5"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden" 
                            animate="visible" 
                            transition={{duration: .8, delay: 1}}
                        >
                            <p className="md:text-center max-w-xl text-xl font-semibold">{lang.about_texts.text04}</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Page>
    );
};