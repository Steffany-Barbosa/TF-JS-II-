# Aula 03

```
Profa.: Lisandra Cruz
Monitora: Beatriz Ramerindo
```

## 📕 Objeto
Os objetos são uma estrutura de dados onde podemos armazenar uma coleção de propriedades, contendo assim chave e valor.

```javascript
const objeto = { nome: "Lisandra Cruz", apelido: "Lis", idade: 28 };
```

### for..in
O laço for...in interage nas propriedades enumeradas de um objeto, na ordem original de inserção. O laço pode ser executado para cada propriedade distinta do objeto. Usando o objeto acima, o for...in se apresentaria da seguinte maneira:

```javascript
for (const propriedade in meuObjeto) {
  console.log(`${propriedade}: ${meuObjeto[propriedade]}`)
}
```

## 📚 Array
O array é uma estrutura que serve para armazenar e organizar os dados.

```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

const linguagensDeProgramacao = ["javascript", "python", "java"];

const pessoas = [
  { nome: "Lisandra Cruz", apelido: "Lis", idade: 28 },
  { nome: "Beatriz Ramerindo", apelido: "Bea", idade: 19 },
  { nome: "Dandara Lima", apelido: "Dada", idade: 5 },
];
```
### for...of
Em JavaScript, o for...of permite iterar sobre objetos igualmente iteráveis (arrays, objetos, strings etc.). O funcionamento do for...of ocorre em cada elemento do objeto iterável executando o corpo do loop. 

```javascript
for (const elemento in linguagensDeProgramacao) {
  console.log(`${elemento}`)
}
```


🏋🏽 Bora praticar.. clique aqui para acessar a [lista de atividades](https://docs.google.com/document/d/1sEGBb5CL-1e_M2Kleg0OHRZ3vCSSSXbt5bp9-_dgaCI).
