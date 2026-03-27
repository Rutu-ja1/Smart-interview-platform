import React from "react";
import { Link } from "react-router-dom";
import { UserCircle } from "lucide-react";

function Layout({ children }) {

    const logout = () => {
        localStorage.removeItem("token");
        window.location = "/";
    };

    return (
        <div className="flex h-screen bg-gray-100">

            {/* Sidebar */}

            <div className="w-64 bg-gray-900 text-white flex flex-col">

                <div className="text-2xl font-bold p-6 border-b border-gray-700">
                    InterviewAI
                </div>

                <nav className="flex flex-col p-4 space-y-3">

                    <Link to="/dashboard" className="hover:bg-gray-700 p-2 rounded">
                        Dashboard
                    </Link>

                    <Link to="/problems" className="hover:bg-gray-700 p-2 rounded">
                        Coding Problems
                    </Link>

                    <Link to="/ai-interview" className="hover:bg-gray-700 p-2 rounded">
                        AI Interview
                    </Link>

                    <Link to="/video-interview" className="hover:bg-gray-700 p-2 rounded">
                        Video Interview
                    </Link>

                    <Link to="/analytics" className="hover:bg-gray-700 p-2 rounded">
                        Analytics
                    </Link>

                </nav>

            </div>



            {/* Main Section */}

            <div className="flex-1 flex flex-col">


                {/* Navbar */}

                <div className="bg-white shadow p-4 flex justify-between items-center">

                    <h1 className="text-xl font-semibold">
                        Smart Interview Platform
                    </h1>


                    <div className="flex items-center space-x-4">

                        <UserCircle size={32} className="text-gray-600" />

                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            onClick={logout}
                        >
                            Logout
                        </button>

                    </div>

                </div>



                {/* Page Content */}

                <div className="p-6 overflow-auto">
                    {children}
                </div>

            </div>

        </div>
    );
}

export default Layout;