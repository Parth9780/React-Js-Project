import React from 'react'
import Blogs1 from "../../assets/blogs/blog1.jpg"
import Blogs2 from "../../assets/blogs/blog2.jpg"
import Blogs3 from "../../assets/blogs/blog3.jpg"
import Blogs4 from "../../assets/blogs/blog4.jpg"
import { motion } from 'framer-motion'
import { img, link } from 'framer-motion/client'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const BlogsData = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
        link: "#",
        img: Blogs1,
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
        link: "#",
        img: Blogs2,
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
        link: "#",
        img: Blogs3,
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
        link: "#",
        img: Blogs4,
    },
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
        link: "#",
        img: Blogs1,
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
        link: "#",
        img: Blogs2,
    },
    {
        id: 3,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
        link: "#",
        img: Blogs3,
    },
    {
        id: 4,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!",
        link: "#",
        img: Blogs4,
    },
]
const Blog = () => {
    return (
        <>
            <Navbar />
            <section className='bg-gray-50'>
                <div className='container py-14'>
                    <h1 className='text-3xl font-bold text-center font-poppins pb-8'>Blogs</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                        {BlogsData.map((data) => {
                            return (
                                <>
                                    <div className='flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300'>
                                        <img src={data.img} alt="" />
                                        <div className='space-y-2'>
                                            <h1 className='text-xl font-bold line-clamp-2'>{data.title}</h1>
                                            <p className='line-clamp-2'>{data.desc}</p>
                                        </div>
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

export default Blog