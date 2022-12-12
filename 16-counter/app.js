//this function allow us to access the DOM
function getElement(selection) {
    const element = document.querySelector(selection)
    if(element){
        return element;
    }
    throw new Error(
        `Please check "${selection} selector, no such  element exists"`
    );
}

class Counter {
    constructor(element, value) {
        this.counter = element;
        this.value = value;
        this.resetBtn = element.querySelector(".reset");
        this.increaseBtn = element.querySelector(".increase");
        this.decreaseBtn = element.querySelector(".decrease");
        this.valueDOM =element.querySelector(".value");
        this.valueDOM.textContent = this.value;
        //bind this to all function
        this.increase  = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.reset = this.reset.bind(this);

        this.increaseBtn.addEventListener('click', this.increase);
        this.decreaseBtn.addEventListener('click', this.decrease);
        this.resetBtn.addEventListener('click', this.reset);
    }
    //assign tasks to buttons
    increase() {
        this.value++;
        this.valueDOM.textContent = this.value;
        this.valueDOM.style.color = "green";
    }
    decrease() {
        this.value--;
        this.valueDOM.textContent = this.value;
        this.valueDOM.style.color = "red";
    }
    reset() {
        this.value = 0;
        this.valueDOM.textContent = this.value;
        this.valueDOM.style.color = "#222";
    }
    
}
const firstCounter = new Counter(getElement('.first-counter'), 0);
const secondCounter = new Counter(getElement('.second-counter'), 0);