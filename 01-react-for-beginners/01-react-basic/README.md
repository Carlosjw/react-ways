# `React Element`

Todo elemento React é criado com a função `createElement`. O Babel é o responsável por transformar o elemento criado com JSX (que se parece com HTML) em funções de React

```js

function App(){
    return <div id="container">Meu App</div>
};

/* É transformado em: */
function App() {
    return React.createElement('div', {id: 'container'}, 'Meu App');
}
```

##https://babeljs.io/repl##

# Componentes

Permitem você dividir a sua interface em pequenos elementos. São criados através de funções que retornam elmentos React ou classes que estendem `React.Component` e possuem o método `render` retornando um elemento React.

```js
const Button = () => {
    return <button>Comprar</button>;
};

// Class Component
class Button extends React.Component {
    render(){
        return <button>Comprar</button>;
    }
}

```

# Composição
O principal motivo de criarmos componentes é para podermos compor a interface com diversos componentes que podem ser reutilizados.

```js
const Button = () => {
    return <button>Comprar</button>
};

const MainNav = () => {
    return (
        <nav>
            <a href="#">Link 1</a>
            <Button />
        </nav>
    );
};
```