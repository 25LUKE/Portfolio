'use client'

import React from 'react';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { useSectionHooks } from '@/lib/hooks';
import { sendEmail } from '@/actions/setEmail';
import SubmitBtn from './Submit-btn';
import toast from 'react-hot-toast'

export default function Contact() {
    const { ref } = useSectionHooks("Contact")
  return (
    <motion.section ref={ref} id="contact" className='
        mb-20
        sm:mb-28
        w-[min(100%,38rem)]
        text-center'
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1
        }}
        viewport={{
            once: true,
        }}
    >
        <SectionHeading>Contact Me</SectionHeading>
        <p className='text-gray-700 -mt-6 dark:text-white/80'>
            Please contact me directly at{" "}
            <a className='underline' href='ericluke25@gmail.com'>
                EricLuke@gmail.com
            </a>{" "}
                or through this form
        </p>
        <form className='mt-10 flex flex-col dark:text-black'
            action={async (formData) => {
                const { data, error} = await sendEmail(formData);

                if (error) {
                    toast.error(error);
                    return
                }
                toast.success("Email sent successfully!");
            }}
        >
            <input className='
                h-14 
                px-4 
                rounded-lg 
                borderBlack
                dark:bg-white
                dark:bg-opacity-80
                dark:focus:bg-opacity-100 
                dark:outline-none
                transition-all' 
                type='Email'
                required
                name='sendEmail'
                maxLength={500}
                placeholder='Your email' 
        />
            <textarea className='
                h-52
                p-4 
                my-3
                rounded-lg 
                borderBlack
                dark:bg-white
                dark:bg-opacity-80
                dark:focus:bg-opacity-100 
                dark:outline-none
                transition-all'
                required
                name='message'
                placeholder='Your message'
                maxLength={5000}
            />
            <SubmitBtn />
        </form>
    </motion.section>
  )
}
