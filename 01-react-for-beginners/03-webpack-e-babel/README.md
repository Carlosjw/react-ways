# Webpack Mínimo

* Iniciar um pacote `npm` na pasta do seu aplicativo
```bash
    npm init -y
```

* Instalar o `webpack`, `webpack-cli` e `webpack-dev-server --save-dev`

```bash
npm install webpack webpack-cli webpack-deve-server --save-dev
```
=> --save-dev: dependência  de desenvolvimento

Criar arquivos mínimos

- index.html
  - src/
    - index.js
  
index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React</title>
</head>
<body>
    <div id="root"></div>
    <script src="main.js"></script>
</body>
</html>
```

* Adicionar os `scripts` de desenvolvimento e build ao `package.json`:
```json
"scripts":{
    "start": "webpack-dev-server --mode development --open --hot",
    "build": "webpack --mode production"
},
```
* Entendendo o código:
  * `"webpack-dev-server"`: executa o `webpack-dev-server";
  * `--mode development`: em modo de desenvolvimento;
  * `--open`: vai abrir o brownser automaticamente;
  * `--hot`: atualiza o código automaticamente sem precisar fazer o `reload` do brownser.
  Obs: Os scripts nos fazem economizar tempo, pois apenas com o `npm start` executaremos toda a linha de comando que está descrita no script automaticamente.

  Obs-02: para executar o script `build` precisamos executar o comando `npm run build`


# React
* Instalando o React: 
```bash
    npm install react react-dom
```

* `index.js`
  ```js
        import ReactDOM from 'react-dom';
        import App from './App';

        ReactDOM.render(App(), document.getElementById('root'))
  ```

* `app.js`

# Babel Mínimo
*Instalar `@babel/preset-react` e `babel-loader`

```bash
    npm install @babel/core @babel/preset-react babel-loader --save-dev
```
* Entendendo o código:
  * `@babel/core`: núcleo do babbel;
  * `@babel/preset-react`: pre-configuração do Bable específica para o React;
  * `babel-loader`: loader para carregamento do babel (O webpack vem com quase nada instalado para que a plicação tenha apenas o que precisamos para trabalhar a medida que formos instalando o que precisamos)

* Cria o `webpack.config.js` para configurarmos o `babel` no `webpack`:

```js
module.exports = { // module.exports: função do NodeJS (+/- o mesmo que export default)
    // Nos módulos
    module: {
        // Aplique as seguintes regras
        rules: [
            {
                // Nos arquivos que teminam ($) com .js
                test: /\.js$,
                // Não procure por nada em node_modules
                exclude: /node_modules/,
                // Use o seguinte:
                use: {
                    // Babel
                    loader: 'babel-loader',
                    // Com as opções para o React
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
        ],
    },
}
```

# Loaders (CSS)
O webpack é instalado com o mínimo de pacotes possíveis para funcionar com o Javascript. Para adicionarmos outras funcionalidades, como a importação de CSS, imagens, SVG etc, precisamos adicionar loaders específicos para cada situação.
```bash
npm install style-loader css-loader --save-dev
```
webpack.config.js

```js
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
        ],
    },
}
```
  

