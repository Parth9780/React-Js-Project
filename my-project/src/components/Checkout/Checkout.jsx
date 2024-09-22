import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
// import cart from '../assets/images/cart.webp';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Swal from 'sweetalert2';

export default function Checkout() {
    // stored all data in variables
    const Name = useRef("");
    const LastName = useRef("");
    const Number = useRef("");
    const Email = useRef("");
    const Address = useRef("");
    const State = useRef("");
    const City = useRef("");

    // Add data
    const AddFormHandeler = (e) => {
        e.preventDefault();
        var insert = {
            Name: Name.current.value,
            LastName: Name.current.value,
            Number: Number.current.value,
            Email: Email.current.value,
            Address: Address.current.value,
            State: State.current.value,
            City: City.current.value
        }
        axios.post(`http://localhost:8000/checkout`, insert).then(() => {
            // pass a message
            Swal.fire({
                title: "Wow",
                text: "Checkout success fully.",
                icon: "success"
            });
        })
        e.target.reset();
    }
    // display cart
    const [data, setData] = useState([]);
    const Navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/cart`).then((response) => {
            setData(response.data);
        })
    })
    return (

        <>
            {/* be-pro hero-section start here */}
            {/* be-pro content start here */}
            <Navbar />
            <section id="content">
                <div className="w-11/12 mx-auto mt-5">
                    <div className='flex'>
                        <div className='w-7/12'>
                            <h3 className='text-xl font-semibold font-poppins py-3'>Fill (*) all required customers details</h3>
                            <form className='py-10' onSubmit={AddFormHandeler}>
                                <div className='grid grid-cols-2'>
                                    <div className='mb-3 px-3'>
                                        <label htmlFor="exampleFormControlTextarea1" className='w-full text-lg text-gray-800 font-serif'>Enter Your FirstName *</label>
                                        <input type="text" ref={Name} className='w-full my-2 p-1 text-gray-700 border-2 border-gray-700 focus:outline-none focus:border-cyan-800' />
                                    </div>
                                    <div className='mb-3 px-3'>
                                        <label htmlFor="exampleFormControlTextarea1" className='w-full text-lg text-gray-800 font-serif'>Enter Your LastName *</label>
                                        <input type="text" ref={LastName} className='w-full my-2 p-1 text-gray-700 border-2 border-gray-700 focus:outline-none focus:border-cyan-800' />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <div className='mb-3 px-3'>
                                        <label htmlFor="exampleFormControlTextarea1" className='w-full text-lg text-gray-800 font-serif'>Enter Your Number *</label>
                                        <input type="text" ref={Number} className='w-full my-2 p-1 text-gray-700 border-2 border-gray-700 focus:outline-none focus:border-cyan-800' />
                                    </div>
                                    <div className='mb-3 px-3'>
                                        <label htmlFor="exampleFormControlTextarea1" className='w-full text-lg text-gray-800 font-serif'>Enter Your Email *</label>
                                        <input type="Email" ref={Email} className='w-full my-2 p-1 text-gray-700 border-2 border-gray-700 focus:outline-none focus:border-cyan-800' />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <div className='mb-3 px-3'>
                                        <label htmlFor="exampleFormControlTextarea1" className='w-full text-lg text-gray-800 font-serif'>Select Your State *</label>
                                        <select ref={State} placeholder='Enter CategoryName *' className='w-full bg-transparent my-2 p-2 text-gray-700 border-2 border-gray-700 focus:outline-none focus:border-cyan-800'>
                                            <option value="">-select State-</option>
                                            <option value="">Gujarat</option>
                                            <option value="">Maharashtra</option>
                                            <option value="">Goa</option>
                                            <option value="">Uttarakhand</option>
                                            <option value="">Rajasthan</option>
                                        </select>
                                    </div>
                                    <div className='mb-3 px-3'>
                                        <label htmlFor="exampleFormControlTextarea1" className='w-full text-lg text-gray-800 font-serif'>Select Your City *</label>
                                        <select ref={City} placeholder='Enter CategoryName *' className='w-full bg-transparent my-2 p-2 text-gray-700 border-2 border-gray-700 focus:outline-none focus:border-cyan-800'>
                                            <option value="">-select City-</option>
                                            <option value="">Rajkot</option>
                                            <option value="">Gondal</option>
                                            <option value="">Mumbai</option>
                                            <option value="">Puna</option>
                                            <option value="">Nashik</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='mb-3 px-3'>
                                    <label htmlFor="exampleFormControlTextarea1" className='w-full text-lg text-gray-800 font-serif'>Message *</label>
                                    <textarea type="text" ref={Address} className='w-full my-2 p-1 text-gray-700 border-2 border-gray-700 focus:outline-none focus:border-cyan-800'></textarea>
                                </div>
                                <div className='text-end px-3 py-3 text-gray-200 text-md'>
                                    <button type='submit' className='p-3 border bg-gradient-to-tr from-blue-500 to-purple-600 rounded'>Send Message</button>
                                </div>
                            </form>
                        </div>
                        <div className='w-5/12'>
                            {/* display the carts data */}
                            <div className='card shadow'>
                                <div className='text-2xl font-semibold font-poppins py-3'>Order Summary</div>
                                <div className='card-body'>
                                    <table className='table table-responsive'>
                                        <tr>
                                            <th>photo</th>
                                            <th>Productname</th>
                                            <th>Qty</th>
                                            <th>Subototal</th>
                                        </tr>
                                        {data && data.map((items) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td><img src={items.image} alt='products' style={{ width: "80px", height: "80px" }} /></td>
                                                        <td>{items.productname}</td>
                                                        <td>{items.qty}</td>
                                                        <td>{items.offerprice2}</td>
                                                    </tr>
                                                </>
                                            )
                                        })}

                                        <tr>
                                            <td colSpan="6"><p align='right' className='bg-dark p-1 fs-4 text-white'>Subtotals of Products is Rs.{ }</p></td>
                                        </tr>

                                        <tr>
                                            <td colSpan="6">
                                                <button type='button' className='btn btn-dark text-white bg-dark fs-4 w-100 float-end'>Go For Payments</button>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />

        </>
    )
}