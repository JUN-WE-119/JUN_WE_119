package com.example.dulsha.repo;

import com.example.dulsha.entity.WorkoutStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkoutStatusRepository extends JpaRepository<WorkoutStatus, Long> {
}
