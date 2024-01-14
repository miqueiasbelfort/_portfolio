import Page from '@/components/page';
import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';

import Desktop from '@/components/pages/desktop';
import Tecnologies from '@/components/pages/tecnologies';
import Frontend from '@/components/pages/frontend';
import Backend from '@/components/pages/backend';
import Tools from '@/components/pages/tools';

import language from '@/lib/lang.json';

function Skills() {

  const [page, setPage] = useState("desktop");
  const [lang, setLang] = useState(language.en);
  const checkLang = lang.subtitle_home.includes("Bem-vindo");

  useEffect(() => {
    const langStore = localStorage.getItem("lang");
    if (langStore == "pt") {
      setLang(language.pt);
    };
  }, []);

  return (
    <Page>
      <div className='w-full h-[calc(100%)] overflow-y-hidden'>
        <div className='ml-12 mt-5'>
          <motion.h1
            className="text-4xl font-bold underline"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            {checkLang ? "Habilidades" : "Skills"}
          </motion.h1>
        </div>
        <div className='w-full h-full flex justify-center'>
          
          {/* Tela grande */}
          <div className='hidden lg:block bg-[url("../public/desktop.svg")] w-[70%] h-[80%] bg-contain bg-center bg-no-repeat'>
            {page == "desktop" && <Desktop setPage={setPage} lang={lang}/>}
            {page == "langs" && <Tecnologies setPage={setPage} lang={lang}/>}
            {page == "front" && <Frontend setPage={setPage} lang={lang}/>}
            {page == "back" && <Backend setPage={setPage} lang={lang}/>}
            {page == "tools" && <Tools setPage={setPage} lang={lang}/>}
          </div>

          {/* Tela pequena */}
          <div className='block lg:hidden bg-[url("../public/mobile.svg")] w-[70%] h-[80%] bg-contain bg-center bg-no-repeat'>
            {page == "desktop" && <Desktop setPage={setPage} lang={lang}/>}
            {page == "langs" && <Tecnologies setPage={setPage} lang={lang}/>}
            {page == "front" && <Frontend setPage={setPage} lang={lang}/>}
            {page == "back" && <Backend setPage={setPage} lang={lang}/>}
            {page == "tools" && <Tools setPage={setPage} lang={lang}/>}
          </div>

        </div>
      </div>
    </Page>
  )
}

export default Skills;