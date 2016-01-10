package org.konurbaev.extjs.controllers;

import org.konurbaev.extjs.model.Car;
import org.konurbaev.extjs.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/car")
public class CarController {

    @Autowired
    private CarService carService;


    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public Collection<Car> getCars(String search) {
        return carService.getCars(search);
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public ExtResult setCar(@RequestBody Car car) {
        return new ExtResult(carService.add(car), car);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public String deleteCar(@RequestBody Car car) {
        carService.delete(car);
        return "delete";
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    @ResponseBody
    public Car updateCar(@RequestBody Car car) {
        carService.update(car);
        return car;
    }
}