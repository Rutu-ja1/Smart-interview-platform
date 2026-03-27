package com.interview.platform.service;

import org.springframework.stereotype.Service;

@Service
public class AIService {

    public String generateQuestions(String topic, String difficulty) {

        return "Interview Questions for " + topic + " (" + difficulty + ")\n\n" +

                "1. Explain what " + topic + " is.\n" +
                "2. What are the main features of " + topic + "?\n" +
                "3. Write a basic example related to " + topic + ".\n" +
                "4. What are common challenges when using " + topic + "?\n" +
                "5. Difference between beginner and advanced concepts in " + topic + "?";
    }

}