package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/kafka/new_employee")
public class KafkaSimpleController {

    private KafkaTemplate<String, Employee> kafkaTemplate;

    @Autowired
    public KafkaSimpleController(KafkaTemplate<String, Employee> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    @PostMapping
    public void post(@RequestBody Employee employee) {
        kafkaTemplate.send("new-employees", employee);
    }

    @KafkaListener(topics = "new-employees")
    public void getFromKafka(Employee employee){
        System.out.println(employee.toString());
    }
}
