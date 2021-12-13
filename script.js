const btnNumber = document.getElementsByClassName("btn");
const calculationEquation = document.getElementById('calculation');
const operation = document.getElementsByClassName("operationBtn");
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const result = document.getElementById('result');
const h3 = document.querySelector("h3");
let change = document.getElementById('change');

const getNumber = (i) => {
    if(change.textContent === " >> "){
        input1.value = input1.value + btnNumber[i].firstChild.data;
    } else if (change.textContent === " << "){
        input2.value = input2.value + btnNumber[i].firstChild.data;    
    }
}

const changeInput = () => {
    if (change.textContent === " >> ") {
        change.textContent = " << ";
        input2.classList.add("changeInput");
        input1.classList.remove("changeInput");
    } else {
        change.textContent = " >> ";
        input1.classList.add("changeInput");
        input2.classList.remove("changeInput");
    }  
}

const ac = () => {
    h3.textContent = "";
    result.textContent = "Result:";
    let input = ""
    h3.textContent = `${input}`
}

const sum = () => {
    if(input1.value === "" || input2.value === ""){
        h3.textContent = "Enter two values";
        result.textContent = "Result:";
    } else {
        h3.textContent = "";
        result.textContent = "";
        h3.textContent = `${input1.value} + ${input2.value}`
        calculationEquation.appendChild(h3);
        let num1 = parseFloat(input1.value);
        let num2 = parseFloat(input2.value);
        let sum = num1+num2
        result.textContent = `Result: ${sum}`
        input1.value =""
        input2.value =""
        change.textContent = " >> "
        input1.classList.add("changeInput");
        input2.classList.remove("changeInput");
    }
}

const subtract = () => {
    if(input1.value === "" || input2.value === ""){
        h3.textContent = "Enter two values";
        result.textContent = "Result:";
    } else {
        h3.textContent = "";
        result.textContent = "";
        h3.textContent = `${input1.value} - ${input2.value}`
        calculationEquation.appendChild(h3);
        let num1 = parseFloat(input1.value);
        let num2 = parseFloat(input2.value);
        let sum = num1-num2
        result.textContent = `Result: ${sum}`
        input1.value =""
        input2.value =""
        change.textContent = " >> "
        input1.classList.add("changeInput");
        input2.classList.remove("changeInput");
    }
}

const multiply = () => {
    if(input1.value === "" || input2.value === ""){
        h3.textContent = "Enter two values";
        result.textContent = "Result:";
    } else {
        h3.textContent = "";
        result.textContent = "";
        h3.textContent = `${input1.value} x ${input2.value}`
        calculationEquation.appendChild(h3);
        let num1 = parseFloat(input1.value);
        let num2 = parseFloat(input2.value);
        let sum = num1*num2
        result.textContent = `Result: ${sum}`
        input1.value =""
        input2.value =""
        change.textContent = " >> "
        input1.classList.add("changeInput");
        input2.classList.remove("changeInput");
    }
}

const divide = () => {
    if(input1.value === "" || input2.value === ""){
        h3.textContent = "Enter two values";
        result.textContent = "Result:";
    } else {
        h3.textContent = "";
        result.textContent = "";
        h3.textContent = `${input1.value} / ${input2.value}`
        calculationEquation.appendChild(h3);
        let num1 = parseFloat(input1.value);
        let num2 = parseFloat(input2.value);
        let sum = num1/num2
        result.textContent = `Result: ${sum}`
        input1.value =""
        input2.value =""
        change.textContent = " >> "
        input1.classList.add("changeInput");
        input2.classList.remove("changeInput");
    }
}
