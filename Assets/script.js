var currentNumberWrapperUp = document.getElementById('increment');
var currentNumberWrapperDown = document.getElementById('decrement');
var currentNumber = 0;

currentNumberWrapperUp.addEventListener("click", increment);
currentNumberWrapperDown.addEventListener("click", decrement);

function increment(){

    currentNumber += 1;
    document.getElementById("currentNumber").innerHTML = currentNumber;

    if(currentNumber > 0){

        document.getElementById('currentNumber').style.color = "black";
    }
}

function decrement(){

    currentNumber -= 1;
    document.getElementById("currentNumber").innerHTML = currentNumber;

    
    if(currentNumber < 0){

        document.getElementById('currentNumber').style.color = "salmon";
    }
}


