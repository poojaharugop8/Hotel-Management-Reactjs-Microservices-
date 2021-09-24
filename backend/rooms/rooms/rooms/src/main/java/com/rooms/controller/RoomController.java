package com.rooms.controller;

import com.rooms.entity.Room;
import com.rooms.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/rooms")
@CrossOrigin(origins = "*")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @PostMapping("/")
    public Room saveRoom(@RequestBody Room room){
        return roomService.saveRoom(room);
    }

    @GetMapping("/")
    public List<Room> getAllRooms(){
        return roomService.getAllRooms();
    }


    @GetMapping("/id/{id}")
    public Optional<Room> findRoomById(@PathVariable("id") Long id){
        return roomService.findRoomById(id);
    }

    @GetMapping("/type/{type}")
    public List<Room> findRoomByType(@PathVariable("type") String type){
        return roomService.findRoomByType(type);
    }

    @PostMapping("/search")
    public List<Room> searchByType(@RequestBody Room room){
        return roomService.searchByType(room);
    }
}
