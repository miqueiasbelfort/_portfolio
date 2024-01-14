import Page from '@/components/page';
import React, {useState, useEffect, useRef} from 'react';
import {motion} from 'framer-motion';
import language from '@/lib/lang.json';
import Link from 'next/link';

function Projects() {

  const [lang, setLang] = useState(language.en);

  const constraintsRef01 = useRef(null);
  const constraintsRef02 = useRef(null);
  const constraintsRef03 = useRef(null);
  const constraintsRef04 = useRef(null);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.4
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  useEffect(() => {
    const storage = localStorage.getItem("lang");
    if (storage == "pt") {
        setLang(language.pt);
    };
  }, []);

  return (
    <Page>
      <div className='pb-4'>
        <div className='ml-12 mt-5'>
          <motion.h1 
            className="text-4xl font-bold underline"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            {lang.subtitle_home.includes("Bem-vindo") ? "Projetos" : "Projects"}
          </motion.h1>
        </div>
        <motion.div 
          className='w-full h-full flex justify-center flex-col gap-3 mt-3'
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className='w-full flex flex-wrap items-center justify-center'>
            <div className='flex flex-col md:flex-row items-center gap-2'>

              <motion.div className='flex items-start justify-start max-w-80 gap-2' variants={item}>
                <motion.div className='w-[50%] h-72 flex items-center justify-center rounded-md' ref={constraintsRef01}>
                  <motion.div className='bg-black w-full h-full rounded-md bg-[url("../public/netflix.png")] bg-center object-cover bg-cover' drag dragConstraints={constraintsRef01}></motion.div>
                </motion.div>
                <Link className='w-[50%] cursor-[url("../public/pointer.png"),_pointer]' href="https://gilded-cendol-41dfe7.netlify.app/">
                  <h3 className='text-lg font-semibold'>{lang.projects.pro01.title}</h3>
                  <span className='text-sm font-light'>{lang.projects.pro01.text}</span>
                </Link>
              </motion.div>

              <motion.div className='flex items-start justify-start max-w-80 gap-2' variants={item}>
                <motion.div className='w-[50%] h-72 flex items-center justify-center rounded-md' ref={constraintsRef02}>
                  <motion.div className='bg-black w-full h-full rounded-md bg-[url("../public/chat-online.png")] bg-center bg-cover' drag dragConstraints={constraintsRef02}></motion.div>
                </motion.div>
                <Link className='w-[50%] cursor-[url("../public/pointer.png"),_pointer]' href="https://superchat-react-ts.netlify.app/">
                  <h3 className='text-lg font-semibold'>{lang.projects.pro02.title}</h3>
                  <span className='text-sm font-light'>{lang.projects.pro02.text}</span>
                </Link>
              </motion.div>

            </div>
          </div>
          <div className='w-full flex flex-wrap justify-center md:ml-[160px]'>
            <div className='flex flex-col md:flex-row items-center gap-2'>

              <motion.div className='flex items-start justify-start max-w-80 gap-2' variants={item}>
                <motion.div className='w-[50%] h-72 flex items-center justify-center rounded-md' ref={constraintsRef03}>
                  <motion.div className='bg-[#0f172a] w-full h-full rounded-md bg-[url("../public/spaceworks.png")] bg-center bg-contain bg-no-repeat' drag dragConstraints={constraintsRef03}></motion.div>
                </motion.div>
                <Link className='w-[50%] cursor-[url("../public/pointer.png"),_pointer]' href="https://github.com/miqueiasbelfort/spaceworks">
                  <h3 className='text-lg font-semibold'>{lang.projects.pro03.title}</h3>
                  <span className='text-sm font-light'>{lang.projects.pro03.text}</span>
                </Link>
              </motion.div>

              <motion.div className='flex items-start justify-start max-w-80 gap-2' variants={item}>
                <motion.div className='w-[50%] h-72 flex items-center justify-center rounded-md' ref={constraintsRef04}>
                  <motion.div className='bg-[#1d232a] w-full h-full rounded-md bg-[url("../public/flashcardIa.png")] bg-center bg-contain bg-no-repeat' drag dragConstraints={constraintsRef04}></motion.div>
                </motion.div>
                <Link className='w-[50%] cursor-[url("../public/pointer.png"),_pointer]' href="https://github.com/miqueiasbelfort/flashcardIA">
                  <h3 className='text-lg font-semibold'>{lang.projects.pro04.title}</h3>
                  <span className='text-sm font-light'>{lang.projects.pro04.text}</span>
                </Link>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </Page>
  )
}

export default Projects;