const second = document.querySelector(".sec")
const minute = document.querySelector(".mins")
const hour = document.querySelector(".hour")

function start () {
    let sec = 0
    let mins = 0
    let hours = 0 
    const sixTy = 60
    const twoFour = 24
    
 const me = setInterval(function () {
    sec += 1
    second.innerHTML = sec
    if (sec === sixTy) {
          sec = 0 

    } 
} , 1000 )
    
setInterval(function () {
    mins += 1
    minute.innerHTML = mins
    if (mins === sixTy) {
        mins = 0  

  } 
} , 60000)
    
 setInterval(function () {
    hours += 1
    hour.innerHTML = hours
    if (hours === twoFour) {
        hours = 0  

  } 
} , 6000000)
    }

function pause ()  {
    clearInterval(me)
}

function reset () {

    location.reload()
}
