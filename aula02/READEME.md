# Aula 02

```
Profa.: Lisandra Cruz
Monitora: Beatriz Ramerindo
```

## 🔁 Estruturas de Repetição

Estruturas de repetições repetem determinado bloco de comandos enquanto a condição atende ao requisito.</b>

<p align="center">
  <img width="300" src="https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/i18n/pt/Fluxograma_simples.png">
</p>

## For

`for` é utilizado quando temos definida a quantidade de iterações de repetições necessárias.

<p align="center">
  <img width="300" src="https://media.tenor.com/Oe-fMIIqnT8AAAAC/loop-infinite.gif">
</p>

Por parâmetro, <b>for</b> recebe três atributos:

```javascript
for ([inicialização]; [condição]; [expressão final]) {
   declaração;
}
```

- Inicialização: é uma expressão ou declaração de variáveis. É usada para iniciar o contador de variáveis.
- Condição: é a expressão que será avaliada antes da iteração do loop. Enquanto a condição for atendida, o seu código será executado.
- Expressão final: é validada ao final de cada iteração que acontece no laço FOR. Utilizada para incrementar ou atualizar a variável.
- Declaração: é o trecho de código que será executado caso a condição seja verdadeira.

### Exemplo

```javascript
for (let i = 0; i < 9; i++) {
  console.log(i);
}
```

## while

<p align="center">
  <img width="600" src= "https://wiki.sj.ifsc.edu.br/images/7/7c/Fig039_MCO018703.jpg"> 
 </p>
  
### while

`while` cria um laço que executa um bloco de comando especifico enquanto a condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução do bloco.

```javascript
while (condicao) {
  declaracao;
}
```

### do while

`do while` é parecido com while, mas nele, a condição só acontece depois que os comandos do bloco forem executados.

```javascript
do {
  declaracao;
} while (condicao);
```

🏋🏽 Bora praticar.. clique aqui para acessar a [lista de atividades](https://docs.google.com/document/d/11-dsQd_c9SfU8fCFVBNZTWITJGM3CiQZp9EFOPm-XHM).
