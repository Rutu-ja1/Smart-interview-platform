package com.interview.platform.controller;

import com.interview.platform.service.AIFeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin
public class AIFeedbackController {

    @Autowired
    private AIFeedbackService feedbackService;

    @PostMapping("/feedback")
    public String evaluate(@RequestBody Map<String,String> request){

        String answer = request.get("answer");

        return feedbackService.evaluateAnswer(answer);
    }

}