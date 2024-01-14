import { Quicksand } from 'next/font/google'
import Page from '@/components/page';
import BorderBtn from '@/components/borderBtn';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";

// Icones
import LinkedIn from '@/public/icones/linkedIn.svg';
import Instagram from '@/public/icones/Instagram.svg';
import Github from '@/public/icones/github.svg';

const inter = Quicksand({ subsets: ['latin'] });

import language from '@/lib/lang.json';
import { useEffect, useState } from 'react';

export default function Home() {

  const [lang, setLang] = useState(language.en);

  useEffect(() => {
    const storage = localStorage.getItem("lang");
    if(storage == "pt"){
      setLang(language.pt);
    };
  }, [])

  return (
    <Page>
      <div className={inter.className}>
        <div className="w-full h-screen bg-black bg-[url('../public/bg.svg')] cursor-[url('../public/cursorwhite.png'),_pointer] bg-cover">
          <motion.div
            className='w-full h-full text-center flex flex-col items-center justify-center text-white'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className='text-6xl font-bold'>Miqueias Belfort</h1>
            <h2 className='text-2xl'>{lang.subtitle_home}</h2>
            <div className='flex flex-col md:flex-row items-center gap-5 justify-center mt-5'>
              {lang.buttos_home.map(item => (
                <BorderBtn onClick={() => {
                  window.location.href = item.href;
                }} key={item.title}>{item.title}</BorderBtn>
              ))}
            </div>
            <div className='flex items-center justify-center gap-5 mt-5'>
              <Link href="https://www.linkedin.com/in/miqueias-belfort/">
                <Image src={LinkedIn} alt='LinkedIn' />
              </Link>
              <Link href="https://www.instagram.com/miqueiasbelfort/">
                <Image src={Instagram} alt='Instagram' />
              </Link>
              <Link href="https://github.com/miqueiasbelfort">
                <Image src={Github} alt='Github' />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </Page>
  )
}
