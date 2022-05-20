const inputs = document.querySelectorAll('input');

// regex patterns
const patterns = {
        telephone: /^\d{11}$/,
        username: /^[a-zA-Z0-9]{5,12}$/,
        password: /^[\w@-]{8,20}$/,
        slug: /^[a-z\d-]{8,20}$/,
};

// validation function
function validate(field, regex){

    if(regex.test(field.value)){
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }

}

// attach keyup events to inputs
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
            const inputName = e.target.attributes.name.value;
            const regex = patterns[inputName];
            validate(e.target, regex);
    });
});
