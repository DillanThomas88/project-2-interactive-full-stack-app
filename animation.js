let spinner = document.getElementById('spinner')
let deg = 0
spinner.style = "fill: #000;"

spinnerRotate = () => {
    setInterval(function(){
        deg += 30
        if(deg === 360){deg = 0}
        spinner.style.transform = `rotate(${deg}deg)`
    },100)
    
}

spinnerRotate()