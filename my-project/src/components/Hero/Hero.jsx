import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaWhatsapp } from 'react-icons/fa6';
import { easeIn, easeInOut, motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const Hero = () => {
    const fadeUp = (delay) => {
        return {
            hidden: {
                opacity: 0,
                y: 100,
                scale: 0.5
            },
            show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                    duration: 0.5,
                    delay: delay,
                    ease: easeInOut
                }
            },
            exit: {
                opacity: 0,
                y: 50,
                scale: 0.5,
                transition: {
                    duration: 0.2,
                    ease: easeInOut,
                },
            },
        };
    };
    const headphoneData =
        [
            {
                "id": 1,
                "title": "Headphone Wireless",
                "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
                "price": "$100",
                "modal": "Modal Brown",
                "bgColor": "#8b5958",
                "image": "https://headphone-tcj.netlify.app/assets/headphone-CY2fcZLy.png"
            },
            {
                "id": 2,
                "title": "Headphone Wireless2",
                "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
                "price": "$100",
                "modal": "Lime Green",
                "bgColor": "#638153",
                "image": "https://headphone-tcj.netlify.app/assets/headphone2-DHQ3ooWG.png"
            },
            {
                "id": 3,
                "title": "Headphone Wireless3",
                "subtitle": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
                "price": "$100",
                "modal": "Ocean Blue",
                "bgColor": "#5d818c",
                "image": "https://headphone-tcj.netlify.app/assets/headphone3-C5p0CIOf.png"
            }
        ]
    const [activeData, setActiveData] = React.useState(headphoneData[0]);
    const handleActiveData = (data) => {
        setActiveData(data);
    }
    return (
        <>
            <section className='bg-brandDark text-white font-varela'>
                <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[700px]'>
                    {/* __________ Headphone Info __________ */}
                    <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]'>
                        <div className='space-y-5 text-center md:text-left'>
                            <AnimatePresence mode='wait'>
                                <motion.h1 key={activeData.id} variants={fadeUp(0.2)} initial="hidden" animate="show" exit="exit" className='text-3xl lg:text-6xl font-bold font-varela '>{activeData.title}</motion.h1>
                            </AnimatePresence>
                            <AnimatePresence mode='wait'>
                                <motion.p key={activeData.id} variants={fadeUp(0.3)} initial="hidden" animate="show" exit="exit" className='text-sm leading-loose text-white/80'>{activeData.subtitle}</motion.p>
                            </AnimatePresence>
                            <AnimatePresence mode='wait'>
                                <motion.button key={activeData.id} variants={fadeUp(0.3)} initial="hidden" animate="show" exit="exit"
                                    style={{ backgroundColor: activeData.bgColor }} className='px-4 py-2 inline-block font-normal rounded-sm'>Buy and Listen</motion.button>
                            </AnimatePresence>
                            {/* __________ Headphone List Separator __________ */}
                            <div className='flex items-center justify-center md:justify-start gap-4 !mt-24'>
                                <div className='w-20 h-[1px] bg-white'></div>
                                <p className='uppercase text-sm'>Top Headphones for you </p>
                                <div className='w-20 h-[1px] bg-white'></div>
                            </div>
                            {/* Headphone list switcher */}
                            <div className='grid grid-cols-3 gap-10'>
                                {headphoneData.map((item) => {
                                    return (
                                        <div key={item.id} onClick={() => handleActiveData(item)} className='grid grid-cols-2 place-items-center cursor-pointer'>
                                            <div>
                                                <img src={item.image} alt="" className='w-[200px]' />
                                            </div>
                                            <div className='space-y-2'>
                                                <p className='text-base font-bold'>{item.price}</p>
                                                <p className='text-xs font-normal text-nowrap'>{item.modal}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    {/* __________ Hero Image __________ */}
                    <div className='flex flex-col justify-end items-center'>
                        <AnimatePresence mode='wait'>
                            <motion.img
                            key={activeData.id}
                            initial={{opacity: 0, scale: 0.9, y: 100}}
                            animate={{opacity: 1, scale: 1, y: 0 }}
                            transition={{duration: 0.4, delay: 0.2, ease: easeInOut}}
                            exit={{opacity: 0, scale: 0.9, y: 100, transition:{
                                duration: 0.2,
                            }, }}
                            src={activeData.image} alt="" className='w-[300px] md:w-[400px] xl:w-[550px] ' />
                        </AnimatePresence>
                    </div>
                    {/* __________ WhatsApp Icon __________ */}
                    <div className='text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference'>
                        <a href="#">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero