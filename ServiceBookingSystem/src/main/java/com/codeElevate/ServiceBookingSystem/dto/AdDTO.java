package com.codeElevate.ServiceBookingSystem.dto;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AdDTO {

    private Long id;

    private String serviceName;

    private String description;

    private double price;

    private MultipartFile img;


    private byte[] returnedImg;

    private String companyName;
}
