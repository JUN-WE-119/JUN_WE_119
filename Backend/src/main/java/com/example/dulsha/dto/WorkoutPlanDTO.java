
package com.example.dulsha.dto;

public class WorkoutPlanDTO {

    private String name;
    private String description;
    private String workoutType;
    private String duration;
    private String date;
    private String status; // New attribute
    // Getters and setters

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    //===
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    //-------
    public String getWorkoutType() {
        return workoutType;
    }

    public void setWorkoutType(String workoutType) {
        this.workoutType = workoutType;
    }
    
    //-------
    public String getDuration() {
        return duration;
    }
    public void setDuration(String duration) {
        this.duration = duration;
    }

    // Getter and setter for date
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }

        // Getter and setter for status
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}