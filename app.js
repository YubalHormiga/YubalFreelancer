document.addEventListener('DOMContentLoaded', function () {

    const email = {
        name: '',
        tel: '',
        email: '',
        message: ''
    }
    //*Seleccionamos los elementos del interfax

    const inputName = document.querySelector('#name')
    const inputTel = document.querySelector('#tel')
    const inputEmail = document.querySelector('#email')
    const inputMessage = document.querySelector('#message')
    const formulario = document.querySelector('#form')
    const btnSubmit = document.querySelector(' #form button[type="submit"]')
    const btnReset = document.querySelector(' #form button[type="reset"]')

    //*AddEventListener
    addEnvetListener()
    function addEnvetListener() {
        inputName.addEventListener('input', validar)
        inputTel.addEventListener('input', validar)
        inputEmail.addEventListener('input', validar)
        inputMessage.addEventListener('input', validar)
        btnReset.addEventListener('click', function (e) {
            e.preventDefault()
            email.email = ''
            email.name = ''
            email.tel = ''
            email.message = ''
            formulario.reset()
            comprobarEmail()

        })

    }

    //*Funciones
    function validar(e) {
        if (e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement)
            email[e.target.id] = ''
            comprobarEmail()
            return
        }
        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es válido', e.target.parentElement)
            email[e.target.id] = ''
            comprobarEmail()
            return
        }

        validarEmail(e.target.value)

        limpiarAlerta(e.target.parentElement)

        //*Asignar los valores 
        email[e.target.id] = e.target.value.trim().toLowerCase()

        //*Comprobar el objeto email
        comprobarEmail()
    }


    function mostrarAlerta(mensaje, referencia) {

        limpiarAlerta(referencia)
        //*Generamos alerta HTML
        const error = document.createElement('P')
        error.textContent = mensaje
        error.classList.add('error')
        referencia.appendChild(error)
    }

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.error')
        if (alerta) {
            alerta.remove()
        }
    }
    function validarEmail(email) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const resultado = regex.test(email)
        return resultado
    }

    function comprobarEmail() {
        if (Object.values(email).includes('')) {
            btnSubmit.classList.add('enviar')
        } else {
            btnSubmit.classList.remove('enviar')
        }
    }

})