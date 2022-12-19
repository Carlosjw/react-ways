# Eventos
Podemos atribuir eventos diretamente aos elementos JSX como um atributo. Os eventos são sintáticos, ou seja, são criados pelo próprio React porém seguindo as especificações da W3C (e funcionam igualmente nos diversos browsers que o React suporta).

```js
    const App = () => {
        function handleClick(event){
            alert('Comprou: ' + event.target.innertext);
        }

        return (
            <div>
                <button onClick={handleClick}>Camisa</button>
                <button onClick={handleClick}>Bermuda</button>
            </div>
        );
    };
```

* Referência: https://reactjs.org/docs/events.html

# Função anônima direto no evento
É possível executar uma função anônima no evento.
```js
    	const App = () => {
            return (
                <button onClick={({target}) => target.classList.toggle('ativa')}>
                    Ativar
                </button>
            )
        }
```
| Guardar o estado do DOM não é o mais indicado. Veremos mais tarde com fazer isso com Hooks.