class Vehicle {
  constructor(name, wheelCount, maxSpeed) {
    this.name = name;
    this.wheelCount = wheelCount;
    this.maxSpeed = maxSpeed;
    this.speed = 0;
  }

  accerlerate() {
    this.speed = this.speed + (maxSpeed/3)
  }


}

class Car extends Vehicle {
  constructor(name) {
    super(name, 4, 130);
  }
  
  drive() {
    if(this.maxSpeed < 180) {
      return "Vroom. "
    } else {

      return "Vroom. I'm a Ferrari!"
    }
  }
}

class Ferrari extends Car {
  constructor(name) {
    super('Ferrari', 4) 
    this.maxSpeed = 180;
    

  }
  
}


module.exports = {
  Vehicle,
  Car,
  Ferrari
}