package com.sahankalhara.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sahankalhara.backend.model.Plan;

public interface PlanRepository extends JpaRepository<Plan,Long>{

}