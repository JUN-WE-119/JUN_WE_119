
package com.example.dulsha.Contoller;

import com.example.dulsha.dto.WorkoutPlanDTO;
import com.example.dulsha.entity.WorkoutPlan;
import com.example.dulsha.repo.WorkoutPlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/workout-plan")
@CrossOrigin
public class WorkoutPlanController {

    @Autowired
    private WorkoutPlanRepository workoutPlanRepository;

    @PostMapping
    public ResponseEntity<?> createWorkoutPlan(@RequestBody WorkoutPlanDTO workoutPlanDTO) {

        // Convert WorkoutPlanDTO to WorkoutPlan entity
        WorkoutPlan workoutPlan = new WorkoutPlan();
        workoutPlan.setName(workoutPlanDTO.getName());
        workoutPlan.setDescription(workoutPlanDTO.getDescription());
        workoutPlan.setWorkoutType(workoutPlanDTO.getWorkoutType()); // Set workoutType
        workoutPlan.setDuration(workoutPlanDTO.getDuration()); // Set duration
        workoutPlan.setDate(workoutPlanDTO.getDate()); // Set date
        workoutPlan.setStatus(workoutPlanDTO.getStatus()); // Set status

        // Save to the database
        WorkoutPlan savedWorkoutPlan = workoutPlanRepository.save(workoutPlan);

        // Return the saved entity
        return ResponseEntity.ok(savedWorkoutPlan);
    }

    @GetMapping
    public ResponseEntity<List<WorkoutPlan>> getAllWorkoutPlans() {
        try {
            List<WorkoutPlan> workoutPlans = workoutPlanRepository.findAll();
            return ResponseEntity.ok(workoutPlans);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getWorkoutPlanById(@PathVariable Long id) {
        Optional<WorkoutPlan> workoutPlanOptional = workoutPlanRepository.findById(id);
        return workoutPlanOptional.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateWorkoutPlan(@PathVariable Long id, @RequestBody WorkoutPlanDTO workoutPlanDTO) {
        Optional<WorkoutPlan> existingWorkoutPlanOptional = workoutPlanRepository.findById(id);
        if (existingWorkoutPlanOptional.isPresent()) {
            WorkoutPlan existingWorkoutPlan = existingWorkoutPlanOptional.get();
            existingWorkoutPlan.setName(workoutPlanDTO.getName());
            existingWorkoutPlan.setDescription(workoutPlanDTO.getDescription());
            existingWorkoutPlan.setWorkoutType(workoutPlanDTO.getWorkoutType()); // Update workoutType
            existingWorkoutPlan.setDuration(workoutPlanDTO.getDuration()); // Update duration
            existingWorkoutPlan.setDate(workoutPlanDTO.getDate()); // Update date
            existingWorkoutPlan.setStatus(workoutPlanDTO.getStatus()); // Update status

            workoutPlanRepository.save(existingWorkoutPlan);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteWorkoutPlan(@PathVariable Long id) {
        try {
            // Check if the workout plan exists
            if (!workoutPlanRepository.existsById(id)) {
                return ResponseEntity.notFound().build();
            }

            // If the workout plan exists, delete it
            workoutPlanRepository.deleteById(id);

            return ResponseEntity.noContent().build(); // Return 204 No Content status
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}