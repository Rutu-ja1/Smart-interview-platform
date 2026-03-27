package com.interview.platform.controller;

import com.interview.platform.dto.CodeExecutionRequest;
import com.interview.platform.service.CodeExecutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/code")
public class CodeExecutionController {

    @Autowired
    private CodeExecutionService codeExecutionService;

    @PostMapping("/run")
    public String runCode(@RequestBody CodeExecutionRequest request) {

        return codeExecutionService.executeCode(request);
    }
}