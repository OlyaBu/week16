const button = document.getElementById("btn");
const resultElement = document.getElementById("result");
const fuelElement = document.getElementById("fuel");
const option = [
    document.getElementsByTagName("origincountry"),
    document.getElementsByName("owner"),
    document.getElementsByName("age")
]
const buy = [...document.querySelectorAll("[name=buy]")];

function calc() {
    const values = []
    const fuelPrice = getFuelValue();
    const selectedOptionPrice = calcSelected(option);
    const selectedBuy = calcSelected(buy);
    values.push(selectedOptionPrice);
    values.push(selectedBuy);

    document.querySelectorAll("input").forEach((checkbox) => {
        if (checkbox.checked) {
            values.push(checkbox.value);
        }
    });
    console.log("values", values);
    const result = values.reduce((sum, item) => sum +=  +item, 0);
    console.log("sum", result)
    return result;
}

function calcSelected(fields) {
    return fields.reduce((sum, item) => {
        if (item.checked) {
            sum += item.value
        }
        return sum;
    }, 0);
}

function getFuelValue() {
    return fuelElement.value
}

function setResult(result) {
    console.log("result", result);
    resultElement.innerHTML = result;
}

function onButtonClick() {
    const result = calc();
    setResult(result);
}

button.addEventListener("click", onButtonClick)