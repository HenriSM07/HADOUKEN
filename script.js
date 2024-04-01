function register() {
    let username = document.getElementById('registerUsername').value;
    let password = document.getElementById('registerPassword').value;
    let repPassword = document.getElementById('repeatPassword').value;

    if (password !== repPassword) {
        alert("As senhas não coincidem!");
        return;
    } else {
        // Armazene o nome de usuário e a senha no localStorage
        localStorage.setItem(username, password);
        window.location.href = '/login.html';
    }
}

function login() {
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;

    // Recupera a senha para o nome de usuário inserido do localStorage
    let storedPassword = localStorage.getItem(username);

    if (password === storedPassword) {
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
/***************Lógica das matrículas********************/
let classes = [
    { disciplina: 'Programação Front-End', professor: 'Prof. Elon', vagas: 10, dia: 'Segunda-feira' },
    { disciplina: 'Programação Back-End', professor: 'Prof. Mark', vagas: 8, dia: 'Terça-feira' },
    { disciplina: 'Testes de Software', professor: 'Prof. Jeff', vagas: 12, dia: 'Quarta-feira' },
    { disciplina: 'Banco de Dados', professor: 'Prof. Jeff', vagas: 6, dia: 'Quinta-feira' },
    { disciplina: 'Arquitetura da Informação', professor: 'Prof. Andrei', vagas: 15, dia: 'Sexta-feira' },
    // Adicionar mais turmas
];

// Função para adicionar um card de disciplina
function addClassCard(classData) {
    let card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${classData.disciplina}</h3>
        <p>Professor: ${classData.professor}</p>
        <p>Vagas: ${classData.vagas}</p>
        <p>Dia: ${classData.dia}</p>
        <button onclick="matricular('${classData.disciplina}', '${classData.dia}')">Matricular-se</button>
    `;
    document.getElementById('classes').appendChild(card);
}

// Adiciona os cards de disciplinas
classes.forEach(addClassCard);

// Função para se matricular em uma disciplina
function matricular(disciplina, dia) {
    let dayColumn = document.getElementById(dia.toLowerCase()); // Convertendo para minúsculas para evitar problemas de capitalização
    if (!dayColumn) {
        console.error(`Coluna para ${dia} não encontrada.`);
        return;
    }
    let tbody = dayColumn.parentElement.nextElementSibling; // Obtém o corpo da tabela
    if (!tbody || tbody.tagName !== 'TBODY') {
        console.error(`Corpo da tabela para ${dia} não encontrado ou incorreto.`);
        return;
    }

    let row = document.createElement('tr');
    row.innerHTML = `<td>${disciplina}</td>`;
    tbody.appendChild(row);
}
