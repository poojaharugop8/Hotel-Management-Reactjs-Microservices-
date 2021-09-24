package com.example.controller;

import com.example.entity.BookingEntity;
import com.example.services.BookingServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/bookings")
@CrossOrigin(origins = "*")
public class BookingController {
    @Autowired
    private BookingServices service;

    @PostMapping("/")
    public BookingEntity bookRoom(@RequestBody BookingEntity book){
        return service.bookRoom(book);
    }

    @GetMapping("/{id}")
    public Optional<BookingEntity> getBookingDetails(@PathVariable("id") Long bookingId){
        return service.findBookingById(bookingId);
    }

}
