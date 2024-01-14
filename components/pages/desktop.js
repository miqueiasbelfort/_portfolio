import React from 'react';
import {motion} from 'framer-motion';
import { Code2, Monitor, Database, Wrench } from 'lucide-react';

function Desktop({setPage, lang}) {

    const checkLang = lang.subtitle_home.includes("Bem-vindo");

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
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

    return (
        <motion.div 
            className='flex flex-col flex-wrap items-center justify-center w-full h-full gap-3'
            variants={container}
            initial="hidden"
            animate="visible"
        >

            <div className='flex items-center gap-3 flex-col lg:flex-row'>
                <motion.div onClick={() => setPage("langs")} className='flex items-center gap-3 h-24 w-60 lg:h-40 lg:w-80 text-center justify-center p-3 shadow-md border cursor-[url("../public/pointer.png"),_pointer] transition-shadow rounded-md hover:shadow-xl' variants={item}>
                    <h2 className='text-xl font-bold'>{checkLang ? "Linguagens de Programação" : "Programming Languages"}</h2>
                    <Code2 className='w-10 h-10' />
                </motion.div>
                <motion.div onClick={() => setPage("front")} className='flex items-center gap-3 h-24 w-60 lg:h-40 lg:w-80 text-center justify-center p-3 shadow-md border cursor-[url("../public/pointer.png"),_pointer] transition-shadow rounded-md hover:shadow-xl' variants={item}>
                    <h2 className='text-xl font-bold'>Frontend</h2>
                    <Monitor className='w-10 h-10' />
                </motion.div>
            </div>

            <div className='flex items-center gap-3 flex-col lg:flex-row'>
                <motion.div onClick={() => setPage("back")} className='flex items-center gap-3 h-24 w-60 lg:h-40 lg:w-80 text-center justify-center p-3 shadow-md border cursor-[url("../public/pointer.png"),_pointer] transition-shadow rounded-md hover:shadow-xl' variants={item}>
                    <h2 className='text-xl font-bold'>Backend</h2>
                    <Database className='w-10 h-10' />
                </motion.div>
                <motion.div onClick={() => setPage("tools")} className='flex items-center gap-3 h-24 w-60 lg:h-40 lg:w-80 text-center justify-center p-3 shadow-md border cursor-[url("../public/pointer.png"),_pointer] transition-shadow rounded-md hover:shadow-xl' variants={item}>
                    <h2 className='text-xl font-bold'>{checkLang ? "Suporte"  : "Tools"}</h2>
                    <Wrench className='w-10 h-10' />
                </motion.div>
            </div>

        </motion.div>
    )
}

export default Desktop;