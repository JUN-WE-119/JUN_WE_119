package com.sahankalhara.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.sahankalhara.backend.exception.PlanNotFoundException;
import com.sahankalhara.backend.model.Plan;
import com.sahankalhara.backend.repository.PlanRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin("http://localhost:5173")
public class PlanController {

    @Autowired
    private PlanRepository planRepository;

    @PostMapping("/plan")
    Plan newPlan(@RequestBody Plan newPlan){
        return planRepository.save(newPlan);
    }

    @GetMapping("/plans")
    List<Plan> getAllPlans(){
        return planRepository.findAll();
    }

    @GetMapping("/plan/{id}")
    Plan getPlanById(@PathVariable Long id){
        return planRepository.findById(id)
            .orElseThrow(() -> new PlanNotFoundException(id));
    }

    @PutMapping("/plan/{id}")
    Plan updatePlan(@RequestBody Plan newPlan,@PathVariable Long id){
        return planRepository.findById(id)
            .map(Plan -> {
                Plan.setAge(newPlan.getAge());
                Plan.setBodyType(newPlan.getBodyType());
                Plan.setGoal(newPlan.getGoal());
                Plan.setBodywant(newPlan.getBodywant());
                Plan.setProblemarea(newPlan.getProblemarea());
                Plan.setHeight(newPlan.getHeight());
                Plan.setCurrentweight(newPlan.getCurrentweight());
                Plan.setTargetweight(newPlan.getTargetweight());
                return planRepository.save(Plan);
            }).orElseThrow();
    }

    @DeleteMapping("/plan/{id}")
    String deletePlan(@PathVariable Long id){
        if(!planRepository.existsById(id)){
            throw new PlanNotFoundException(id);
        }
        planRepository.deleteById(id);
        return "Plan with id "+id+" has been deleted successfully";
    }

}
