package com.interview.platform.service;

import com.interview.platform.dto.AIRequest;
import org.springframework.stereotype.Service;

@Service
public class AIInterviewService {

    public String generateQuestions(AIRequest request) {

        String topic = request.getTopic();
        String difficulty = request.getDifficulty();

        return "Interview Questions for " + topic + " (" + difficulty + ")\n\n" +
                "1. Explain core concepts of " + topic + "\n" +
                "2. What are the advantages of " + topic + "?\n" +
                "3. Explain a real-world use case of " + topic + "\n" +
                "4. What are common interview questions related to " + topic + "?\n" +
                "5. Explain advanced concepts of " + topic;
    }
}