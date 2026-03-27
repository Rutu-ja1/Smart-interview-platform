package com.interview.platform.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AnalyticsResponse {

    private long totalInterviews;
    private double averageScore;
    private int highestScore;
}