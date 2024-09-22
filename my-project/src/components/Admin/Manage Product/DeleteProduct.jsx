import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

function DeleteProduct() {

    const [data, setData] = useState([]);
    const { id } = useParams();
    const Navigate = useNavigate();
    useEffect(() => {
        // delete api using axios
        axios.delete(`http://localhost:8000/product/${id}`).then((response) => {
            setData(response.data);
            // pass a deleted messages
            Swal.fire({
                title: "Wow",
                text: "Category successfully deleted",
                icon: "success"
            });

            Navigate('/admin/dashboard/manage-product');

        });

    }, []);
    return (
        <div>

        </div>
    )
}

export default DeleteProduct