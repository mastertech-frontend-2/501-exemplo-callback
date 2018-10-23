const sortear = (quantidade, range, funcaozinha) => {
    const vetor = [];

    let intervalo = setInterval(() => {
        let sorteio = Math.floor(Math.random() * (range + 1));
        vetor.push(sorteio);

        if(vetor.length === quantidade){
            clearInterval(intervalo);
            funcaozinha(vetor);
        }
    }, 100);
}

const quantidade = document.querySelector('input:first-child');
const maximo = document.querySelector('input:nth-child(2)');
const botao = document.querySelector('button');
const div = document.querySelector('div');

botao.onclick = () => {
    div.innerHTML = 'To sorteando... guentae';

    let quantidadeValor = Number(quantidade.value);
    let maximoValor = Number(maximo.value);

    sortear(quantidadeValor, maximoValor, (resultado) => {
        div.innerHTML = '';
        for(let numero of resultado){
            div.innerHTML += numero;
            div.innerHTML += '<br>';
        }
    });
}
