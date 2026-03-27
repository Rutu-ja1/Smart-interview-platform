import React from "react";
import { Brain } from "lucide-react";

function Logo() {

    return (
        <div className="flex items-center gap-2 text-white">

            <Brain size={36} />

            <span className="text-2xl font-bold">
                InterviewAI
            </span>

        </div>
    );

}

export default Logo;