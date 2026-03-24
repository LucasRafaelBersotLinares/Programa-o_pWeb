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

/*Exercício 3:*/
function transforma(array:string[]) {
    let arrayT = []

    for(let i = 0; i < array.length;i++){
        arrayT[i] = array[i]?.split(".").join('')
    }  
    return arrayT.map(Number)
}


const array: string[] = ['1.10.0', '1.2.1', '1.0.5', '1.20.0'];
console.log(transforma(array).sort());

