let spinner = document.getElementById('spinner')
let spinner2 = document.getElementById('spinner2')
let wheel1 = document.getElementById('wheel1')
let wheel2 = document.getElementById('wheel2')
let wheel3 = document.getElementById('wheel3')
let num = 0
let num2 = 0
spinner.style = "fill: #000;"

rotateSpinner = () => {
    setInterval(function(){
        num += 30
        if(num === 360){num = 0}
        spinner.style.transform = `rotate(${num}deg)`
        spinner2.style.transform = `rotate(${num}deg)`
    },100)
    
}

rotateWheel = () => {
    setInterval(function(){
        num2 += 2
        if(num2 === 360){num2 = 0}
        wheel1.style.transform = `rotate(${num2}deg)`
        wheel2.style.transform = `rotate(${num2}deg)`
        wheel3.style.transform = `rotate(${num2}deg)`
    },5)
    
}

rotateSpinner()
rotateWheel()