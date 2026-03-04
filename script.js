function login() {
    const user = document.getElementById('usuario').value;
    const pass = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');

    const userCorreto = "admin";
    const senhaCorreta = "1234";

    if (user === userCorreto && pass === senhaCorreta) {
        window.location.href = "segunda.html"
    } else {
        mensagem.textContent = "Usuário ou senha incorretos!"
    }

}