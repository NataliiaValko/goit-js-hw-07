const refs = {
    input: document.querySelector('#validation-input'),
}

const lengthValue = refs.input.dataset.length;

const onValidationValue = event => {
    refs.input.classList.add('invalid');
    event.currentTarget.value.length === 6
        ? refs.input.classList.replace('invalid', 'valid')
        : refs.input.classList.replace('valid', 'invalid');
};

refs.input.addEventListener('blur', onValidationValue);
