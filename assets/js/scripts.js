emailjs.init("PUBLIC_KEY"); // Substitua pelo seu ID de usuário EmailJS

const sendBtn = document.querySelector('.send-btn');
const result = document.querySelector('.result');

sendBtn.addEventListener('click', sendEmail);

function sendEmail() {
    // Obtenha os dados do formulário
    const to = document.getElementById("to").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Envie o e-mail usando EmailJS
    emailjs.send("SERVICE_ID", "TEMPLATE_ID", {
        to_email: to,
        subject: subject,
        message: message
    })
        .then(function () {
            result.innerHTML = "Email enviado com sucesso";
            result.style.opacity = 1;
        }, function (error) {
            result.innerHTML = "Falha no envio do email";
            result.style.opacity = 1;
        });
}