function mensagem( f: string):string{
    return f;
}
console.log(mensagem("Bluh"));

const mensagemLambda = (f: string):string => f;
console.log(mensagemLambda);

function soma(a: number, b:number):void{
    console.log(a+b);
}

const somaLambda = (a:number, b:number):void => console.log(a+b);
somaLambda(2,2);
soma(2,1);

function saudacao(nome: string = "Visitante"):string{
    return `Olá, ${nome}`;
}

const saudacaoLambda = (nome: string = "Visistante"):string => `Olá, ${nome}`;

saudacao("Anisio");
saudacaoLambda("Scheffer");

const multiplicacaoOpicional = (a:number,b?:number):number => {
    if(b === undefined){
        return a;
    }
    return a*b;

}
const multiplicacaoOpicionalTernario = (a:number,b?:number):number => (b===undefined)?a:a*b;

const multOpCoalescencia = (a:number,b?:number):number => a*(b ?? 1);

multOpCoalescencia(20,1);
multOpCoalescencia(20);
multiplicacaoOpicionalTernario(10,2);
multiplicacaoOpicionalTernario(10);
multiplicacaoOpicional(1,2);
multiplicacaoOpicional(1);


