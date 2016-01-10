package org.konurbaev.extjs.model.dao;

import org.konurbaev.extjs.model.Car;
import org.springframework.context.annotation.Bean;

import java.util.Collection;
import java.util.List;

public interface CarDao {

    void add(Car car);

    void update(Car car);

    void delete(Car car);

    Collection<Car> getCars(String search);

    List<Car> findByCar(String name, Long price);

}