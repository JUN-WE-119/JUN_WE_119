package com.example.dulsha.Contoller;

import com.example.dulsha.dto.MealPlanDTO;
import com.example.dulsha.entity.MealPlan;
import com.example.dulsha.repo.MealPlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/meal-plans")
@CrossOrigin
public class MealPlanController {

    @Autowired
    private MealPlanRepository mealPlanRepository;

    @PostMapping
    public ResponseEntity<?> createMealPlan(@RequestBody MealPlanDTO mealPlanDTO) {
    // Convert MealPlanDTO to MealPlan entity
    MealPlan mealPlan = new MealPlan();
    mealPlan.setTitle(mealPlanDTO.getTitle());
    mealPlan.setCategory(mealPlanDTO.getCategory());
    mealPlan.setDescription(mealPlanDTO.getDescription());

    // Save to the database
    MealPlan savedMealPlan = mealPlanRepository.save(mealPlan);

    // Return the saved entity
    return ResponseEntity.ok(savedMealPlan);
}

    @GetMapping
    public ResponseEntity<List<MealPlan>> getAllMealPlans() {
        try {
            List<MealPlan> mealPlans = mealPlanRepository.findAll();
            return ResponseEntity.ok(mealPlans);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteMealPlan(@PathVariable Long id) {
        try {
            // Check if the meal plan exists
            if (!mealPlanRepository.existsById(id)) {
                return ResponseEntity.notFound().build();
            }

            // If the meal plan exists, delete it
            mealPlanRepository.deleteById(id);

            return ResponseEntity.noContent().build(); // Return 204 No Content status
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateMealPlan(@PathVariable Long id, @RequestBody MealPlanDTO mealPlanDTO) {
        try {
            // Check if the meal plan exists
            if (!mealPlanRepository.existsById(id)) {
                return ResponseEntity.notFound().build();
            }

            // Get the existing meal plan from the database
            MealPlan existingMealPlan = mealPlanRepository.findById(id).get();

            // Update the existing meal plan with new values
            existingMealPlan.setTitle(mealPlanDTO.getTitle());
            existingMealPlan.setCategory(mealPlanDTO.getCategory());
            existingMealPlan.setDescription(mealPlanDTO.getDescription());

            // Save the updated meal plan to the database
            MealPlan updatedMealPlan = mealPlanRepository.save(existingMealPlan);

            return ResponseEntity.ok(updatedMealPlan);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }




}