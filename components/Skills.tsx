'use client'

import React from 'react'
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { skillsData } from '@/lib/data';
import { useSectionHooks } from '@/lib/hooks';


const fadeInAnimations = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 5,
        y: 0,
        transition: {
          delay: 0.05 * index,
        },
    }),
};

export default function Skills() {
    const { ref } = useSectionHooks("Skills");
    
  return (
    <section id='skills' ref={ref} className='
      mb-28 max-w-[53rem]
      scroll-mt-28
      text-center
      sm:mb-40
    '>
        <SectionHeading>My Skills</SectionHeading>
        <ul className='
          flex flex-wrap 
          justify-center
          gap-2 text-lg
          text-gray-800
        '>
            {
                skillsData.map((skill, index) => (
                    <motion.li
                      className='
                        bg-white
                        border
                        borderBlack
                        rounded-xl
                        px-5 py-3
                        dark:bg-white/10
                        dark:text-white/80
                      '
                      key={index}
                      initial="initial"
                      whileInView="animate"
                      variants={fadeInAnimations}
                      viewport={{ once: true}}
                      custom={index}
                    >{skill}</motion.li>
                ))
            }
        </ul>
    </section>
  )
}
