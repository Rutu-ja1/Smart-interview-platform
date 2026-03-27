import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";
import API from "../services/api";
import BackButton from "../components/BackButton";

function ProblemDetail() {

    const { id } = useParams();

    const [problem, setProblem] = useState({});
    const [code, setCode] = useState("");
    const [output, setOutput] = useState("");

    const fetchProblem = async () => {

        try {

            const token = localStorage.getItem("token");

            const res = await API.get(
                `/api/problems/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setProblem(res.data);

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {
        fetchProblem();
    }, []);


    const runCode = async () => {

        try {

            const token = localStorage.getItem("token");

            const res = await API.post(
                "/api/code/run",
                {
                    sourceCode: code,
                    language: "java"
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setOutput(res.data);

        } catch (error) {

            console.log(error);

        }

    };


    return (

        <div className="grid grid-cols-2 gap-6">

            {/* Problem Description */}

            <div className="bg-white shadow rounded-xl p-6">

                <h2 className="text-2xl font-bold mb-4">
                    {problem.title}
                </h2>

                <p className="text-gray-600 mb-4">
                    Difficulty: {problem.difficulty}
                </p>

                <div className="text-gray-700 whitespace-pre-line">
                    {problem.description}
                </div>

            </div>


            {/* Code Editor */}

            <div className="flex flex-col">

                <div className="bg-white shadow rounded-xl p-4">

                    <Editor
                        height="400px"
                        defaultLanguage="java"
                        value={code}
                        onChange={(value) => setCode(value)}
                        theme="vs-dark"
                    />

                </div>


                <button
                    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    onClick={runCode}
                >
                    Run Code
                </button>


                <div className="bg-black text-green-400 p-4 mt-4 rounded h-40 overflow-auto">

                    <pre>
                        {output}
                    </pre>

                </div>

            </div>

        </div>

    );

}

export default ProblemDetail;