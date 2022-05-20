/* Each property of this object corresponds 
to the name of an input field in the HTML. */
const patterns = {
    telephone: /^\d{11}$/,
    username: /^$/,
    email: /^$/,
    password: /^$/,
    slug: /^$/,
}

const inputs = document.querySelectorAll('input');

/* Validates the node <inputField> against 
the regular expression <regex>. */
function validate(inputField, regex) {
    if (regex.test(inputField.value)) {
        inputField.className = 'valid'; 
    } else {
        inputField.className = 'invalid';
    }
}

inputs.forEach(input => {
    input.addEventListener('keyup', e => {
        const inputName = e.target.attributes.name.value;
        const regex = patterns[inputName];
        validate(e.target, regex); 
    })
})