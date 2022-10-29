import React from 'react';
import {useNavigate} from "react-router";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/Heroes-App/");
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button className="btn btn-primary mt-2" onClick={handleLogin }>Login</button>
        </div>
    );
};

export default LoginPage;