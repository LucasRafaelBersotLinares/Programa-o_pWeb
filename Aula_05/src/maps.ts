const numeros: number[] = [1,2,3,4,5];
const dobro:number[] = numeros.map(n => n*2);
const string:string[] = numeros.map(n => `Número ${n}`);
console.log(dobro);
console.log(string);

type Produto = {id:number,nome:string,preco:number};

const produtos = [ 
    {id: 1, nome: 'Mouse', preco: 12.234}, 
    {id: 2, nome: 'José', preco: 40.432} 
]

const Nome:string[] = produtos.map(p => p.nome);

const listaFormatada = produtos.map(p => ({id: p.id, label: `${p.nome} - Preco em Reais ${p.preco.toFixed(2)}`, disponivel: true}));
console.log(listaFormatada);

