
// class Person {
//     // name;
//     // age;
//     // surname;

//     constructor(name, age, surname) {
//         this.name = name;
//         this.age = age;
//         this.surname = surname;
//     }

//     displayInfo() {
//         alert('Описание человека: \t Имя ${this.name}. Возраст ${this.age}. Фамилия ${this.surname}')
//     }

// info(){
//     console.log('Национальность: ${this.nationality}')
// }

// let person1 = new Person("Egor","18","Yanyuk")
// let person2 = new Person("Regina","18","Andreevna")
// let person3 = new Person("Ilya","18","Крутой")
// person1.displayInfo()
// person2.displayInfo()
// person3.displayInfo()
// person2.info()





// // //Создайте класс который представляет сущность автомобиля
// class Car {
//     constructor(marka, model, ls, year, color) {
//         this.marka = marka;
//         this.model = model;
//         this.ls = ls;
//         this.year = year;
//         this.color = color;
//     }

//     displayinfo() {
//         alert(`Марка: ${this.marka}. Модель: ${this.model}. Лошадиные силы: ${this.ls}. Год: ${this.year}. Цвет: ${this.color}`);
//     }
// }

// let car1 = new Car("Mercedes-Benz", "CLS", "449", "2021", "grey");
// let car2 = new Car("Mercedes-Benz", "CLa", "249", "2019", "grey");
// let car3 = new Car("Mercedes-Benz", "E", "249", "2015", "black");

// car1.displayinfo();
// car2.displayinfo();
// car3.displayinfo();




// class Wallet {
//     money;
//     constructor(money){
//     this.#money = money;
//     }
// }


// class BankAccount {
//     money;
//     constructor(balance){
//     this._balance = balance;
//     }
//     get balance() {
//         console.log("Получение баланса")
//         return this._balance;
//     }

//     set balance(newBalance) {
//         if (newBalance < 0){
//             throw new Error("Баланс не может быть отрицательным")
//         }
//         console.log(`Изменение баланса с ${this.balance} на ${this.newBalance}`)
//         this.balance = new Balance
//     }
//     deposit(amount) {
//         this.balance = this._balance + amount;
//     }

//     //снятие средств
//     withdraw money(amount) {
//         if(amount  > this._balance){
//             throw now Eror("недостаточно средств")
//         }
//         this.balance = this._balance//сетер используется
//     } 

// }

// const myAccount = new BankAccount(500000)
// alert(myAccount._balance) 
// myAccount.deposit(5000)
// alert(myAccount._balance) 
// myAccount.withdrawMoney(70000)
// alert(myAccount._balance)

// class Player {
//     constructor(hp, xp, level) {
//         this._hp = hp;
//         this._xp = xp;
//         this._level = level;
//     }

//     get hp() {
//         return this._hp;
//     }

//     set hp(newHp) {
//         if (newHp < 0 || newHp > 100) {
//             throw new Error("Здоровье игрока не может быть отрицательным или больше 100")
//         }
//         this._hp = newHp;
//     }

//     adminHp(newHp) {
//         this._hp = newHp
//     }
// }

// let player1 = new Player(100, 0, 1)
// console.log(player1.hp);
// player1.adminHp(-1);


// class animal  {
//     constructor(name) {
//         TimeRanges.name = name
//     }

//     eat() {
//         console.log(` ${this.name}`)
//     }
//     sleep () {
//         console.log(` ${this.sleep}`спит___ZZZZZZZZ)
//     }
//     walk (){
//         console.log(` ${this.walk}`бегает)
//     }
// } 




// // //Дочение классы
// class cat extends Animal{
//     constructor Animal(name:color){
//         super(name);
//         this.color = color
//     }
//     meow(){
//         console.log(` ${this.meow}`)
//     }
//     class Dog  extends Animal {
//         constructor(name,breed){
//             super(name)
//             this.breed = breed
//         }

//         woof(){
//             console.log(` ${this.woof}` )
//         }
//     }
// }



class Animal  {
    constructor(name) {
        TimeRanges.name = name
    }

    eat() {
        console.log(` ${this.name}`)
    }
    sleep () {
        console.log(` ${this.sleep}`ZZZZZZ)
    }
    walk (){
        console.log(` ${this.walk}`бегает)
    }
    yells (){
        console.log(` ${this.yells}`орет)
    }
     food (){
        console.log(` ${this. food}`еда)
    }
} 


class cat extends Animal{
    constructor(name, color) {
        super(name);
        this.color = color
    }
    meow(){
        console.log(` ${this.meow}`)
    }
}
    let murzik = new cat("Мурзик","Серая")
    murzik.sleep()
    murzik.eat()
    murzik.meow()
    murzik.yells()
    murzik. food()