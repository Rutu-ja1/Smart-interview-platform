package com.interview.platform.controller;

import com.interview.platform.dto.AnalyticsResponse;
import com.interview.platform.entity.Interview;
import com.interview.platform.service.InterviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/interview")
public class InterviewController {

    @Autowired
    private InterviewService interviewService;

    @PostMapping("/start")
    public Interview startInterview(@RequestBody Interview interview) {
        return interviewService.startInterview(interview);
    }

    @GetMapping("/all")
    public List<Interview> getAllInterviews() {
        return interviewService.getAllInterviews();
    }

    @GetMapping("/analytics")
    public AnalyticsResponse getAnalytics() {
        return interviewService.getAnalytics();
    }
}