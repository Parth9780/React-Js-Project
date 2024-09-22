import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function DeleteCart() {
    const { id } = useParams();
    const Navigate = useNavigate();
    useEffect(() => {
        axios.delete(`http://localhost:8000/cart/${id}`).then(() => {
            Swal.fire({
                title: "success!",
                text: "Product deleted successfully",
                icon: "success"
            });
        })
        Navigate("/cart");

    }, []);
    return (
        <>

        </>
    )
}

export default DeleteCart