package com.sahankalhara.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Workout {

    @Id
    @GeneratedValue
    private Long id;
    private String exercise;
    private Integer sets;
    private Integer reps;
    private Integer weight;
    private String notes;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getexercise() {
        return exercise;
    }
    public void setexercise(String exercise) {
        this.exercise = exercise;
    }

    public Integer getsets() {
        return sets;
    }
    public void setsets(Integer sets) {
        this.sets = sets;
    }

    public Integer getreps() {
        return reps;
    }
    public void setreps(Integer reps) {
        this.reps = reps;
    }

    public Integer getweight() {
        return weight;
    }
    public void setweight(Integer weight) {
        this.weight = weight;
    }

    public String getnotes() {
        return notes;
    }
    public void setnotes(String notes) {
        this.notes = notes;
    }
}
