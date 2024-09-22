import React from 'react'
import { MdMenu } from "react-icons/md";
import { SlEarphones } from 'react-icons/sl';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { MdOutlineAccountCircle  } from 'react-icons/md';

const Navbar = () => {
    const NavMenu = [
        {
            id: 1,
            title: "Home",
            link: "/"
        },
        {
            id: 2,
            title: "Shop Now",
            link: "/shopnow"
        },
        {
            id: 3,
            title: "Blog",
            link: "/blogs"
        },
        {
            id: 4,
            title: "About",
            link: "/about"
        },
        {
            id: 5,
            title: "Contact",
            link: "/contacts"
        },
    ]
    return (
        <>
            <div className='bg-brandDark text-white py-8 font-varela'>
                <motion.nav
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration: 1, delay: 0.5}}
                className='container flex justify-between items-center'>
                    {/* ___________ Logo section __________ */}
                    <div>
                        <Link to="#" className='text-xl font-bold uppercase'>
                            Playing / <span className='font-extralight text-white/70'>Market</span>
                        </Link>
                    </div>
                    {/* ___________ Menu section __________ */}
                    <div className='hidden md:block'>

                        <ul className='flex items-center gap-4'>
                            {NavMenu && NavMenu.map((item) => {
                                return (<>
                                    <li key={item.id} className='inline-block text-sm py-2 px-3 uppercase'>
                                            <Link to={item.link}>{item.title} </Link>
                                    </li>
                                </>)
                            })}
                            <Link to={"/cart"} className='text-xl ps-14'>
                                <SlEarphones />
                            </Link>
                            <button className='text-2xl ps-3'>
                                <MdOutlineAccountCircle   />
                            </button>
                        </ul>
                    </div>
                    {/* ___________ Mobile Hamburger section __________ */}
                    <div className='md:hidden'>
                        <MdMenu className='text-4xl' />
                    </div>
                </motion.nav>
            </div>
        </>
    )
}
export default Navbar