package com.interview.platform.controller;

import com.interview.platform.service.AIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin
public class AIController {

    @Autowired
    private AIService aiService;

    @PostMapping("/interview")
    public String generateInterviewQuestions(@RequestBody Map<String, String> request) {

        String topic = request.get("topic");
        String difficulty = request.get("difficulty");

        return aiService.generateQuestions(topic, difficulty);
    }

}