import React from "react";
import { Link } from "react-router-dom";
import { Code, Brain, Video, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

function Dashboard() {

    const cards = [
        {
            title: "Coding Challenges",
            description: "Practice coding interview problems",
            icon: <Code size={30} />,
            link: "/problems",
            color: "bg-blue-500"
        },
        {
            title: "AI Interview",
            description: "Generate AI interview questions",
            icon: <Brain size={30} />,
            link: "/ai-interview",
            color: "bg-purple-500"
        },
        {
            title: "Video Interview",
            description: "Practice mock video interviews",
            icon: <Video size={30} />,
            link: "/video-interview",
            color: "bg-green-500"
        },
        {
            title: "Analytics",
            description: "Track your performance",
            icon: <BarChart3 size={30} />,
            link: "/analytics",
            color: "bg-orange-500"
        }
    ];

    return (

        <div>

            <h1 className="text-3xl font-bold mb-8">
                Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {cards.map((card, index) => (

                    <Link to={card.link} key={index}>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition"
                        >

                            <div className={`w-12 h-12 flex items-center justify-center text-white rounded-lg ${card.color}`}>
                                {card.icon}
                            </div>

                            <h2 className="text-xl font-semibold mt-4">
                                {card.title}
                            </h2>

                            <p className="text-gray-500 mt-2">
                                {card.description}
                            </p>

                        </motion.div>

                    </Link>

                ))}

            </div>

        </div>

    );

}

export default Dashboard;