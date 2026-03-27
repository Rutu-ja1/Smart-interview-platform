import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function BackButton() {

    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 mb-4 text-indigo-600 hover:text-indigo-800"
        >
            <ArrowLeft size={18} />
            Back
        </button>
    );

}

export default BackButton;