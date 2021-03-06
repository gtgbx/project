package com.test.sample.demo;

import java.net.InetAddress;
import java.net.UnknownHostException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class DemoApplication {
	
    @RequestMapping("/")
    public String home() {
        try {
			return "Hello Docker World."
			        + "<br />Welcome to " + InetAddress.getLocalHost().getHostName() + ". IP: " + InetAddress.getLocalHost().getHostAddress();
		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "Error";
		}
    }

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
}
