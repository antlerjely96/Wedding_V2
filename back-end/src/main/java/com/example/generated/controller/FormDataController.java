package com.example.generated.controller;

import com.example.generated.model.FormData;
import com.example.generated.service.FormDataService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/form")
public class FormDataController {

    private final FormDataService service;

    public FormDataController(FormDataService service) {
        this.service = service;
    }

    @PostMapping
    public FormData submit(@RequestBody FormData data) {
        return service.save(data);
    }
}
