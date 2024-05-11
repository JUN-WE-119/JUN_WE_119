package com.sahankalhara.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sahankalhara.backend.model.Workout;

public interface WorkoutRepository extends JpaRepository<Workout, Long> {

}
