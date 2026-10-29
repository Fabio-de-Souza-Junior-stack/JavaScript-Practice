/*Sua aplicação deverá receber três informações:
- Nome completo.
- Idade.
- E-mail.
*/

let input_nome = document.getElementById('caixa_nome');
// Busca o elemento HTML pelo id e guarda sua referência na variável input_nome.

let ok = document.getElementById('botao');
// Busca o elemento HTML pelo id e guarda sua referência na variável ok.

let d02 = document.getElementById('resultado02');
// Busca o elemento HTML onde o resultado será exibido.

let input_idade = document.getElementById('caixa_idade');
//Busca o elemento HTML pelo id e guarda sua referência na variável input_idade


function mostrarNome() {
    let resultado = input_nome.value.trim();
    if (resultado == "") {
        d02.textContent = `Nome invalido!`;

    } else {
        d02.textContent = `Seja bem vindo: `;

        let nome = document.createElement('span');
        nome.classList.add('nome-destaque');
        nome.textContent = resultado;
        d02.append(nome);
        d02.append(`.`);
    }

    if (resultado == "") {
        let mensagem_02 = document.createElement('p');
        mensagem_02.textContent = `Error`;
        d02.append(mensagem_02);
    } else {  
        let leitura_idade = input_idade.value.trim();
        if (leitura_idade == "") {
        let mensagem_idade_invalida = document.createElement('p');
        mensagem_idade_invalida.textContent = `Idade invalida!`;
        d02.append(mensagem_idade_invalida);

        } else if (leitura_idade >= 0 && leitura_idade <= 17){
        let mensagem_menor_idade = document.createElement('p');
        mensagem_menor_idade.textContent = `Você tem ${leitura_idade} anos, portanto menor de idade.`;
        d02.append(mensagem_menor_idade);

        } else if (leitura_idade >= 18 && leitura_idade <= 120){
        let mensagem_maior_idade = document.createElement('p');
        mensagem_maior_idade.textContent = `Parabéns você tem ${leitura_idade} anos, portanto maior de idade.`;
        d02.append(mensagem_maior_idade);

        } else{
        let mensagem_idade_inexistente = document.createElement('p');
        mensagem_idade_inexistente.textContent = `A idade ${leitura_idade} não é valida.`;
        d02.append(mensagem_idade_inexistente);
        }
    }
}

ok.addEventListener('click', mostrarNome);