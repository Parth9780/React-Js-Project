import React, { useRef, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import axios from 'axios';
import Swal from 'sweetalert2';

function ContactUs() {
    const [data, setData] = useState([]);

    // stored all data in variables
    const Name = useRef("");
    const Number = useRef("");
    const Email = useRef("");
    const Message = useRef("");

    // Add data
    const AddFormHandeler = (e) => {
        e.preventDefault();
        var insert = {
            Name: Name.current.value,
            Number: Number.current.value,
            Email: Email.current.value,
            Message: Message.current.value
            
        }

        axios.post(`http://localhost:8000/contacts`, insert).then(() => {
            // pass a message
            Swal.fire({
                title: "Wow",
                text: "Message Send success fully.",
                icon: "success"
            });
        })
        e.target.reset();
    }


    return (
        <>
            <Navbar />
            <section className=''>
                <div className='lg:flex inline-block bg-gray-300'>
                    <div className='py-12 px-5 text-gray-800 lg:w-8/12 '>
                        <div>
                            <h1 className='text-3xl font-semibold font-poppins py-3'>
                                Why Choose Us
                            </h1>
                            <h1 className='border-b-2 border-gray-800 w-60'></h1>
                            <ul className='text-justify py-10'>
                                <li className='py-2'>
                                    <h2 className='text-2xl font-varela'>PRIVACY POLICY</h2>
                                    <p className='text-lg font-sans text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, qui. Iusto minus quae nesciunt exercitationem aliquam voluptatibus nam! Cupiditate consequatur mollitia iusto sapiente obcaecati? Saepe nulla velit veniam assumenda molestiae.</p>
                                </li>
                                <li className='py-2'>
                                    <h2 className='text-2xl font-varela'>Delivery related</h2>
                                    <p className='text-lg font-sans text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iure voluptatem perspiciatis, commodi fuga, ducimus laboriosam possimus aperiam molestiae doloremque itaque tenetur expedita atque nisi, tempora consectetur. Nulla, dicta doloremque!</p>
                                </li>
                                <li className='py-2'>
                                    <h2 className='text-2xl font-varela'>Refunds related</h2>
                                    <p className='text-lg font-sans text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consectetur, doloribus vel id praesentium nisi exercitationem consequuntur, pariatur quo sequi repudiandae iure quasi ratione similique laudantium quas nihil quae est?</p>
                                </li>
                                <li className='py-2'>
                                    <h2 className='text-2xl font-varela'>Payment</h2>
                                    <p className='text-lg font-sans text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officiis consequuntur nostrum eius, odit provident laudantium architecto ipsa voluptatibus consequatur velit corporis pariatur tempore quam, fugit esse similique itaque eaque!</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='lg:w-4/12'>
                        <div className='py-10'>
                            <img src="https://headphone-tcj.netlify.app/assets/headphone-CY2fcZLy.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className='lg:flex inline-block py-12 md:p-12'>
                    <div className='w-full lg:w-6/12'>
                        <div className=''>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779775.692308842!2d68.28522102945787!3d22.3087589073456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6acd5b4b0985%3A0x544235ebb4017fbd!2sHeadphone%20Zone!5e0!3m2!1sen!2sin!4v1726671828035!5m2!1sen!2sin"
                                style={{ border: 0 }}
                                height={460}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className='rounded-xl w-96 lg:w-full'
                            />
                        </div>
                    </div>
                    <div className='px-8 w-10/12 lg:w-6/12 mx-auto'>
                        <div className='text-gray-800'>
                            <h1 className='text-3xl font-semibold font-poppins border-b-2 border-gray-800 py-3'>Contact's With Us</h1>
                        </div>
                        <form className='py-10' onSubmit={AddFormHandeler}>
                            <div className='grid grid-cols-2'>
                                <div className='mb-3 px-3'>
                                    <label htmlFor="exampleFormControlTextarea1" className='w-full text-lg text-gray-800 font-serif'>Enter Your Name *</label>
                                    <input type="text" ref={Name} className='w-full my-2 p-1 text-gray-700 border-2 border-gray-700 focus:outline-none focus:border-cyan-800' />
                                </div>
                                <div className='mb-3 px-3'>
                                    <label htmlFor="exampleFormControlTextarea1" className='w-full text-lg text-gray-800 font-serif'>Enter Your Number *</label>
                                    <input type="text" ref={Number} className='w-full my-2 p-1 text-gray-700 border-2 border-gray-700 focus:outline-none focus:border-cyan-800' />
                                </div>
                            </div>
                            <div className='mb-3 px-3'>
                                <label htmlFor="exampleFormControlTextarea1" className='w-full text-lg text-gray-800 font-serif'>Enter Your Email *</label>
                                <input type="Email" ref={Email} className='w-full my-2 p-1 text-gray-700 border-2 border-gray-700 focus:outline-none focus:border-cyan-800' />
                            </div>
                            <div className='mb-3 px-3'>
                                <label htmlFor="exampleFormControlTextarea1" className='w-full text-lg text-gray-800 font-serif'>Message *</label>
                                <textarea type="text" ref={Message} className='w-full my-2 p-1 text-gray-700 border-2 border-gray-700 focus:outline-none focus:border-cyan-800'></textarea>
                            </div>
                            <div className='text-end px-3 py-3 text-gray-200 text-md'>
                                <button type='submit' className='p-3 border bg-gradient-to-tr from-blue-500 to-purple-600 rounded'>Send Message</button>
                            </div>
                        </form>
                    </div>
                    <div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ContactUs