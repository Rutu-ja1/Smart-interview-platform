import React, { useState } from "react";
import API from "../services/api";
import { Mic, MicOff } from "lucide-react";
import BackButton from "../components/BackButton";

function AIInterview() {

    const [topic, setTopic] = useState("Java");
    const [difficulty, setDifficulty] = useState("Easy");

    const [questions, setQuestions] = useState("");
    const [answer, setAnswer] = useState("");
    const [feedback, setFeedback] = useState("");

    const [listening, setListening] = useState(false);
    const [recognition, setRecognition] = useState(null);


    // Generate Interview Questions
    const generateQuestions = async () => {

        try {

            const token = localStorage.getItem("token");

            const res = await API.post(
                "/api/ai/questions",
                { topic, difficulty },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setQuestions(res.data);

        } catch (error) {
            console.log(error);
        }

    };


    // Evaluate Answer
    const evaluateAnswer = async () => {

        try {

            const token = localStorage.getItem("token");

            const res = await API.post(
                "/api/ai/evaluate",
                { answer },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setFeedback(res.data);

        } catch (error) {
            console.log(error);
        }

    };


    // Start Voice Recording
    const startListening = () => {

        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            alert("Speech recognition not supported in this browser");
            return;
        }

        const recognitionInstance = new SpeechRecognition();

        recognitionInstance.continuous = true;
        recognitionInstance.interimResults = false;
        recognitionInstance.lang = "en-US";

        recognitionInstance.onresult = (event) => {

            const transcript =
                event.results[event.results.length - 1][0].transcript;

            setAnswer(prev => prev + " " + transcript);

        };

        recognitionInstance.start();

        setRecognition(recognitionInstance);
        setListening(true);

    };


    // Stop Voice Recording
    const stopListening = () => {

        if (recognition) {
            recognition.stop();
        }

        setListening(false);

    };


    return (

        <div className="max-w-4xl mx-auto">
            <BackButton />


            <h1 className="text-3xl font-bold mb-6">
                AI Interview Simulator
            </h1>


            {/* Topic Selection */}

            <div className="bg-white shadow rounded-xl p-6 mb-6">

                <div className="grid grid-cols-2 gap-4">

                    <div>

                        <label className="block mb-2 font-semibold">
                            Topic
                        </label>

                        <select
                            className="w-full border p-2 rounded"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                        >
                            <option>Java</option>
                            <option>SQL</option>
                            <option>Data Structures</option>
                            <option>System Design</option>
                        </select>

                    </div>


                    <div>

                        <label className="block mb-2 font-semibold">
                            Difficulty
                        </label>

                        <select
                            className="w-full border p-2 rounded"
                            value={difficulty}
                            onChange={(e) => setDifficulty(e.target.value)}
                        >
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>

                    </div>

                </div>


                <button
                    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    onClick={generateQuestions}
                >
                    Generate Questions
                </button>

            </div>



            {/* Questions */}

            {questions && (

                <div className="bg-white shadow rounded-xl p-6 mb-6">

                    <h2 className="text-xl font-semibold mb-4">
                        Interview Questions
                    </h2>

                    <pre className="whitespace-pre-wrap text-gray-700">
                        {questions}
                    </pre>

                </div>

            )}



            {/* Answer Section */}

            {questions && (

                <div className="bg-white shadow rounded-xl p-6 mb-6">

                    <h2 className="text-xl font-semibold mb-4">
                        Your Answer
                    </h2>

                    <textarea
                        className="w-full border p-3 rounded h-40"
                        placeholder="Write your answer or use voice..."
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                    />


                    {/* Voice Buttons */}

                    <div className="flex gap-4 mt-4">

                        {!listening ? (

                            <button
                                className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                                onClick={startListening}
                            >
                                <Mic size={18} />
                                Start Voice Answer
                            </button>

                        ) : (

                            <button
                                className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                                onClick={stopListening}
                            >
                                <MicOff size={18} />
                                Stop Recording
                            </button>

                        )}

                    </div>


                    <button
                        className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                        onClick={evaluateAnswer}
                    >
                        Get AI Feedback
                    </button>

                </div>

            )}



            {/* Feedback */}

            {feedback && (

                <div className="bg-white shadow rounded-xl p-6">

                    <h2 className="text-xl font-semibold mb-4">
                        AI Feedback
                    </h2>

                    <pre className="whitespace-pre-wrap text-gray-700">
                        {feedback}
                    </pre>

                </div>

            )}

        </div>

    );

}

export default AIInterview;