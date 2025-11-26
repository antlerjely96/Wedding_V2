package com.example.generated.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "customers")
public class FormData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String attending;
    private String guests;
    private String message;
    private String name;
    private String side;
    private String value;

    // getters and setters
public String getAttending() {
    return this.attending;
}
public void setAttending(String attending) {
    this.attending = attending;
}

public String getGuests() {
    return this.guests;
}
public void setGuests(String guests) {
    this.guests = guests;
}

public String getMessage() {
    return this.message;
}
public void setMessage(String message) {
    this.message = message;
}

public String getName() {
    return this.name;
}
public void setName(String name) {
    this.name = name;
}

public String getSide() {
    return this.side;
}
public void setSide(String side) {
    this.side = side;
}

public String getValue() {
    return this.value;
}
public void setValue(String value) {
    this.value = value;
}

}
