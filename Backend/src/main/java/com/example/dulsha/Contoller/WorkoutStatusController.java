package com.example.dulsha.Contoller;

import com.example.dulsha.dto.WorkoutStatusDTO;
import com.example.dulsha.entity.WorkoutStatus;
import com.example.dulsha.repo.WorkoutStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/workout-status")
@CrossOrigin
public class WorkoutStatusController {

    @Autowired
    private WorkoutStatusRepository workoutStatusRepository;

    @PostMapping
    public ResponseEntity<?> createWorkoutStatus(@RequestBody WorkoutStatusDTO workoutStatusDTO) {
        // Convert WorkoutStatusDTO to WorkoutStatus entity
        WorkoutStatus workoutStatus = new WorkoutStatus();
        workoutStatus.setUsername(workoutStatusDTO.getUsername());
        workoutStatus.setWorkoutType(workoutStatusDTO.getWorkoutType());
        workoutStatus.setMetrics(workoutStatusDTO.getMetrics());
        workoutStatus.setDescription(workoutStatusDTO.getDescription());

        // Save to the database
        WorkoutStatus savedWorkoutStatus = workoutStatusRepository.save(workoutStatus);

        // Return the saved entity
        return ResponseEntity.ok(savedWorkoutStatus);
    }

    @GetMapping
    public ResponseEntity<List<WorkoutStatus>> getAllWorkoutStatuses() {
        try {
            List<WorkoutStatus> workoutStatuses = workoutStatusRepository.findAll();
            return ResponseEntity.ok(workoutStatuses);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getWorkoutStatusById(@PathVariable Long id) {
        Optional<WorkoutStatus> workoutStatusOptional = workoutStatusRepository.findById(id);
        return workoutStatusOptional.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateWorkoutStatus(@PathVariable Long id, @RequestBody WorkoutStatusDTO workoutStatusDTO) {
        Optional<WorkoutStatus> existingWorkoutStatusOptional = workoutStatusRepository.findById(id);
        if (existingWorkoutStatusOptional.isPresent()) {
            WorkoutStatus existingWorkoutStatus = existingWorkoutStatusOptional.get();
            existingWorkoutStatus.setUsername(workoutStatusDTO.getUsername());
            existingWorkoutStatus.setWorkoutType(workoutStatusDTO.getWorkoutType());
            existingWorkoutStatus.setMetrics(workoutStatusDTO.getMetrics());
            existingWorkoutStatus.setDescription(workoutStatusDTO.getDescription());
            workoutStatusRepository.save(existingWorkoutStatus);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteWorkoutStatus(@PathVariable Long id) {
        try {
            // Check if the workout status exists
            if (!workoutStatusRepository.existsById(id)) {
                return ResponseEntity.notFound().build();
            }

            // If the workout status exists, delete it
            workoutStatusRepository.deleteById(id);

            return ResponseEntity.noContent().build(); // Return 204 No Content status
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
