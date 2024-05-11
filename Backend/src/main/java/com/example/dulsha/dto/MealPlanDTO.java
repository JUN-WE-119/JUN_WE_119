package com.example.dulsha.dto;

public class MealPlanDTO {

    private String title;
    private String category;
    private String description;
    // You can add additional fields here if needed

    // Constructors
    public MealPlanDTO() {
    }

    public MealPlanDTO(String title, String category, String description) {
        this.title = title;
        this.category = category;
        this.description = description;
    }

    // Getters and Setters
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
