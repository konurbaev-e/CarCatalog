package org.konurbaev.extjs.service.Impl;

import org.konurbaev.extjs.model.Car;
import org.konurbaev.extjs.model.dao.CarDao;
import org.konurbaev.extjs.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;
import java.util.List;

@Service
public class CarServiceImpl implements CarService {

    @Autowired
    private CarDao carDao;

    public CarDao getCarDao() {
        return carDao;
    }

    public void setCarDao(CarDao carDao) {
        this.carDao = carDao;
    }

    @Transactional
    @Override
    public Boolean add(Car car) {
        List<Car> duplicate = carDao.findByCar(car.getName(), car.getPrice());
        if (duplicate.isEmpty()) {
            carDao.add(car);
            return true;
        }
        return false;
    }

    @Transactional
    @Override
    public void update(Car car) {
        carDao.update(car);
    }

    @Transactional
    @Override
    public Collection<Car> getCars(String search) {
        return carDao.getCars(search);
    }

    @Transactional
    @Override
    public void delete(Car car) {
        carDao.delete(car);
    }

}
