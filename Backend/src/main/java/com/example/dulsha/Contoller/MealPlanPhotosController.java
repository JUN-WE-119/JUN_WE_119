package com.example.dulsha.Contoller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;
import java.util.UUID;

@RestController
@RequestMapping("/api/images")
@CrossOrigin
public class MealPlanPhotosController {

    @Value("${upload.path}") // Assuming you have configured a path in application.properties
    private String uploadPath;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadImage(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("Please upload a file");
        }

        try {
            // Generate a unique filename for the uploaded image
            String fileName = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
            File destFile = new File(uploadPath + fileName);
            file.transferTo(destFile);

            // Return the URL of the uploaded image
            String imageUrl = "/uploads/" + fileName; // Assuming '/uploads/' is your public directory
            return ResponseEntity.ok(imageUrl);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error uploading image: " + e.getMessage());
        }
    }
}
