// //Map и set
// //Map - коллукция ключей/значение,как и обджект
// //отличие позволяет пользоваться ключами любого типа


// let map = new Map();
// map.set('1','Тут хранится один')
// map.set('2','Тут хранится два')
// map.set('3','Тут хранится три')
// console.log(map.get('1'))
// //get - возвращает значение из масссива по ключу.Усли ключа нет - undufined
// console.log(map.has('1'))
// //has - возвращает true если key  есть в коллекции,false - если нет
// console.log(map)
// map.delete("2")
// console.log(map)

// //map clear
// console.log(map)

// console.log(map.size)

// let user = {id:"1"}

// let visitCount = new Map();
// visitCount.set(user,7)
// alert(visitCount.get(user))

// let user = {id:"1"}
// let userAdmin = {id:"Admin"}

// let python47 = new Map([
//     ['Регина,'12],
//     ['Мариа,'12],
//     ['Элеонора'12]
// ])
// for (let value of python47.values()){
//     console.log(value)
// }

// for (let value of python47.keys()){
    //     console.log(value)
// }

// for (let value of python47.entires()){
    //     console.log(value)
// }



// let object = {
//     name:"Regina",
//     age:14
// }


// let map = new Map(object.entries(object))

// console.log(map.get("name"))


// let map = new Map();
// map.set('Розы',1)
// map.set('Розы1',2)
// map.set('Розы2',3)
// map.set('Розы3',4)
// map.set('Розы4',5)
// map.set('Розы5',6)

//let object = Object.fromEntries(map.entries())
//console.log(object)

//object set - особый вид коллекции:множество значения без ключей,где ключей,где каждое значение может появляться только раз

// let set = new Set();

// let apple = {name:"Яблоко"}
// let banana = {name:"Банана"}
// let orange = {name:"Апельсин"}

// set.add('Яблоко')
// set.add('Банан')
// set.add('Апельсин')

// alert(set.size)
// for(let)

// let  visitCountMap = new Map();
// function counterUsers(user){
//     let count  = visitCountMap.get(user)
//     visitCountMap.set(user, count + 1)
// }
// let egor  = {name:"Egorka"}
// counterUsers(egor)

// egor = null

//кеширование
// let cache = new Map();

// function process(obj) {
//     if(!cache.has(obj)){
//         let result  = obj;
//         cache.set(obj,result)
//     }
//     return cache.get(obj)
// }

//weak set
//Оособенностью weakset является то что мы можем туда добавить только обьекты
//Обьекты присустствуют в множестве  только пока они где то доступны


// let messages = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
// ];

// let readMessages = new WeakSet();

// // Два сообщения были прочитаны
// readMessages.add(messages[0]);
// readMessages.add(messages[1]);
// // readMessages содержит 2 элемента

// // ...давайте снова прочитаем первое сообщение!
// readMessages.add(messages[0]);
// // readMessages до сих пор содержит 2 элемента

// // Вопрос: было ли сообщение message[0] прочитано?
// alert("Read message 0: " + readMessages.has(messages[0])); // true

// messages.shift();
// // теперь readMessages содержит 1 элемент (хотя технически память может быть очищена позже)


let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
alert(keys)
