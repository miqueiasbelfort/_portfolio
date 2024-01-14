import React from 'react';
import {motion} from 'framer-motion';

import { FaGitAlt, FaDocker } from 'react-icons/fa';
import {IoChevronBackOutline } from 'react-icons/io5'

function Tools({setPage, lang}) {
    
    const checkLang = lang.subtitle_home.includes("Bem-vindo");

    const tecs = [
        {
            id: 0, icon: <FaGitAlt   size={40} color='#e87000' />, title: 'GIT', desc: lang.skills.git
        },
        {
            id: 1, icon: <FaDocker size={40} color='#00b6ff' />, title: 'DOCKER', desc: lang.skills.docker
        },
    ];

    return (
        <motion.div 
            className='h-full flex flex-col justify-center px-10'
            initial={{x: 100, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{delay: 0.2}}
        >
            <h1 onClick={() => setPage("desktop")} className='text-center flex items-center justify-center text-lg font-semibold transition-transform hover:underline cursor-[url("../public/pointer.png"),_pointer]'><IoChevronBackOutline /> {checkLang ? "Voltar" : "Back"}</h1>
            <div className='w-full justify-center flex flex-col lg:flex-row flex-wrap gap-2 px-5 max-w-[1053px]:gap-5'>
                {tecs.map(item => (
                    <div key={item.id} className='flex gap-3 justify-center items-center w-full lg:w-80'>
                        {item.icon}
                        <div>
                            <h2 className='text-lg font-bold'>{item.title}</h2>
                            <p className='font-light text-sm'>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Tools;