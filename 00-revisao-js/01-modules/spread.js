const target = document.querySelector('#target');

const numeros = [10, 5, 20];
const maior = Math.max(...numeros);

const numeros2 = [2, 6, ...numeros, 24, 32, 56]

// com objetos
const carro = {
    cor: 'Azul',
    portas: 4
}

carroAno = {...carro, ano: 2011}

try {
    target.innerText = JSON.stringify(carroAno)
} catch (error) {
    target.style.color = 'red'
    target.innerText = error.message   
}