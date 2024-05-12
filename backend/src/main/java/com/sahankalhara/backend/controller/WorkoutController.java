package com.sahankalhara.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.sahankalhara.backend.exception.WorkoutNotFoundException;
import com.sahankalhara.backend.model.Workout;
import com.sahankalhara.backend.repository.WorkoutRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin("http://localhost:5173")
public class WorkoutController {

    @Autowired
    private WorkoutRepository workoutRepository;

    @PostMapping("/workout")
    Workout newWorkout(@RequestBody Workout newWorkout){
        return workoutRepository.save(newWorkout);
    }

    @GetMapping("/workouts")
    List<Workout> getAllWorkouts(){
        return workoutRepository.findAll();
    }

    @GetMapping("/workout/{id}")
    Workout getWorkoutById(@PathVariable Long id){
        return workoutRepository.findById(id)
            .orElseThrow(() -> new WorkoutNotFoundException(id));
    }


    }

    @DeleteMapping("/workout/{id}")
    String deleteWorkout(@PathVariable Long id){
        if(!workoutRepository.existsById(id)){
            throw new WorkoutNotFoundException(id);
        }
        workoutRepository.deleteById(id);
        return "Workout with id "+id+" has been deleted successfully";
    }
    

}
