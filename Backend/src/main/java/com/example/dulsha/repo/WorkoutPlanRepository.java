// package com.example.dulsha.repo;

// public class WorkoutPlanRepository {
    
// }
// package com.example.dulsha.repo;

// public class WorkoutPlanRepository {
    
// }
package com.example.dulsha.repo;

import com.example.dulsha.entity.WorkoutPlan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkoutPlanRepository extends JpaRepository<WorkoutPlan, Long> {
}