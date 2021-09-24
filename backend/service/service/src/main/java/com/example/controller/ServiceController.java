package com.example.controller;

import com.example.entity.ServiceEntity;
import com.example.service.ServiceR;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Service")
@CrossOrigin(origins = "*")
public class ServiceController {
    @Autowired
    ServiceR service;

    @GetMapping("/")
    public List<ServiceEntity> getAllServices(){
        return service.getAllService();
    }

    @PostMapping("/")
    public ServiceEntity createService(@RequestBody ServiceEntity ser){

        return service.createService(ser);

    }

    @GetMapping("/{id}")
    public Optional<ServiceEntity> getService(@PathVariable Long id){
        return service.getService(id);

    }


}
