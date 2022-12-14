# JSX Arrays
O JSX irá listar cada um dos itens da array. Ele não irá separar ou colocar vírgula, é você que deve modificar a array para o resultado desejado.
```js
    const App = () => {
        const produtos = ['Notebook', 'Smartphone', 'Tablet'];

        return <p>{produtos}</p>;
    }
```

# Keys
O JSX necessita de uma key única para cada elemento da Array.
##https://reactjs.org/docs/list-and-keys.html##
```js
    const App = () => {
        const empresas = [<li key="e1">Apple</li>, <li key="e2">Google</li>];

        return <ul>{empresas}</ul>
    }
```