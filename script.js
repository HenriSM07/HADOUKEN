function register() {
    let username = document.getElementById('registerUsername').value;
    let password = document.getElementById('registerPassword').value;
    let repPassword = document.getElementById('repeatPassword').value;
    let checkbox = document.getElementById('checkboxAdm').checked;

    if (password !== repPassword) {
        alert("As senhas não coincidem!");
        return;
    } else {
        // Armazene o nome de usuário, a senha e a informação de admin no localStorage
        localStorage.setItem(username, JSON.stringify({ password: password, isAdmin: checkbox }));
        window.location.href = '/login.html';
    }
}

function login() {
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;

    // Recupera os dados do usuário do localStorage
    let userData = JSON.parse(localStorage.getItem(username));

    if (userData && password === userData.password) {
            window.location.href = '/matricula.html';
    } else {
        alert('Usuário ou senha inválidos!');
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if (document.activeElement.id === 'registerUsername' || document.activeElement.id === 'registerPassword') {
            register();
        } else if (document.activeElement.id === 'loginUsername' || document.activeElement.id === 'loginPassword') {
            login();
        }
    }
});