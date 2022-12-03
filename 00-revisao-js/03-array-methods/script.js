let target = document.querySelector('#target')

const precos = [
    'Crédito',
    'R$ 200',
    'R$ 400',
    'Contas Pagar',
    'R$ 300',
    'R$ 400',
    'Meus dados'
]

const filterPrices = precos
    .filter(preco => preco
    .includes('R$'))

target.textContent = filterPrices;

/* Removendo o R$ dos itens do array filterPrices */
const precosNumeros = filterPrices.map(p => Number(p.replace('R$', "")))

precosNumeros.forEach(precoNumero => {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = precoNumero + " is a " + typeof precoNumero;
    document.body.appendChild(newDiv)
})


