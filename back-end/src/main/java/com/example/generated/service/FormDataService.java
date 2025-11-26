package com.example.generated.service;

import com.example.generated.model.FormData;
import com.example.generated.repository.FormDataRepository;
import org.springframework.stereotype.Service;

@Service
public class FormDataService {

    private final FormDataRepository repo;

    public FormDataService(FormDataRepository repo) {
        this.repo = repo;
    }

    public FormData save(FormData data) {
        return repo.save(data);
    }
}
