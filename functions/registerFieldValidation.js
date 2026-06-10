const form = document.getElementById("registerForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    const campos = [
        {
            id: "nome",
            mensagem: "Informe seu nome completo.",
            validacao: value => value.trim().length >= 3
        },
        {
            id: "matricula",
            mensagem: "Informe uma matrícula válida.",
            validacao: value => value.trim() !== ""
        },
        {
            id: "email",
            mensagem: "Informe um e-mail válido.",
            validacao: value =>
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        },
        {
            id: "placa",
            mensagem: "Placa inválida. Ex: ABC1D23",
            validacao: value =>
                value === "" ||
                /^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/i.test(value)
        },
        {
            id: "senha",
            mensagem: "A senha deve ter pelo menos 6 caracteres.",
            validacao: value => value.length >= 6
        }
    ];

    campos.forEach(campo => {
        const input = document.getElementById(campo.id);
        const errorSpan = input.nextElementSibling;

        if (!campo.validacao(input.value)) {
            mostrarErro(input, errorSpan, campo.mensagem);
            isValid = false;
        } else {
            mostrarSucesso(input, errorSpan);
        }
    });

    const senha = document.getElementById("senha");
    const confirmarSenha = document.getElementById("confirmarSenha");
    const errorConfirmar = confirmarSenha.nextElementSibling;

    if (senha.value !== confirmarSenha.value) {
        mostrarErro(
            confirmarSenha,
            errorConfirmar,
            "As senhas não coincidem."
        );
        isValid = false;
    } else {
        mostrarSucesso(confirmarSenha, errorConfirmar);
    }

    if (isValid) {
        form.submit();
    }
});

function mostrarErro(input, errorSpan, mensagem) {
    input.classList.remove("success");
    input.classList.add("error");

    errorSpan.textContent = mensagem;
    errorSpan.classList.add("show");
}

function mostrarSucesso(input, errorSpan) {
    input.classList.remove("error");
    input.classList.add("success");

    errorSpan.textContent = "";
    errorSpan.classList.remove("show");
}