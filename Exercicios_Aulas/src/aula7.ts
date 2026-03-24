/*Exercício 1:
type Produtos = {nome: string; precoUSD: number}
const produtosUSD: Produtos[] = [
    {nome: 'Café', precoUSD: 5.00},
    {nome: 'Chinelo', precoUSD: 1.75},
    {nome: 'Faca', precoUSD: 2.70},
    {nome: 'Bolo', precoUSD: 4.00}
]; 
const produtosREAL = produtosUSD.map(p => p.precoUSD * 5);
console.log(produtosREAL);
console.log(produtosUSD);
*/

/*Exercício 2:
const nome: string[] = ["ana", "marcos", "joão", "felipe", "josé"];
nome.forEach((item) => {
    console.log(`Usuario ${item[0]?.toUpperCase() + item.slice(1)} conectado com sucesso!!!`)
});
*/

/*Exercício 3:
function transforma(array:string[]):string[] {
    let p = array.slice();
    return p.sort((a,b) => a.localeCompare(b, undefined, {numeric: true}))
}
const array: string[] = ['1.10.0', '1.2.1', '1.0.5', '1.20.0'];
const arrayT: string[] = transforma(array);
console.log(arrayT);
console.log(array)
*/

/*Exercício 4:
const estudantes = [
    {nome: 'Ricardo', nota: 8.5, bolsista: false},
    {nome: 'Maria', nota: 7.5, bolsista: true},
    {nome: 'Talio', nota: 6.5, bolsista: false},
    {nome: 'Falcon', nota: 4.5, bolsista: true},
    {nome: 'Anisio', nota: 1.5, bolsista: false}
];

let estudantesBonus = estudantes.map(n => n.nota * 0.5);
console.log(estudantesBonus);
console.log(estudantesBonus.sort());
estudantes.forEach((item) => {
    console.log(`${item.nome} e sua nota:${item.nota}`)
})
*/


