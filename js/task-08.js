const refs = {
    input: document.querySelector('input'),
    renderBtn: document.querySelector('[data-action="render"]'),
    destroyBtn: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
};

const createBoxes = (amount) => {
    const arrayElements = [];
    const initialWidth = 30;
    const initialHeight = 30;
    const step = 10;
    
    for (let i = 0; i < amount; i++) {
        const el = document.createElement('div');

        el.style.width = `${initialWidth + step * i}px`;
        el.style.height = `${initialHeight + step * i}px`;
        el.style.backgroundColor = '#' + (Math.random().toString(16) + "000000").substring(2, 8);
        console.log(('#' + (Math.random().toString(16) + "000000").substring(2,8)))
        arrayElements.push(el);
    }
    refs.boxes.append(...arrayElements);
}

const renderElements = () => {
    const num = +refs.input.value;
    createBoxes(num);
}

const destroyBoxes = () => refs.boxes.innerHTML = '';

refs.renderBtn.addEventListener('click', renderElements);
refs.destroyBtn.addEventListener('click', destroyBoxes);