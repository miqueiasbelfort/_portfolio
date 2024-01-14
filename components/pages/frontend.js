import React from 'react';
import {motion} from 'framer-motion';

import { FaReact, FaAngular  } from 'react-icons/fa';
import Image from 'next/image';
import Next from '@/public/next.svg';
import { SiBlazor } from 'react-icons/si';
import {IoChevronBackOutline } from 'react-icons/io5'

function Frontend({setPage, lang}) {

    const checkLang = lang.subtitle_home.includes("Bem-vindo");

    const tecs = [
        {
            id: 0, icon: <FaReact size={40} color='#039be5' />, title: 'REACT', desc: lang.skills.react
        },
        {
            id: 1, icon: <FaReact size={45} color='#0064b7' />, title: 'REACT NATIVE', desc: lang.skills.react_native
        },
        {
            id: 2, icon: <Image src={Next} alt='' className='w-9 h-9'/>, title: 'NEXTJS', desc: lang.skills.next
        },
        {
            id: 3, icon: <SiBlazor size={45} color='#b103c4' />, title: 'BLAZOR', desc: lang.skills.blazor
        },
        {
            id: 4, icon: <FaAngular  size={40} color='#d60000' />, title: 'ANGULAR', desc: lang.skills.angular
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
            <div className='w-full justify-center flex flex-col lg:flex-row flex-wrap gap-5'>
                {tecs.map(item => (
                    <div key={item.id} className='flex gap-3 justify-center items-center w-full lg:w-80'>
                        {item.icon}
                        <div>
                            <h2 className='text-sm md:text-lg font-bold'>{item.title}</h2>
                            <p className='font-light text-xs max-w-40'>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Frontend;