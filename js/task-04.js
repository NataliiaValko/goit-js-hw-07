const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
};
let counterValue = 0;
const updateValueUI = () => refs.value.textContent = counterValue;
const increment = () => counterValue += 1;
const decrement = () => counterValue -= 1;

refs.incrementBtn.addEventListener('click', () => {
    increment();
    updateValueUI();
});

refs.decrementBtn.addEventListener('click', () => {
    decrement();
    updateValueUI();
});