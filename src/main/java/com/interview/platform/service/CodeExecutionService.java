package com.interview.platform.service;

import com.interview.platform.dto.CodeExecutionRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class CodeExecutionService {

    private final String JUDGE0_URL = "https://ce.judge0.com/submissions?base64_encoded=false&wait=true";

    public String executeCode(CodeExecutionRequest request) {

        RestTemplate restTemplate = new RestTemplate();

        Map<String, Object> body = new HashMap<>();
        body.put("source_code", request.getSourceCode());
        body.put("language_id", request.getLanguageId());
        body.put("stdin", request.getStdin());

        return restTemplate.postForObject(JUDGE0_URL, body, String.class);
    }
}