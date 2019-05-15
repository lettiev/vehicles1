let car: Car;

function submitform() {

    let plate = <HTMLInputElement>document.getElementById("plate");
    let brand = <HTMLInputElement>document.getElementById("brand");
    let color = <HTMLInputElement>document.getElementById("color");

    console.log(plate.value);
    car = new Car(plate.value, color.value, brand.value);
    
    show_Data_form();
}

function show_Data_form(){

const carTitle =     <HTMLInputElement>document.getElementById("carInfo");
carTitle.innerText = "Registered car:" + "PLATE: " + car.plate + " BRAND: " + car.brand + " COLOR: " + car.color;
 

}

function addWheels() {

    let rueda1 = <HTMLInputElement>document.getElementById("rueda1");
    let diametro1 = <HTMLInputElement>document.getElementById("diametro1");
    let rueda2 = <HTMLInputElement>document.getElementById("rueda2");
    let diametro2 = <HTMLInputElement>document.getElementById("diametro2");
    let rueda3 = <HTMLInputElement>document.getElementById("rueda3");
    let diametro3 = <HTMLInputElement>document.getElementById("diametro3");
    let rueda4 = <HTMLInputElement>document.getElementById("rueda4");
    let diametro4 = <HTMLInputElement>document.getElementById("diametro4");
    
    let wheel1 = new Wheel(Number(diametro1.value), rueda1.value);
    let wheel2 = new Wheel(Number(diametro2.value), rueda2.value);
    let wheel3 = new Wheel(Number(diametro3.value), rueda3.value);
    let wheel4 = new Wheel(Number(diametro4.value), rueda4.value);

     car.addWheel(wheel1);
     car.addWheel(wheel2); 
     car.addWheel(wheel3); 
     car.addWheel(wheel4);    
      

show_wheel_form();
  
}  

function show_wheel_form(){
    console.log(car.wheels);

    console.log(car.wheels[0].diameter);
    const wheelTitle = <HTMLInputElement>document.getElementById("wheelTitle");
    wheelTitle.innerText = "Wheels: Wheel 1: " + car.wheels[0].brand + " Diametre 1: " + car.wheels[0].diameter + "Wheel 2: " + car.wheels[1].brand + " Diametre 2: " + car.wheels[1].diameter + "Wheel 3: " + car.wheels[2].brand + " Diametre 3: " + car.wheels[2].diameter + "Wheel 4: " + car.wheels[3].brand + " Diametre 4: " + car.wheels[3].diameter;
        
}