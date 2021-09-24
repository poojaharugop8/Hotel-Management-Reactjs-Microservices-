package com.rooms.service;

import com.rooms.entity.Room;
import com.rooms.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RoomService {

    @Autowired
    private RoomRepository roomRepository;

    public Room saveRoom(Room room) {
        return roomRepository.save(room);
    }

    public Optional<Room> findRoomById(Long id) {
        return roomRepository.findById(id);
    }

    public List<Room> findRoomByType(String type) {
        List<Room> rooms = new ArrayList<>();
        rooms = roomRepository.findByType(type);
        if (!rooms.isEmpty()) {
            return rooms;
        }
        return null;
    }


    public List<Room> searchByType(Room room) {
        List<Room> rooms = new ArrayList<>();
        roomRepository.findAll().forEach((r)->{
            if(r.getType().equals(room.getType()) && r.getPrice() <= room.getPrice() && r.isBreakfast() == room.isBreakfast() && r.getCapacity() >= room.getCapacity()){
                rooms.add(r);
            }
        });
        return rooms;

    }

    public List<Room> getAllRooms(){
        List<Room> rooms = new ArrayList<>();
        roomRepository.findAll().forEach(rooms::add);
        if (!rooms.isEmpty()) {
            return rooms;
        }
        return null;
    }
}
