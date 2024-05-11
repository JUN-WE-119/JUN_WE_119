package com.sahankalhara.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Plan {

    @Id
    @GeneratedValue
    private Long id;
    private Integer age;
    private String bodyType;
    private String goal;
    private String bodywant;
    private String problemarea;
    private Integer height;
    private Integer currentweight;
    private Integer targetweight;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public Integer getAge() {
        return age;
    }
    public void setAge(Integer age) {
        this.age = age;
    }

    public String getBodyType() {
        return bodyType;
    }
    public void setBodyType(String bodyType) {
        this.bodyType = bodyType;
    }

    public String getGoal() {
        return goal;
    }
    public void setGoal(String goal) {
        this.goal = goal;
    }

    public String getBodywant() {
        return bodywant;
    }
    public void setBodywant(String bodywant) {
        this.bodywant = bodywant;
    }

    public String getProblemarea() {
        return problemarea;
    }
    public void setProblemarea(String problemarea) {
        this.problemarea = problemarea;
    }

    public Integer getHeight() {
        return height;
    }
    public void setHeight(Integer height) {
        this.height = height;
    }

    public Integer getCurrentweight() {
        return currentweight;
    }
    public void setCurrentweight(Integer currentweight) {
        this.currentweight = currentweight;
    }

    public Integer getTargetweight() {
        return targetweight;
    }
    public void setTargetweight(Integer targetweight) {
        this.targetweight = targetweight;
    }

}