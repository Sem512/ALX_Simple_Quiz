function add(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    result=number1+number2;
    document.getElementById('calculation-result').textContent = result;

}

function subtract(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    result = number1 - number2;
    document.getElementById('calculation-result').textContent = result;
}

function divide(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    result = number1 / number2;
    document.getElementById('calculation-result').textContent = result;
}

function multiply(){
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    result = number1 * number2;
    document.getElementById('calculation-result').textContent = result;
}

document.getElementById("add").addEventListener('click',add);
document.getElementById("subtract").addEventListener('click',subtract);
document.getElementById("divide").addEventListener('click',divide);
document.getElementById("multiply").addEventListener('click',multiply);