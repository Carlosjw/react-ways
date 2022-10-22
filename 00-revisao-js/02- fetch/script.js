let target = document.querySelector('#target');

const url = 'https://api.github.com/users/Carlosjw'

function getProducts(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        target.textContent = `${data.name} e ${data.company}`
    })
    .catch(error => {
        target.textContent = error.message;
    })
}

// getProducts()

// com async await
async function fetchGitData(url){
    const response = await fetch(url);
    const data = await response.json();
    target.textContent = data.name;
    return data;
}

fetchGitData(url);