const form = document.getElementById('form-agenda');
const imgInserido = '<img src="./seta.png" alt="Emoji inserido" />';

const nome = [];
const telefone = [];
const spanInserido = '<span class="inserido">Inserido</span>';

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionarLinha();
    atualizarTabela();
});

function adicionarLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('número-contato');

    if (nome.includes(inputNomeContato.value)) {
        alert(`O contato "${inputNomeContato.value}" já foi inserido.`);
        return;
    }

    nome.push(inputNomeContato.value);
    telefone.push(inputNumeroContato.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value} ${imgInserido}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
