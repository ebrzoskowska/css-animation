// let item = document.getElementsByClassName(".logo-container");
// item.addEventListener("mouseover", func, false);

// function func()
// {  
//    item.setAttribute("style", "background-color:blue;")
// }


// function bigImg(x) {
//     x.style.height = "64px";
//   }
  
//   function normalImg(x) {
//     x.style.height = "32px";
//     x.style.width = "32px";
//   }

// document.getElementsByClassName(".logo-container").addEventListener("click", function() {
//     d = document.getElementsByClassName(".logo-container");
//     d.setAttribute("style", "background-color:blue;")  
// });
  
// document.getElementsByClassName(".logo-container").addEventListener("click", function() {
//     console.log("There's been a browser event");
//   });

// let x = document.getElementsByClassName(".logo-container");
// x.addEventListener("click", function() {
//     console.log("There's been a browser event");
// });

// var item = document.getElementById("button");
// item.addEventListener("mouseover", func, false);
// item.addEventListener("mouseout", func1, false);

// function func()
// {  // not needed since item is already global, 
//    // I am assuming this is here just because it's sample code?
//    // var item = document.getElementById("button"); 
//    item.setAttribute("style", "background-color:blue;")
// }

// function func1()
// {  
//    item.setAttribute("style", "background-color:green;")
// }

let item = document.getElementById("logo");
item.addEventListener("click", function () {
    document.body.setAttribute("style", "background-color: white;")
})    