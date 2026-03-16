function login() {
    const user = document.getElementById('usuario').value;
    const pass = document.getElementById('senha').value;
    const message = document.getElementById('mensagem');

    const usuarios = [
        { usuario: "admin", senha: "1234" },
        { usuario: "joao", senha: "5678" },
        { usuario: "alex", senha:"senha123"},
        { usuario: "cintia", senha: "abcd" },
        { usuario: "eduardo", senha: "0000" }
    ];

    let loginValido = false;

    for (let i = 0; i < usuarios.length; i++) {

        if (user === usuarios[i].usuario && pass === usuarios[i].senha) {
            loginValido = true;
            break;
        }

    }

    if (loginValido) {
        window.location.href = "segunda.html";
    } else {
        message.textContent = "Usuário ou senha incorretos!";
    }
}