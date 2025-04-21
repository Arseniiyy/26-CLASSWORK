// let map = new.Map([
//     ['regina',1]
//     ['regina',2]
//     ['regina',3]
//     ['regina',4]
// ])
// let reverseMap = new Map()
// for(let [key,value]of map){
//     reverseMap.set(value,key)
// }
// console.log(reverseMap)

// let user = {
//     name: "Marta",
//     age: 17
// }

// let sales = {
//     1.60,
//     2.30,
//     3.90
// }
// // Object.keys(user)
// // Object.values(user)
// // Object.entries(user)
// for(let value of Object.values(user)){
//     alert(value)
// }
// let multiplay = Object.fromEntries(
//     Object.entries(sales).map(([key,value / 2]))
// )
// console.log(multiplay)

//Object.entries принимает обьект и возвращает массив  пар ключ и значение
//Object.fromEntries приобразовывает обратно в обьект 

// let salaries = {
//     "john": 100,
//     "PETE":300,
//     "mary":250
// };
// function sum_sal(salaries){
//     let sum = 0 
//     for(let salary of Object.values(salaries)){
//         sum =+ salary
//     }
//     return sum
// }
// alert(sum_sal(salaries))

// let user = {
//     name: 'John',
//     age: 30
//   };
  
//   alert( count(user) ); 

//   function count(obj){
//     return Object.keys(obj).length
//   }

// let end = Date.now()
// alert(end - start)

//json.stringify преобразовывает обьекты в json
//json.parse преобразовывает в обьект 

// let carlist = {
//     brand:"Mercedes"
//     mark:"e220"
//     years:"1999"
// }
// let json = JSON.stringify(carlist)
// console.log(typeof)
// console.log(json)

// console.log(JSON.stringify(true))




// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     place: room // meetup ссылается на room
//     free,true
//   };

// room.occupiedy = meetup;

// console.log(JSON.stringify(meetup,function replacer(key,value){
//     console.log('Value ${key}:  ${value}');
//     return (key == 'occupiedBy') ? undefined : value
// }));

