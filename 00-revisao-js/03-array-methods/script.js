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