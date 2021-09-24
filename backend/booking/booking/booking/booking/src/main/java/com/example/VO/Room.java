package com.example.VO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class Room {

    private Long id;
    private String name;
    private String slug;
    private String type;
    private Long size;
    private Long price;
    private Long capacity;
    private boolean breakfast;
    private boolean pet;
    private boolean featured;
}
