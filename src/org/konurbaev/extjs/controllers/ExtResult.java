package org.konurbaev.extjs.controllers;

import org.konurbaev.extjs.model.Car;

public class ExtResult {
    private boolean success;
    private Car data;


    public ExtResult(boolean success, Car data) {
        this.success = success;
        this.data = data;
    }

    public ExtResult() {
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public Car getData() {
        return data;
    }

    public void setData(Car data) {
        this.data = data;
    }
}