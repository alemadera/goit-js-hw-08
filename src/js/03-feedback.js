import throttle from 'lodash/throttle';

// Función para guardar el estado del formulario en el almacenamiento local
const saveFormState = throttle(() => {
    const formData = {
        email: document.querySelector('input[name="email"]').value,
        message: document.querySelector('textarea[name="message"]').value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500); // Throttle a 500 milisegundos

// Función para cargar el estado del formulario desde el almacenamiento local
const loadFormState = () => {
    const formDataString = localStorage.getItem('feedback-form-state');
    if (formDataString) {
        const formData = JSON.parse(formDataString);
        document.querySelector('input[name="email"]').value = formData.email;
        document.querySelector('textarea[name="message"]').value = formData.message;
    }
};

// Función para limpiar el almacenamiento local y los campos del formulario al enviar el formulario
const submitForm = (event) => {
    event.preventDefault();
    const formData = {
        email: document.querySelector('input[name="email"]').value,
        message: document.querySelector('textarea[name="message"]').value
    };
    console.log('Formulario enviado:', formData);
    localStorage.removeItem('feedback-form-state');
    document.querySelector('input[name="email"]').value = '';
    document.querySelector('textarea[name="message"]').value = '';
};

// Evento para monitorear cambios en los campos del formulario y guardar el estado del formulario en el almacenamiento local
document.querySelector('.feedback-form').addEventListener('input', saveFormState);

// Evento al cargar la página para cargar el estado del formulario desde el almacenamiento local
window.addEventListener('DOMContentLoaded', loadFormState);

// Evento para enviar el formulario
document.querySelector('.feedback-form').addEventListener('submit', submitForm);
