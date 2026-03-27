package com.interview.platform.controller;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/analytics")
@CrossOrigin
public class AnalyticsController {

    @GetMapping
    public Map<String, Integer> getAnalytics() {

        Map<String, Integer> data = new HashMap<>();

        data.put("codingAttempts", 12);
        data.put("aiInterviews", 5);
        data.put("videoInterviews", 3);
        data.put("performanceScore", 78);

        return data;
    }

}