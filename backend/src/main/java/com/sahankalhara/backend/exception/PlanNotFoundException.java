package com.sahankalhara.backend.exception;

public class PlanNotFoundException extends RuntimeException {
    public PlanNotFoundException(Long id){
        super("Could not found the plan with id "+id);
    }
}
