package com.interview.platform.service;

import com.interview.platform.dto.AnalyticsResponse;
import com.interview.platform.entity.Interview;
import com.interview.platform.repository.InterviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.interview.platform.dto.AnalyticsResponse;

import java.util.List;

@Service
public class InterviewService {

    @Autowired
    private InterviewRepository interviewRepository;

    public Interview startInterview(Interview interview) {
        return interviewRepository.save(interview);
    }

    public List<Interview> getAllInterviews() {
        return interviewRepository.findAll();
    }

    public AnalyticsResponse getAnalytics() {

        long total = interviewRepository.count();

        Double avg = interviewRepository.getAverageScore();
        Integer max = interviewRepository.getHighestScore();

        if (avg == null)
            avg = 0.0;
        if (max == null)
            max = 0;

        return new AnalyticsResponse(total, avg, max);
    }
}