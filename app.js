
const second = document.querySelector(".sec")
const minute = document.querySelector(".mins")
const hour = document.querySelector(".hour")
const but = document.querySelector("but")
let me  ;
let you ;
let we ; 
function start () {
let sec = 0
let mins = 0
let hours = 0 
const sixTy = 60
const twoFour = 24

me = setInterval(function () {
sec += 1
second.innerHTML = sec
if (sec === sixTy) {
      sec = 0 } 
} , 1000 )

you = setInterval(function () {
mins += 1
minute.innerHTML = mins
if (mins === sixTy) {
    mins = 0  } 
} , 60000)

we = setInterval(function () {
hours += 1
hour.innerHTML = hours
if (hours === twoFour) {
    hours = 0 } 
} , 6000000)
}




function reset () {
    location.reload()
}


function pause () {
    clearInterval(me,you,we)
}



console.log(pause);