"use strict";
var car;
function submitform() {
    var plate = document.getElementById("plate");
    var brand = document.getElementById("brand");
    var color = document.getElementById("color");
    console.log(plate.value);
    car = new Car(plate.value, color.value, brand.value);
    show_Data_form();
}
function show_Data_form() {
    var carTitle = document.getElementById("carInfo");
    carTitle.innerText = "Registered car:" + "PLATE: " + car.plate + " BRAND: " + car.brand + " COLOR: " + car.color;
}
function addWheels() {
    var rueda1 = document.getElementById("rueda1");
    var diametro1 = document.getElementById("diametro1");
    var rueda2 = document.getElementById("rueda2");
    var diametro2 = document.getElementById("diametro2");
    var rueda3 = document.getElementById("rueda3");
    var diametro3 = document.getElementById("diametro3");
    var rueda4 = document.getElementById("rueda4");
    var diametro4 = document.getElementById("diametro4");
    var wheel1 = new Wheel(Number(diametro1.value), rueda1.value);
    var wheel2 = new Wheel(Number(diametro2.value), rueda2.value);
    var wheel3 = new Wheel(Number(diametro3.value), rueda3.value);
    var wheel4 = new Wheel(Number(diametro4.value), rueda4.value);
    car.addWheel(wheel1);
    car.addWheel(wheel2);
    car.addWheel(wheel3);
    car.addWheel(wheel4);
    show_wheel_form();
}
function show_wheel_form() {
    console.log(car.wheels);
    console.log(car.wheels[0].diameter);
    var wheelTitle = document.getElementById("wheelTitle");
    wheelTitle.innerText = "Wheels: Wheel 1: " + car.wheels[0].brand + " Diametre 1: " + car.wheels[0].diameter + "Wheel 2: " + car.wheels[1].brand + " Diametre 2: " + car.wheels[1].diameter + "Wheel 3: " + car.wheels[2].brand + " Diametre 3: " + car.wheels[2].diameter + "Wheel 4: " + car.wheels[3].brand + " Diametre 4: " + car.wheels[3].diameter;
}
