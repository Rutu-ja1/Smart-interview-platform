package com.interview.platform.dto;

import lombok.Data;

@Data
public class CodeExecutionRequest {

    private String sourceCode;
    private int languageId;
    private String stdin;
}