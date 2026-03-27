package com.interview.platform.repository;

import com.interview.platform.entity.Interview;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface InterviewRepository extends JpaRepository<Interview, Long> {

    @Query("SELECT AVG(i.score) FROM Interview i")
    Double getAverageScore();

    @Query("SELECT MAX(i.score) FROM Interview i")
    Integer getHighestScore();
}