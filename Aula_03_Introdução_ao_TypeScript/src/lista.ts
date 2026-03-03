let nomes: string[] = ['ana', 'joão', 'alves']

console.log(nomes);

let numeros: number[] = [1,2,3,4,5];
console.log(numeros[2]);

console.log(nomes.indexOf("joão"));

nomes.splice(1,1);

console.log(nomes);

let years : Array<number> = [20,30,40];

let fruits:string[] = ["Banana","Maçâ"];

fruits.push("Pera");
fruits.unshift("Uva");

fruits.pop();
fruits.shift();

console.log(fruits[0])
console.log(fruits.length)