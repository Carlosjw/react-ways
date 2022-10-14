// const target = document.getElementById('target');

const upperName = (name) => name.toUpperCase();
target.innerText = upperName('Carlos');

// destructuring
function handleMouse(event){
    const{clientX, clientY} = event;
    target.innerText = `Eixo X => ${clientX} e Eixo Y => ${clientY}`;
    console.log(event)
}

// document.addEventListener('click', handleMouse)

const targets = document.querySelectorAll('.target');
console.log(targets)
// Rest
function showList(empresa, clientes){

    targets.forEach(target => {
        target.innerText = clientes[target]
    })
    

}

showList('Google', ['Carlos', 'Solange', 'Saymon'])