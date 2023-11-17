package com.example.demo.controller;

import com.example.demo.model.Smartphone;
import com.example.demo.service.SmartphoneService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping(path="api/v1/smartphone")
public class SmartphoneController {

    private final SmartphoneService smartphoneService;

    public SmartphoneController(SmartphoneService smartphoneService) {
        this.smartphoneService = smartphoneService;
    }

    @GetMapping
    public List<Smartphone> getSmartphones() {
       return smartphoneService.getSmartphones();
    }

    @GetMapping("/{id}")
    public Optional<Smartphone> getSmartphone(@PathVariable Long id) {
        return smartphoneService.getSmartphone(id);
    }

    @PostMapping("/addSmartphone")
    @ResponseBody
    public ResponseEntity<?> addSmartphone(@RequestBody Smartphone smartphone) {
        smartphoneService.saveSmartphone(smartphone);
        return new ResponseEntity<>("Smartphone added succesfully!", HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteByName(@RequestParam(value = "id") Long id) {
        smartphoneService.deleteSmartphone(id);
        return new ResponseEntity<>("Smartphone deleted!", HttpStatus.NO_CONTENT);
    }
}
