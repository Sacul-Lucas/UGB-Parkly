const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    const email = document.getElementById("email");
    const senha = document.getElementById("senha");

    const emailError = email.nextElementSibling;
    const senhaError = senha.nextElementSibling;

    // Validação de email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        mostrarErro(email, emailError, "Informe um e-mail válido.");
        isValid = false;
    } else {
        mostrarSucesso(email, emailError);
    }

    // Validação de senha
    if (senha.value.length < 6) {
        mostrarErro(
            senha,
            senhaError,
            "A senha deve ter pelo menos 6 caracteres."
        );
        isValid = false;
    } else {
        mostrarSucesso(senha, senhaError);
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