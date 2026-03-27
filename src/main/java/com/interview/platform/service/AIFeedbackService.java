package com.interview.platform.service;

import org.springframework.stereotype.Service;

@Service
public class AIFeedbackService {

    public String evaluateAnswer(String answer) {

        return "AI Interview Feedback\n\n" +

                "Technical Accuracy: Good\n" +
                "Communication Clarity: Moderate\n" +
                "Confidence Score: 7/10\n\n" +

                "Suggestions:\n" +
                "- Explain concepts more clearly\n" +
                "- Provide practical examples\n" +
                "- Structure the answer step by step";
    }

}