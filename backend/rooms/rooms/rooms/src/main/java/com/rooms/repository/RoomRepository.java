package com.rooms.repository;

import com.rooms.entity.Room;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RoomRepository extends MongoRepository<Room, Long> {
    Optional<Room> findById(Long id);

    List<Room> findByType(String type);

}
