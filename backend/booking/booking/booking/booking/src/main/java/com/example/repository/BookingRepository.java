package com.example.repository;

import com.example.entity.BookingEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BookingRepository extends MongoRepository<BookingEntity,Long> {
    Optional<BookingEntity> findByBookingId(Long bookingId);

}
