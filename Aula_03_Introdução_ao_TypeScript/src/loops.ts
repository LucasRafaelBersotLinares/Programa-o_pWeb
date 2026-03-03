for(let i = 0;i < 5; i++){
    console.log(`Iteraçção: ${i}`);
}

let contador = 0;
while (contador < 5){
    console.log(`Iteração: ${contador}`);
    contador ++;
}

let num:number = 5

do{
    console.log(`Números: ${num}`)
}while(num<5)

let numerais: number[] = [10,20,30]

for(const num of numerais){
    console.log(`Números: ${num}`)
}

const pessoas = {nome:"Alice",idade: 25, cidade: "Boituva"}

// for (const chave in pessoas){
//     console.log(`${chave}:${pessoas}`)
// }

