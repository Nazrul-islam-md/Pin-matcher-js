/* function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
    
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const calcInput = document.getElementById('typed-numbers');
    const number = (event.target.innerText);
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})

function verifyPin(){
    const generatedPin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('success');
    const failError = document.getElementById('fail');
    if(generatedPin == typedPin){
        failError.style.display = 'none';
        successMessage.style.display = 'block';
    }
    else{
        successMessage.style.display = 'none';
        failError.style.display = 'block';
    }
} */