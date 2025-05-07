// class cat {
//     makesound() {
//         console.log ("Мяю")
//     }
// }

// class dog {
//     makesound() {
//         console.log ("гав")
//     }
// }

//  function AnimalSound(anmal){
//     AnimalSound.makesound()
//  }

//  let Animalcat = new Cat();
//  let Animaldog = new Dog();

//  AnimalSound(animalcat)

// class Cat {
//     makeSound() {
//         console.log("Мяу")
//     }
// }

// class Dog {
//     makeSound() {
//         console.log("Гав")
//     }
// }

// function animalSound(animal) {
//     animal.makeSound()
// }

// let animal1Cat = new Cat();
// let animal2Dog = new Dog();

// animalSound(animal1Cat)
// animalSound(animal2Dog)


class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
        this.speed = 0
        this.engine = false
    }

    startEngine() {
        throw new Error("Метод должен быть в подклассе");

    }

    stopEngine() {
        this.engine = false;
        console.log(`${this.getInfo()} двигатель выключен`)
    }

    // Метод ускорения
    acceleration(amount) {
        if (!this.engine) {
            console.log("Сначала запустите двигатель");
            return;
        }
        this.speed += amount;
        console.log(`${this.getInfo()} ускоряется до ${this.speed} км/ч`)
    }

    // Метод торможения
    brake(amount) {
        this.speed = Math.max(0, this.speed - amount);
        console.log(`${this.getInfo()} замедляется до ${this.speed} км/ч`)
    }

    // Получение инфы об авто
    getInfo() {
        return `${this.brand} ${this.model} ${this.year}`
    }
}

class GasolineCar extends Vehicle {
    constructor(brand, model, year, fuelCapacity) {
        super(brand, model, year);
        this.fuelCapacity = fuelCapacity; // Объем топливного бака;
        this.currentFuel = fuelCapacity; // Текущий уровень топлива;
    }

    startEngine() {
        if (this.currentFuel <= 0) {
            console.log("Нет топлива! Едь на росНефть");
            return false;
        }
        this.engine = true;
        console.log(`${this.getInfo()} двигатель запущен (бензин)`);
        return true;
    }
    // Это уникальный метод для бенз. двигателя
    refuel(liters) {
        this.currentFuel = Math.max(this.fuelCapacity, this.currentFuel + liters);
        console.log(`Заправлено. Топлива ${this.currentFuel} литров. ${this.fuelCapacity}`)
    }

    acceleration(amount) {
        if (!super.startEngine()) return;
        let fuelConsumption = amount * 0.1; // Примерный расход топлива
        if (this.currentFuel < fuelConsumption) {
            console.log("Недостаточно топлива")
            return;
        }
        this.currentFuel -= fuelConsumption;
        super.acceleration(amount);
        console.log(`Остаток топлива ${this.currentFuel.toFixed(1)}литра`)

    }

}

class ElecrticCar extends Vehicle {
    constructor(brand, model, year, batteryCapacity) {
        super(brand, model, year);
        this.batteryCapacity = batteryCapacity // Емкость батареи кВт . ч
        this.currentCharge = batteryCapacity // Текущий заряд
    }

    // Полиморфизм, переопределяем метод запуска двигателя для электромобиля
    startEngine() {
        if (this.currentCharge <= 0) {
            console.log("Батарея разряжена")
            return false;
        }
        this.engine = true;
        console.log(`${this.getinfo()}Двигатель запущен`)
    }
    charge(kwh) {
        this.currentCharge = Math.min(this.batteryCapacity, this.currentCharge + kwh);
        console.log(`Заряжено.Батарея: ${this.currentCharge.toFixed(1)} кВт.ч ${this.batteryCapacity} квч`);
    }

    //Полиморфизм переопределяем ускорение  с учетом расхода энергии
    acceleration(amount) {
        if (!super.startEngine()) return;
        let energyConsumtion = amount * 0.05 //расход примерный
        if (this.currentCharge < energyConsumtion) {
            console.log("недостаточно заряда, едь на станцию")
            return;
        }

        this.currentCharge -= energyConsumtion;
        super.acceleration(amount);
        console.log(`Остаток заряда: ${this.currentCharge.toFixed(1)}кВт ч`)
    }
}

class HybridCar extends GasolineCar {
    constructor(make, model, year, fuelCapacity, batteryCapacity) {
        super(this.brand, model, year, fuelCapacity);
        this.batteryCapacity = batteryCapacity;
        this.currentFuel = batteryCapacity;
        this.ElecrticMode = false
    }
    startEngine() {
        if (this.currentCharge > 0) {
            this.ElecrticMode = true;
            console.log(`${this.getInfo()}`)
            return true
        }
        else if (this.currentFuel > 0) {
            this.engine - true;
            this.ElecrticMode = false;
            console.log(`${this.getInfo()} Бензиновый двигатель запущен`)
            return true
        }
        console.log("нет заряда и топлива")
        return false;
    }

    acceleration(amount) {
        if (!this.ElecrticMode) {
            let energyConsumtion = amount * 0.04
            if (this.currentCharge < energyConsumtion) {
                console.log("переключился на бензин")
                this.ElecrticMode = false
                if (this.currentFuel <= 0) {
                    console.log("бензин закончился");
                    return
                }
                this.currentCharge -= energyConsumtion;
                super.acceleration(amount);
                console.log(`${this.currentCharge.to toFixed(1)} кВТ`)
                return;

            }

            this.currentFuel -= fuelCapacity;
            super.acceleration(amount);
            console.log(`${ this.currentFuel.toFixed(1) } `)
        }
        function testDrive(Vehicle) {
            console.log(`vehicle.getInfo()`)
        }
        vehicle.startEngine();
        vehicle.acceleration(20);
        vehicle.acceleration(30);
        vehicle.brake(40);
        vehicle.acceleration(25);
        vehicle.startEngine();
        
    }
}
    


