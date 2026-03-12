const frutas:string[] = ['maça', 'banana', 'uva'];
const numbers:number[] = [1,2,3,4,5];
let contador: number = 0;
frutas.forEach((item,index) => `${index}: ${item}`);
numbers.forEach(item => {contador += item});
