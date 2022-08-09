function getPin(){
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
    const number = event.target.innerText;
    const typedInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            typedInput.value = '';
        }
    }
    else{
        const previousNumber = typedInput.value;
        const newNumber = previousNumber + number;
        typedInput.value = newNumber;
    }
})

function verifyPin(){
    const generatedPin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-numbers').value;
    if(generatedPin == typedPin){
        document.getElementById('success').style.display = 'block';
        document.getElementById('fail').style.display = 'none';
    }
    else{
        document.getElementById('fail').style.display = 'block';
        document.getElementById('success').style.display = 'none';
    }
}