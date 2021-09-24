package com.example.service;

import com.example.entity.ServiceEntity;
import com.example.repository.ServiceRepositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service

public class ServiceR {
    @Autowired
    private ServiceRepositories repo;


    public List<ServiceEntity> getAllService() {

        List<ServiceEntity> ser=new ArrayList<ServiceEntity>();
        repo.findAll().forEach(ser::add);
        return ser;
    }


    public ServiceEntity createService(ServiceEntity ser) {
        return repo.save(ser);
    }

    public Optional<ServiceEntity> getService(Long id) {
        return repo.findById(id);
    }
}
