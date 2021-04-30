const refs = {
    input: document.querySelector('#name-input'),
    name: document.querySelector('#name-output'),
};
const nameDefault = 'незнакомец';
const onInputEntering = event => {
    refs.name.textContent = event.currentTarget.value.length > 0
        ? event.currentTarget.value
        : nameDefault
};

refs.input.addEventListener('input', onInputEntering);