const form = document.getElementById('form');
const Nombre = document.getElementById('Nombre');
const Apellidos = document.getElementById('Apellidos');
const email = document.getElementById('email');
const Contraseña= document.getElementById('Contraseña');
const Contraseña2 = document.getElementById('Contraseña2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const NombreValue = Nombre.value.trim();
    const ApellidosValue = Apellidos.value.trim();
    const emailValue = email.value.trim();
    const ContraseñaValue = Contraseña.value.trim();
    const Contraseña22Value =Contraseña2.value.trim();

    if(NombreValue === '') {
        setError(Nombre, 'Se requiere un Nombre');
    } else {
        setSuccess(Nombre);
    }

    if(ApellidosValue === '') {
        setError(Apellidos, 'Se requiere un Apellido');
    } else {
        setSuccess(Apellidos);
    }

    if(emailValue === '') {
        setError(email, 'Se necesita un email');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Se necesita un email valido');
    } else {
        setSuccess(email);
    }

    if(ContraseñaValue === '') {
        setError(Contraseña, 'Se requiere una contraseña');
    } else if (ContraseñaValue.length < 8 ) {
        setError(Contraseña, 'La contraseña necesita menos de 8 caracteres')
    } else {
        setSuccess(password);
    }

    if(Contraseña2Value === '') {
        setError(Contraseña2, 'Porfavor de confirmar su contraseña');
    } else if (Contraseña22Value !== Contraseña2Value) {
        setError(Contraseña2, "La contraseña no concide");
    } else {
        setSuccess(Contraseña2);
    }

};
