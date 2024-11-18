function verificarSenha() {
    const senha = document.getElementById("senha").value;
    const resultado = document.getElementById("resultado");

    if (senha.length < 6) {
        resultado.style.color = "red";
        resultado.textContent = "Sua senha é fraca! Use ao menos 6 caracteres.";
    } else if (!/[A-Z]/.test(senha) || !/[0-9]/.test(senha)) {
        resultado.style.color = "orange";
        resultado.textContent = "Senha moderada. Considere incluir números e letras maiúsculas.";
    } else {
        resultado.style.color = "green";
        resultado.textContent = "Ótima senha! Ela é forte.";
    }
}

document.getElementById("formContato").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Obrigado pelo contato.");
});
