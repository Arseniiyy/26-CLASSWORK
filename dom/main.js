// // // //DOM
// // //  //document object Model -обюьектная модуль документов,которая представляет все содердимое страницы в  виде обьектов,Ю с которыми мы можем взаимодействоваать

// // //  document.body.style.background = 'red'


// // //  //bom
// // //  //brauser object model
// // //  //обьектная  модуль браузера - доп.обьекты, котрые предстваляют браузер,позволя работать со всем, кроме документов

// // //  alert(location.href)
// // //  if(confirm("Перейти на сайт")){
// // //      location.href = "https://www.youtube.com/?app=desktop&hl=ru"
// // //  }

// //  //dom - дерево
// //  //вложеные теги являются детьми родительского элемента, тега
// //  //Инрформация(текст_)находится внутри тега, это тоже обьект



// // //с3уществует 12 типов узлов, но на практике  мы в основном работаем с 4 из них
// // //document - входная точка в dom
// // //узлы-элементы - html-теги,основные строительные блоки
// // //текстовые узлы- содержимое текста
// // //комментарии - иногда в них можно включить информацию,которая не будет показана,нор доступна в dom для чтения js

// // //взаимодействие с консолью
// // document.documentElement //тег html

// // //body - document.body

// // // for(let i = 0; i < document.body.childNodes.length, i++) {
// // // alert(document.body.childNodes[i])
// // // }


// // // for(let node of document.body.childNodes){
// // //     alert(node)
// // // }


// // // let element = document.getElementById('element')
// // // element.style.background = "red"
// // // element.style.height = "1000px"
// // // element.style.width = "500px"

// // let element = document.querySelectorAll('ul > li:last - child')
// // for(let el for element){
// //     alert(el.innerHtml)
// // }


// //matches
// for(let elem of document.body.children){
//     if(elem.matches(https://www.youtube.com/)){
//         alert("Ссылка на Яндекс" + elem.href)
//     }
// }
//  let chapter  = document.querySelector(".chapter")
//  alert(chapter.closest("contents"))
 //не дописано, скинут в группу 