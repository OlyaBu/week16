const age = Array.from(document.querySelectorAll(".age"));
const fuel = Array.from(document.querySelectorAll(".fuel"));
const buy = Array.from(document.querySelectorAll(".buy"));


age.forEach(el) = {
    el.addEventListener("click", priceUpdate)
};

function priceUpdate(e) {
    currentSet.age = e.target.id;
    console.log(currentSet.age);
}
const PriceInfo = {
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
};

let currentSet = {
        age: 'three',
        fuel: 'oil',
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
        };