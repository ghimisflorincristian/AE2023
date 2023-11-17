package com.example.demo.service;

import com.example.demo.model.Smartphone;
import com.example.demo.repository.SmartphoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SmartphoneService {
    private final SmartphoneRepository smartphoneRepository;

    @Autowired
    public SmartphoneService(SmartphoneRepository smartphoneRepository) {
        this.smartphoneRepository = smartphoneRepository;
    }

    public List<Smartphone> getSmartphones() {
        return smartphoneRepository.findAll();
    }

    public Smartphone saveSmartphone(Smartphone smartphone) {
        return smartphoneRepository.save(smartphone);
    }

    public Optional<Smartphone> getSmartphone(Long id) {
        return smartphoneRepository.findById(id);
    }

    public void deleteSmartphone(Long id) {
        smartphoneRepository.deleteById(id);
    }
}
