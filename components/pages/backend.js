import React from 'react';
import {motion} from 'framer-motion';

import { FaNode } from 'react-icons/fa';
import { SiCsharp , SiFirebase, SiMysql  } from 'react-icons/si';
import {IoChevronBackOutline } from 'react-icons/io5'

function Backend({setPage, lang}) {

    const checkLang = lang.subtitle_home.includes("Bem-vindo");

    const tecs = [
        {
            id: 0, icon: <FaNode  size={40} color='#009b19' />, title: 'NODE', desc: lang.skills.node
        },
        {
            id: 1, icon: <SiFirebase size={45} color='#ffd400' />, title: 'FIREBASE', desc: lang.skills.firebase
        },
        {
            id: 2, icon: <SiMysql size={50} color=''  />, title: 'MySQL', desc: lang.skills.mysql
        },
        {
            id: 3, icon: <SiCsharp  size={40} color='#b103c4' />, title: '.NET', desc: lang.skills.net
        },
    ];

    return (
        <motion.div 
            className='h-full md:w-full flex flex-col justify-center px-10'
            initial={{x: 100, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{delay: 0.2}}
        >
            <h1 onClick={() => setPage("desktop")} className='text-center flex items-center justify-center text-lg font-semibold transition-transform hover:underline cursor-[url("../public/pointer.png"),_pointer]'><IoChevronBackOutline /> {checkLang ? "Voltar" : "Back"}</h1>
            <div className='w-full justify-center flex flex-col lg:flex-row flex-wrap gap-5'>
                {tecs.map(item => (
                    <div key={item.id} className='flex gap-3 justify-center items-center w-full lg:w-80'>
                        {item.icon}
                        <div>
                            <h2 className='text-lg font-bold'>{item.title}</h2>
                            <p className='font-light text-xs max-w-40'>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Backend;