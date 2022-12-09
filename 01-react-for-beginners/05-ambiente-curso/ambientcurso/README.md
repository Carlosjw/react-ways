# Ambiente
Apenas para deixarmos a interface mais limpa:
```bash
npx create react-app myapp
```
```bash
 - src
    - App.js
    - index.js
```
* `index.js`
  ```js
    import React from 'react';
    import ReacDOM from 'react-dom';
    import App from './App';

    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
  ```

* `App.js`
  ```js
  import React from 'react';

  const App = () => {
    return <div>App React</div>
  }

  export default App;
  ```

* `public/index.html`
    ```html
      <link rel="stylesheet" href="%PUBLIC_URL%/style.css">

      <!-- Endentendo:
      => %PUBLIC_URL%/ : funcionalidade do CSS para buscar arquivo pelo caminho corretamente
       -->
    ```

* `public/style.css`
  ```css
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    --font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --font-title: Georgia, 'Times New Roman', Times, serif;
    --font-size: 1.2rem;
    --color: #19f;
    --color-light: #adf;
    --color-dark: #018;
    --radius: 0.2rem;
  }

  body {
    margin: 1.5rem;
  }

  body,
  input,
  textarea,
  button {
    font-size: var(--font-size);
    font-family: var(--font);
  }

  h1,
  h2,
  h3 {
    font-family: var(--font-title);
  }

  h1,
  h2,
  h3,
  p,
  ul {
    margin: 1rem 0;
  }

  ul {
    list-style: square;
  }

  li {
    margin-bottom: 0.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.25rem;
  }

  input,
  textarea {
    display: block;
    border: 1px solid #ccc;
    width: 100%;
    padding: 0.8rem;
    border-radius: var(--radius);
    background: #eee;
    transition: 0.2s;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: var(--color);
    background: white;
    box-shadow: 0 0 0 3px var(--color-light);
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: var(--radius);
    transition: 0.1s;
    background: var(--color);
    color: var(--color-dark);
    padding: 0.8rem 1.6rem;
  }

  button:hover,
  button:focus {
    background: var(--color);
    box-shadow: 0 0 0 3px var(--color-light), 0 0 0 4px var(--color);
    outline: none;
  }

  button:active {
    box-shadow: 0 0 0 3px var(--color), 0 0 0 4px var(--color);
  }

  button:disabled {
    opacity: 0.5;
    cursor: wait;
  }

  hr {
    border: 2px solid black;
    margin: 2rem auto;
  }

  ```

* `.vscode/settings.json`
```json
{
    "files.exclude": {
        "node_modules": true,
        ".vscode": true,
        ".gitignore": true,
        "package.json": true,
        "package-lock.json": true,
        "public": true
    }
}
```
  * Entendendo:
    * `"files.exlude"`:
      * É um objeto de configurações que contém os arquivos e pastas que não serão exibidos no nosso ambiente de trabalho, mas que ainda estão lá.

# JSX: Javascript Extendido
  * Javascript XML/Extension. Estende a sintaxe do Javascript, indtroduzindo elementos como XML que são convertidos em funções React.

```js
const Titulo = () => {
  return <h1>Comprar</h1>;
};
```
```js
const Button = (0 => {
  return <button>Comprar</button>;
});
```
* É tranformado em:
```js
const Button = () => {
  return React.cretaeElement('button', null, 'Comprar');
};
```
| É possível utilizar a extensão .jsx

* Atributos
Atributos podem ser passados como no HTML, porém com alguns casos especiais.
```js
const App = () => {
  return (
    <a href="https://www.jw.org>" title="Site Oficial das Testemunhas de Jeová">JW.ORG</a>
  );
};
```

* Casos especiais
  O caso especial mais comum é o atributos `class`. Pelo fato de `class` ser uma palavra reservada do Javascript, o JSX resolveu mudar o nome para evitar conflitos. O correto é `className`.
  ```js
    const App = () => {
      return <div className="grid">Origamid</div>;
    };
  ```
  ```js
    const app = () => {
      return (
        <form>
          <label htmlForm="nome">Nome</label>
          <input type="text" id="nome" />
        </form>
      );
    };
  ```

  # `camelCase`
    Atributos com nomes copostos devem ser utilizados como `camelCase`. Exemplo: `autoplay` vira `autoPlay`.
    ```js
      const App = () => {
        return <video autoPlay />
      }
    ```

# Expressões / Variáveis
Expressões e variáveis podem ser colocadas dentro do JSX, utilizando chaves `{}`.
```js
  const App = () => {
    const name = 'Carlos';
    return <p>{name}</p>;
  }
```
```js
  const App = () => {
    const desconto = 50;
    const preco = 250;
    return <p>{preco - desconto}</p>;
  };
  ```

# JSX Expressions
Você pode executar qualquer expressão dentro das chaves `{}`. Se o resultado da expressào for um número, string ou array de números/strings, o resultado irá aparecer na tela. Booleanos `{true/false}`, `undefined` e `null` não irão resultar em nada na tela. Objetos irão retornar um erro.
```js
  const App = () => {
    function myName(){
      return 'Carlos';
    }

    function quadrado(x){
      return x * x;
    }

    const carro = {
      rodas: 4,
      marca: 'Ford'
    }
  }
```

# Style
O `style` irá receber um objeto com as propriedades do elemento em `camelCase`.
```js
  const App = () => {
    const estiloH1 = {
      color: 'blue',
      fontSize: '20px',
      fontFamily: 'Helvética',
    };

    return (
      <div>
        <h1 style={estiloH1}>Empresa</h1>
        <p style={{color: 'green'}}>Sempre aberta</p>
      </div>
    )
  }
```