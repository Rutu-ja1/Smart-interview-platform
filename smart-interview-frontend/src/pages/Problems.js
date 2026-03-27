import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import BackButton from "../components/BackButton";

function Problems() {

    const [problems, setProblems] = useState([]);

    const fetchProblems = async () => {

        try {

            const token = localStorage.getItem("token");

            const res = await API.get(
                "/api/problems",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setProblems(res.data);

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {
        fetchProblems();
    }, []);


    const getDifficultyColor = (difficulty) => {

        if (difficulty === "Easy") return "bg-green-100 text-green-700";

        if (difficulty === "Medium") return "bg-yellow-100 text-yellow-700";

        if (difficulty === "Hard") return "bg-red-100 text-red-700";

        return "bg-gray-100";

    };


    return (

        <div>
            <BackButton />


            <h1 className="text-3xl font-bold mb-6">
                Coding Problems
            </h1>

            <div className="bg-white shadow rounded-xl overflow-hidden">

                <table className="w-full">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="text-left p-4">
                                Title
                            </th>

                            <th className="text-left p-4">
                                Difficulty
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {problems.map((problem, index) => (

                            <tr
                                key={problem.id}
                                className="border-t hover:bg-gray-50"
                            >

                                <td className="p-4">

                                    <Link
                                        to={`/problems/${problem.id}`}
                                        className="text-blue-600 hover:underline"
                                    >
                                        {problem.title}
                                    </Link>

                                </td>

                                <td className="p-4">

                                    <span className={`px-3 py-1 text-sm rounded-full ${getDifficultyColor(problem.difficulty)}`}>

                                        {problem.difficulty}

                                    </span>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default Problems;