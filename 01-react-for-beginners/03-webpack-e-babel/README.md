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

* Instalar o `webpack.js` para configurarmos o `babel` no `webpack`:

  

