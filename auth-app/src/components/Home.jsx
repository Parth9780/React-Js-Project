import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
const Home = () => {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <>
            <div className="p-5 box mt-0 text-center w-50 mx-auto mt-5">
                <p>Welcome <br />{user && user.email}</p>
                <Button variant="primary" onClick={handleLogout}>
                    Log out
                </Button>
            </div>
        </>
    );
};

export default Home;