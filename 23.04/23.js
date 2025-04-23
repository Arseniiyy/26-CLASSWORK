// // 2 в степени 2 = 4
// // function pow(a,b){
// //     let result = 1
// //     for(let i=0; i < b;i++ ){
// //         result *=a
// //     }
// //     return result;
// // }
// // alert(pow(2, 5))

// //рекурсивный метод
// // function pow(x,n){
// //     if (n == 1 ) {//база рекурсии
// //         return x
// //     }else{
// //         return x * pow(x,n - 1)
// //     }
// // }

// // alert(pow(2,5))
// // console.log((pow(2,5)))

// //шаги рекурсии
// //pow(2,3) = 2 * pow(2,3)
// //pow(2,3) = 2 * pow(2,2)
// //pow(2,2) = 2 * pow(2,1)
// //(2,1) = 2

// // function factorial(n){
// //     if(n == 1){
// //         return 1
// //     }else{
// //         return n * factorial(n - 1)
// //     }
// // }
// // console.log(factorial(3))

// // function sum


// // function Sum(n){
// //     if (n == 1 ) {//база рекурсии
// //         return n
// //     }else{
// //         return n + Sum(n - 1)
// //     }
// // }

// // alert(Sum(3))

// // function fib(n){
// //     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// // }
// // alert(fib(3))
// // alert(fib(7)) неправильно





// //Остаточные параметры и оператор расширения
// function sum(a,b){
//     return a + b
// }

// // console.log(sum(2,2,2,3,4,5,6,6,6))
// function printName(name,surname,...title){
//     console.log(name)
//     console.log(surname)
//     //title = ["Что то "]
//     console.log(title[0])
//     console.log(title[1])
//     console.log(title[2])
//     console.log(typeof(title))
// }
// printName("Arsenii","Egorka",1,2,3)

// function arquments(...args){
//     console.log(args)
// }
// arquments("Regina","Marta","Egor","Regina","Marta","Egor","Regina","Marta","Egor)

function sayHiBye(firstName,lastName){
    function getFullName(){
        return firstName + "" + lastName
    }
    console.log("Hello" + getFullName())
    console.log("paka" + getFullName())
}
sayHiBye("Regina","Marta")