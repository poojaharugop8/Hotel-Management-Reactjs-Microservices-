package com.example.passenger.controller;

import com.example.passenger.entity.HotelS;
import com.example.passenger.service.HotelSService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/passenger")

public class HotelSController {
    @Autowired
    private HotelSService passService;

    @PostMapping("/")
    public HotelS savePassenger(@RequestBody HotelS hotelS){
        System.out.println(hotelS.toString());
        return passService.savePassenger(hotelS);
    }

    @GetMapping("/{pId}")
    public HotelS findPassengerByPid(@PathVariable("pId") Long id){
        return passService.findPassengerByPId(id);
    }
    @PutMapping("/{pId}")
    public HotelS updateFlight(@PathVariable("pId") Long pId, @RequestBody HotelS pass)
    {
        return passService.updatePassenger(pId,pass);

    }



    @DeleteMapping("/")
    public String deleteAllPassenger(){
        return passService.deleteAllPassenger();
   }

    @DeleteMapping("/{pId}")
    public String deleteFlight(@PathVariable("pId") Long id) {
        return passService.deletePassenger(id);
    }

}
