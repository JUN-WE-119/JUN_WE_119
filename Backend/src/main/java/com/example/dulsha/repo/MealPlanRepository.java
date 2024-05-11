package com.example.dulsha.repo;

import com.example.dulsha.entity.MealPlan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MealPlanRepository extends JpaRepository<MealPlan, Long> {
    // You can add custom query methods here if needed
}
