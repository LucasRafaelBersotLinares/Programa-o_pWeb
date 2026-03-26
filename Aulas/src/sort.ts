const numerosX: number[] = [22,17,21,32,34,51];
numerosX.sort();
numerosX.sort((a,b)=>a - b);
numerosX.sort((a,b)=>b - a);
console.log(numerosX);

const letras: string[] = ['Lucas', 'Anisio', 'Bruno', 'Joao'];
letras.sort((a,b)=>a.localeCompare(b));
console.log(letras);
console.log('anisio'.localeCompare('Joao'));
