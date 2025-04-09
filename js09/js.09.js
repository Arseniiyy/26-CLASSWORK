// // // // // // // //Методы примитива
// // // // // // // //значения примитивного значения
// // // // // // // //1. string,number,boolean,symbol,null,undefined,bignit
// // // // // // // //null,undefined = yt bvt.n vtnjljd

// // // // // // // // let object ={
// // // // // // // //     hello:function(){
// // // // // // // //         alert("Это функция в обьекте")
// // // // // // // //     }
// // // // // // // // }


// // // // // // // // let city = "Sochi"
// // // // // // // // console.log(city.toUpperCase())
// // // // // // // // //Метод toUpperCase() переводит все буквы  в верхний регистр.


// // // // // // let number = 1.9
// // // // // // console.log(number.toFixed())


// // // // // // //number
// // // // // // //числа в js хранятся в 64-битном формате IEEE-754, который называют числа с плавающей точкой двойной точности.

// // // // // // //BigInit -эти числа позволяют работать с целыми числами произвольной длины

// // // // // // // let million = 1000000;
// // // // // // // let mill = 1_000_000
// // // // // // // //синтаксический сахар- позволяет делать код более четабельным.
// // // // // // // let billion = le9

// // // // // // // let mcs = 0.000001
// // // // // // // let ms = 1e-6

// // // // // // // //Шестанцатеридные цифры 
// // // // // // // console.log(0xFF)//255


// // // // // // // let number = 255
// // // // // // // console.log(number.toString())
// // // // // // //метод возвращает строковое предстапвление чисел  в системе исчесления base


// // // // // // //base
// // // // // // //base-16 - для шестнадратеричного представления цвета,кодировки, символов
// // // // // // //Цифры 0-9 ,A-F
// // // // // // //base = 2 - обычно используется для откладки побитовых операций
// // // // // // //ифыу 36 - максимальный режим,цифры  могут быть 0-9,A-Z



// // // // // // // //Округление
// // // // // // // let value = 5.6
// // // // // // // console.log(Math.floor(value))
// // // // // // // console.log(Math.ceil(value))
// // // // // // // console.log(Math.round(value))


// // // // // // //Метод toFixed - округляет число до n знака после запятой  и возврящает  строковое представлении результата.

// // // // // // // console.log(typeof(value.toFixed(1)))


// // // // // // // alert(parseInt("500px"))
// // // // // // // alert(parseFloat("500px"))


// // // // // // alert(Math.random())
// // // // // // //это метод обьекта Math В Js, который генерирует случайное число в диапозоне от 0 до 1.
// // // // // // //Math.random() * (max- min) + min



// // // // // // //Строки
// // // // // // let word = 'hello'
// // // // // // alert('I love world ${word}')
// // // // // // //Спецсимволы для строк
// // // // // // alert('I love world\n ${word}')
// // // // // // //\n- перевод строки (enter)


// // // // // // //Измение регистра
// // // // // // //alert(word.toUpperCase())
// // // // // // //alert(word.toLowerCase())

// // // // // // //Массивы Array
// // // // // // let arr = new Array();
// // // // // // let arrl = [1,2,3,4,5,5,6,7,8,9,10,"Яблоко гнилое","Яблоко вкусное"]
// // // // // // console.log(arrl[arr.length-1])
// // // // // // console.log(arrl.at(-2))


// // // // // // console.log(arrl[12])
// // // // // arrl[12]= "Спелое яблоко"
// // // // // arrl[13]= "Спелое яблоко"
// // // // // console.log(arrl)
// // // // // alert(arrl.length)
// // // // // В массиве могут хранится  элементы любого  типа данных


// // // // // let array = ["egor","Yaa","Yaroslav","Marta"]
// // // // // array.push("Regina")
// // // // // console.log(array)


// // // // // let lastvalue = array.pop()
// // // // // console.log(lastvalue)
// // // // // console.log(array)


// // // // // array.unshift("Ilya")
// // // // // console.log(array)
// // // // // let myFirstStudent = array.shift()


// // // // // let array = ["egor","Yaa","Yaroslav","Marta"]
// // // // // for (let i = 0;i < array.length;i++){
// // // // //     console.log(array[i])
// // // // // }
// // // // // console.log("Другой Массив")
// // // // // let student = ["Nikita","Maga","Dima"]
// // // // // for (stud of student){
// // // // //     console.log(stud)
// // // // // }



// // // // // for(let value in student){
// // // // //     console.log(student[value])
// // // // // }


// // // // let array = new Array(2)


// // // // //Многомерные массивы
// // // // let matrix = {
// // // //     [1,2,3]
// // // //     [4,5,6]
// // // //     [7,8,9]
// // // // }
// // // // console.log(matrix[1][1])



// // // Задание 1
// // // // let styles = ["Джаз", "Блюз"];
// // // // styles.push("Рок-н-ролл");
// // // // styles.anpush = "Классика";
// // // // alert( styles.shift() );
// // // // styles.unshift("Рэп", "Регги");
// // // // console.log(styles)

// // // // let styles = ["Джаз", "Блюз"];
// // // // styles.push("Рок-н-ролл");
// // // // styles[Math.floor((styles.length - 1) / 2)] = "Классика";
// // // // alert( styles.shift() );
// // // // styles.unshift("Рэп", "Регги");


// // Задание 2
// function sumInput() {
//     let numbers = [];
//     while (true) {
//         let value = prompt("Введите число", 0);
//         if (value === null)
//             numbers.push(+value);
//     }
//     let sum = 0;
//     for (let number of numbers) {
//         sum += number;
//     }
//     return sum;
// }
// alert(sumInput());