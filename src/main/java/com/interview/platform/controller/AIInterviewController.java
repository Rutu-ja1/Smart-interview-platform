package com.interview.platform.controller;

import com.interview.platform.dto.AIRequest;
import com.interview.platform.service.AIInterviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ai")
public class AIInterviewController {

    @Autowired
    private AIInterviewService aiInterviewService;

    @PostMapping("/questions")
    public String generateQuestions(@RequestBody AIRequest request) {

        return aiInterviewService.generateQuestions(request);
    }
}