// // //функция конструктор
// // //функция консторуктор всегда должна быть с большой буквы
// // //выполняется с помощью оператора "new"
// // function Car(brand, model, number, color) {
// //     this.brand = brand
// //     this.model = model
// //     this.number = number
// //     this.color = color
// // }

// // let bmwx7m = new Car("BMW", "X7M", "VOR777", "BLACK")
// // let bmwx5m = new Car("BMW", "X5M", "LLL", "BLACK")

// // console.log(bmwx7m)

// // // //Когда конструкция вызывается как new car происходит следущее
// // // 1.Создается новый пустой обьект, и он присваивает this
// // // 2.Выполняется тело функции. Обычно оно модифицирует this, добавляя туда новые свойства
// // // 3.Возвращается значение this


// // function Car(brand, model, number, color)
// //this = {}
// //добавление свойства к this
// // this.brand = brand
// //return this

// // Таким образом 
// // let bmwx7m = new Car("BMW","X7M","VOR777","BLACK")
// // Представляет из себя как бы мы писали
// // let car = {
// //     brand:"Bmw"
// //     model:"X7m"
// // }


// // let user = new function(){
// // this name = 'Yan'
// // this.isAcademy = true;
// // }


//  Задание 1
// function Calculator() {

//     this.read = function() {
//       this.one = +prompt('Введите первое число');
// //       this.two = +prompt('Введите второе число');
//     };
//     this.sum = function() {
//       return this.one + this.two;
//     };
//     this.mul = function() {
//       return this.one * this.two;
//     };
//   }
//   let calculator = new Calculator();
//   calculator.read();
//   alert( "Сумма=" + calculator.sum() );
//   alert( "Умножение=" + calculator.mul() );


//Здадание 2
function Accumulator(startingValue) {
    this.value = startingValue;
    
    this.read = function() {
        this.value += +prompt('Введите число');
    };
}
let accumulator = new Accumulator(3);//изменение значения,прибавка числа
accumulator.read();
accumulator.read();
alert(accumulator.value);
    