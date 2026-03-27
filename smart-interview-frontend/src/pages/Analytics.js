import React, { useEffect, useState } from "react";
import API from "../services/api";
import BackButton from "../components/BackButton";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from "recharts";

function Analytics() {

    const [data, setData] = useState(null);


    const fetchAnalytics = async () => {

        try {

            const token = localStorage.getItem("token");

            const res = await API.get(
                "/api/analytics",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setData(res.data);

        } catch (error) {

            console.log(error);

        }

    };


    useEffect(() => {
        fetchAnalytics();
    }, []);


    if (!data) return <p>Loading...</p>;


    const chartData = [
        { name: "Coding", value: data.codingAttempts },
        { name: "AI Interviews", value: data.aiInterviews },
        { name: "Video Interviews", value: data.videoInterviews }
    ];


    const scoreData = [
        { name: "Score", value: data.performanceScore },
        { name: "Remaining", value: 100 - data.performanceScore }
    ];


    const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444"];



    return (

        <div>

            <BackButton />

            <h1 className="text-3xl font-bold mb-8">
                Performance Analytics
            </h1>


            <div className="grid grid-cols-2 gap-8">


                {/* Bar Chart */}

                <div className="bg-white p-6 rounded-xl shadow">

                    <h2 className="text-lg font-semibold mb-4">
                        Interview Activity
                    </h2>

                    <ResponsiveContainer width="100%" height={300}>

                        <BarChart data={chartData}>

                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />

                            <Bar dataKey="value" fill="#4F46E5" />

                        </BarChart>

                    </ResponsiveContainer>

                </div>


                {/* Pie Chart */}

                <div className="bg-white p-6 rounded-xl shadow">

                    <h2 className="text-lg font-semibold mb-4">
                        Performance Score
                    </h2>

                    <ResponsiveContainer width="100%" height={300}>

                        <PieChart>

                            <Pie
                                data={scoreData}
                                dataKey="value"
                                outerRadius={100}
                                label
                            >

                                {scoreData.map((entry, index) => (
                                    <Cell
                                        key={index}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}

                            </Pie>

                            <Tooltip />

                        </PieChart>

                    </ResponsiveContainer>

                </div>


            </div>

        </div>

    );

}

export default Analytics;