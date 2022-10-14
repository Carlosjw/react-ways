const target = document.getElementById('target');

const upperName = (name) => name.toUpperCase();
target.innerText = upperName('Carlos');

// destructuring
function handleMouse(event){
    const{clientX, clientY} = event;
    target.innerText = `Eixo X => ${clientX} e Eixo Y => ${clientY}`;
    console.log(event)
}

document.addEventListener('click', handleMouse)