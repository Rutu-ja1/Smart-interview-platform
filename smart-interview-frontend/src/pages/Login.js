import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await API.post("/auth/login", login);

            // store JWT token
            localStorage.setItem("token", res.data);

            alert("Login successful");

            // redirect to dashboard
            navigate("/dashboard");

        } catch (error) {

            alert("Invalid email or password");

        }
    };

    return (

        <div>

            <h2>Login</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    onChange={handleChange}
                    required
                />

                <br /><br />

                <button type="submit">
                    Login
                </button>

            </form>

        </div>

    );
}

export default Login;