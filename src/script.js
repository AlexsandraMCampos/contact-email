(function () {
    emailjs.init({
        publicKey: ""
    });
}(),
document.getElementById("contact-form").addEventListener("submit", function (click) {
    Event.preventDefault();


    emailjs.sendForm('servicey960qy4', 'template_bfi8e61', this)
        .then(function () {
            console.log("sucesso!");
            alert("Email enviado com sucesso!");

        }),
        function (error) {
            console.log("Fail", error);
            alert("Falha ao enviar o e-mail, tente novamente mais tarde!");
        }
}))

