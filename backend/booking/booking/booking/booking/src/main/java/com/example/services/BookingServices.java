package com.example.services;

import com.example.entity.BookingEntity;
import com.example.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BookingServices {

    @Autowired
    private BookingRepository repo;
    public BookingEntity bookRoom(BookingEntity book) {
        return repo.save(book);
    }
    public Optional<BookingEntity> findBookingById(Long bookingId){
        return repo.findByBookingId(bookingId);
    }
//    @Autowired
//    private RestTemplate restTemplate;
//    public ResponseTemplateVO findBookingById(Long bookingId) {
//        try {
//            ResponseTemplateVO vo = new ResponseTemplateVO();
//            BookingEntity booking = repo.findBookingByRoomId(bookingId);
//
//            Room room = restTemplate.getForObject("http://localhost:8090/rooms/id/" + booking.getRoomId(), Room.class);
//            vo.setBookingEntity(booking);
//            vo.setRoom(room);
//            return vo;
//        }
//        catch (Exception ex){
//            System.out.println(ex.getMessage());
//            return null;
//        }
//    }

}
