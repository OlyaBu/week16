
const buy = document.querySelector('input[name="buy"]:checked');
const owner = document.querySelector('input[name="owner"]:checked');
const age = document.querySelector('input[name="age"]:checked');
const country = document.querySelector('input[name="origincountry"]:checked').value;
/* const fuel = document.querySelector('fuel');
const value = fuel.options[fuel.selectedIndex].value; */
/* поле ввода  */
addVolume.addEventListener('input', function () {
	Volume.value = addVolume.value;
});


let checkboxage = document.querySelectorAll('input[name="age"]:checked');
            let values = [];
            checkboxage.forEach((checkbox) => {
                values.push(checkbox.value);
            });

let checkboxcountry = document.querySelectorAll('input[name="origincountry"]:checked');
            let values = [];
            checkboxcountry.forEach((checkbox) => {
                values.push(checkbox.value);
            });

            let checkboxowner = document.querySelectorAll('input[name="owner"]:checked');
            let values = [];
            checkboxowner.forEach((checkbox) => {
                values.push(checkbox.value);
            }); 
            let radiobuy = document.querySelectorAll('input[name="buy"]:checked');
            let values = [];
            radiobuy.forEach((checkbox) => {
                values.push(checkbox.value);
            }); 




/*общая кнопка суммирующая результат  */
const btn = document.querySelector('#btn'); 
btn.addEventListener('click', getResult) 


function calculate(){
    let getResult = baseBuy(buy.value) + baseOwner(owner.value) + baseAge(age.value);
};

/* получение значений я пробовала добваить.value 
 */
const btn = document.querySelector('#btn'); 
btn.addEventListener('click', getResult) => {
    let getResult;
    for (const groupBuy of groupBuys) {
        if (groupBuy.checked) {
            selectedOption = groupBuy.value;
            break;
        }
    }
    output.innerText = selectedOption ? `You selected ${selectedOption}` : `You haven't selected any option`;
});
/* let getValueAge = null; 
let age = document.getElementsByClassName('.age');
for(let i= 0; i < age.length; i++) {
    if (age[i].checked) {
          getValueAge = age[i].value;
    }
/* /* }; */




/* ocument.querySelector('.buy').addEventListener('click',() => {
let radio=document.q /uerySelectorAll('.buy');
 for(let i= 0; i < radio.length; i++) {
     if (radio[i].checked) {
         data = radio[i].value;
         break;
     }
     }
document.querySelector('.buy').innerHTML = data;
    }); 
 */
/* //const PriceInfo = {
    age: {
        three: 3000000,
        tofive: 2500000,
        toseven: 2000000,
        morethenseven: 1000000,
    },
    fuel: {
        oil: 500000,
        disel: 100000,
        eco: 1000000,
        gas: 50000,
    },
   */

/* 
let currentSet = {
    age: [] ,
    fuel: [],
    volume: [],
    owner: [],
    origincountry: [],
    buy: [],
    getFinalPrice() {
        return PriceInfo.age[!this.age];
    },
    getOptionPrice() {
        let optionPrice = 0;
        if (this.option.length == 0) {
            Array.forEach(element => )
        }
    }
 */
