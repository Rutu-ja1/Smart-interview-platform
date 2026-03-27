import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Logo from "../components/Logo";

function Auth() {

    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(true);

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (isLogin) {

                const res = await API.post("/auth/login", {
                    email: form.email,
                    password: form.password
                });

                localStorage.setItem("token", res.data);

                navigate("/dashboard");

            } else {

                await API.post("/auth/register", form);

                alert("Registration successful");

                setIsLogin(true);

            }

        } catch (error) {

            alert("Authentication failed");

        }

    };


    return (

        <div className="min-h-screen flex">

            {/* LEFT SIDE */}

            <div className="hidden md:flex w-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex-col justify-center items-center p-10">

                <div className="mb-6">
                    <Logo />
                </div>

                <p className="text-lg text-center max-w-md">
                    Practice coding challenges, simulate interviews,
                    and improve your technical skills with AI-powered feedback.
                </p>

            </div>



            {/* RIGHT SIDE FORM */}

            <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-100">

                <div className="bg-white p-8 rounded-xl shadow-lg w-96">

                    <h2 className="text-2xl font-bold text-center mb-6">

                        {isLogin ? "Login" : "Create Account"}

                    </h2>


                    <form onSubmit={handleSubmit}>

                        {!isLogin && (

                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                className="w-full p-3 border rounded mb-4"
                                onChange={handleChange}
                            />

                        )}

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full p-3 border rounded mb-4"
                            onChange={handleChange}
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full p-3 border rounded mb-4"
                            onChange={handleChange}
                        />

                        <button
                            className="w-full bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700"
                        >
                            {isLogin ? "Login" : "Register"}
                        </button>

                    </form>


                    <p className="text-center mt-4 text-sm">

                        {isLogin ? "Don't have an account?" : "Already have an account?"}

                        <button
                            className="text-indigo-600 ml-2 font-semibold"
                            onClick={() => setIsLogin(!isLogin)}
                        >
                            {isLogin ? "Register" : "Login"}
                        </button>

                    </p>

                </div>

            </div>

        </div>

    );

}

export default Auth;