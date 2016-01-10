package org.konurbaev.extjs;

import org.konurbaev.extjs.model.Car;
import org.konurbaev.extjs.model.dao.CarDao;
import org.konurbaev.extjs.model.dao.Impl.CarDaoImpl;
import org.konurbaev.extjs.service.CarService;
import org.konurbaev.extjs.service.Impl.CarServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
@ComponentScan(basePackages = {"org.konurbaev.extjs"})
@EnableAutoConfiguration
class App {

    @Bean
    CommandLineRunner init(CarDao carDao, CarService carService) {
        return (evt) -> {
            Car car = new Car();
            car.setName("mercedes");
            car.setPrice(Long.valueOf(35000));
            carService.add(car);
        };
    }

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}
