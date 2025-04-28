// function isPalindrom(str) {
//     let lowerStr = str.replace('').toLowerCase();
//     if(lowerStr.length <= 1) {
//         return true;
//     }
//     if (lowerStr[0] !== lowerStr[lowerStr.length - 1]) {
//         return false
//     }

//     return isPalindrom(lowerStr.slice(1, -1))
// }

// console.log(isPalindrom('Regina'))
// console.log(isPalindrom('ШАЛАШ'))


// function isPalindrom(str) {
//     let lowerStr = str.replace(/\s+/g, '').toLowerCase(); // удаление пробелов и приведение к нижнему регистру
//     if (lowerStr.length <= 1) {
//         return true;
//     }
//     if (lowerStr[0] !== lowerStr[lowerStr.length - 1]) {
//         return false;
//     }

//     return isPalindrom(lowerStr.slice(1, - 1)); // рекурсивный вызов
// }

// console.log(isPalindrom('Regina')); // false
// console.log(isPalindrom('ШАЛАШ'));



// function isPalindrom(str) {
//     let lowerStr = str.replace(/\s+/g, '').toLowerCase(); 
//     if (lowerStr.length <= 1) {
//         return false;
//     }
//     if (lowerStr[0] !== lowerStr[lowerStr.length - 1]) {
//         return true;
//     }

//     return isPalindrom(lowerStr.slice(1, - 1)); 
// }

// alert(isPalindrom('Regina')); 
// alert(isPalindrom('ШАЛАШ'));



// //стрелочная функция
// let age = prompt("Возраст", 18);
// let welcome = (age < 18) ?
//   () => alert('Салам!') :
//   () => alert("Здравствуйте!");
// welcome();

// //обработка ошибок try catch
// try{
//     alert("Начало блока try")
//     let number = 2
//     let number1 = 1
//     alert(number + number1)
//     alert("Конец блока try")

// }catch(err){
// alert("ошибка")
// }


// let json = '{"age': 30}'

// try{
// let user = JSON.parse(json)

// if(!user.age){
//     throw new SyntaxError("Данные не полные")
// }
// console.log(user.age)
// }catch(error){
//     alert("Error server" + error.message)
// }finally{
//     alert("Блок finally")
// }


//колбеки
// function script(src){
//     let script = document.createElement('script');
//     script.src = src;
//     document.head.append(script)
// }

// function loadScript(scr,callback){
//     let script = document.createElement('script')
//     script.src = src 
//     script.onload = () => callback
// }


function fetchData(callBack){
    setTimeout(()  => {
        let user = {id:1,name:"Egor"}
    }
    callBack(user)
}