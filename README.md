# Transpilador HTML
O conceito inicial imaginado é criar um transpilador para `HTML` inspirado principalmente no `JSON` e posteriormente dar algum poder a mais, seguindo talvez o conceito de `widget` do `Flutter`.


## Como rodar o projeto
Ainda estamos tentando desenvolver o nosso Mínimo Produto Viável (MVP), uma espécie de prova de conceito. Para você conseguir rodar e ver o que temos feito até o momento você precisará ter o `node` instalado em sua máquina. Além de clonar o nosso repositório.

Com esses passos realizados basta você acessar a pasta do projeto e executar:

```shell
node index.js
```
Deverá aparecer em seu console uma mensagem parecida com essa:
```html
<head><meta charset='UTF-8'></meta><meta></meta><title></title></head><body><main id='content' class='container'></main></body>
```
Que é uma espécie de `HTML` minificado que foi gerado. Ainda estamos com algumas dificuldades para gerar da forma correta. Caso queira ajudar fique a vontade.


## Estrutura Inicial
A estrutura inicial pensada é algo parecido com:

```js
return {
  head: {},
  body: {
    children: [
      {
        main: {
          props: {
            id: 'content',
            class: 'container'
          },
          children: [
            {
              div: {
                props: { class: 'row' },
                children: [
                  {
                    div: {
                      props: { class: 'col s6' },
                      children: [{ h1: 'Meu título principal' }]
                    }
                  },
                  {
                    div: {
                      props: { class: 'col s6' },
                      children: [{ h2: 'Meu título secundário' }]
                    }
                  },
                ]
              }
            }
          ]
        }
      }
    ]
  }
}
```

Esse é um exemplo inicial, fique a vontade para sugerir melhorias. Você pode contribuir principalmente nessa [Issue](https://github.com/eduardosoareszup/html-super/issues/1). Nela sugerimos também que:

`children`: é um array com os elementos filhos da tag;
`props`: é um array com as propriedades e atributos da tag;

A chave do objeto será a nome da tag, exemplo

```js
div: {
  children: [
    h1: 'Qualquer coisa aqui'
  ]
}
```
Deverá resultar em:
```html
<div>
  <h1>Qualquer coisa aqui</h1>
</div>
```
