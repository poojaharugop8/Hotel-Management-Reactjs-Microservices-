package com.example.repository;

import com.example.entity.ServiceEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceRepositories extends MongoRepository<ServiceEntity, Long> {



}
