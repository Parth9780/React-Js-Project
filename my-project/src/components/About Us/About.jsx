import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { motion } from 'framer-motion'
import { fadeUp } from '../Services/Services'

function About() {
    const CategoryData = [
        {
            "img": "https://i.pinimg.com/originals/d9/c6/db/d9c6dbb476b30b250c5a73e003aa5296.jpg",
            "title": "All Premium Sound Product's and less Price And More Offers Headphone",
            "Sub": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore provident at accusantium totam omnis sequi dolorum sit itaque! Qui nisi adipisci rerum fugiat natus quae sit magnam quaerat veritatis voluptate."
        },
        {
            "img": "https://img.freepik.com/premium-photo/set-wireless-headphones-banner-ads-advertising-sound-quality-ima-creative-design-concept-ideas_655090-1106972.jpg",
            "title": "Market Now Product launch then First we are available on Stock.",
            "Sub": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore provident at accusantium totam omnis sequi dolorum sit itaque! Qui nisi adipisci rerum fugiat natus quae sit magnam quaerat veritatis voluptate."
        },
        {
            "img": "https://indiater.com/wp-content/uploads/2018/02/happy-holi-festival-sale-offer-banner-free-psd-990x980.jpg",
            "title": "All Indian Fastival offer are now to minimum 40% off on all Product.",
            "Sub": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore provident at accusantium totam omnis sequi dolorum sit itaque! Qui nisi adipisci rerum fugiat natus quae sit magnam quaerat veritatis voluptate."
        }
    ]
    return (
        <>
            <Navbar />
            <section className='bg-gray-300 pb-12'>
                <div className=''>
                    <div className='py-20'>
                        <motion.h1 variants={fadeUp(0.2)} initial="hidden" whileInView="show" className='text-4xl text-center text-rose-500 font-poppins font-semibold'>About us</motion.h1>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 px-20 gap-y-14'>
                        {CategoryData && CategoryData.map((row) => {
                            return (
                                <>
                                    <div className='text-center'>
                                        <motion.img variants={fadeUp(row.delay)} initial="hidden" whileInView="show" src={row.img} className='w-96 h-96 border-2 rounded-2xl' alt="" />
                                    </div>
                                    <div className='w-full'>
                                        <motion.h1 variants={fadeUp(0.3)} initial="hidden" whileInView="show" className='text-5xl font-serif text-start text-gray-800'>{row.title}</motion.h1>
                                        <motion.p variants={fadeUp(0.5)} initial="hidden" whileInView="show" className='text-xl py-4 text-gray-700 font-varela'>{row.Sub}</motion.p>
                                        <motion.button variants={fadeUp(0.7)} initial="hidden" whileInView="show" className='p-3 my-4 border-2 rounded-sm bg-gradient-to-tr from-blue-500 to-purple-600'>More Details</motion.button>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About