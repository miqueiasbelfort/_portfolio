import React from 'react';
import {motion} from 'framer-motion';

import { FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiTypescript } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import {IoChevronBackOutline } from 'react-icons/io5'

function Tecnologies({setPage, lang}) {

  const checkLang = lang.subtitle_home.includes("Bem-vindo");

  const tecs = [
    {
      id: 0, icon: <FaHtml5 size={40} color='#ff6d00' />, title: 'HTML5', desc: lang.skills.html
    },
    {
      id: 1, icon: <FaCss3Alt size={45} color='#039be5' />, title: 'CSS3', desc: lang.skills.css
    },
    {
      id: 2, icon: <SiJavascript size={40} color='#ffd600' />, title: 'Javascript', desc: lang.skills.js
    },
    {
      id: 3, icon: <SiTypescript size={40} color='#039be5' />, title: 'Javascript', desc: lang.skills.ts
    },
    {
      id: 4, icon: <TbBrandCSharp size={40} color='#a700af' />, title: 'Javascript', desc: lang.skills.csharp
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
              <h2 className='text-sm font-bold'>{item.title}</h2>
              <p className='font-light text-xs max-w-40'>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Tecnologies;