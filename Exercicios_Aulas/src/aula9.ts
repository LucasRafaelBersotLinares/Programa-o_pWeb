/*Exercicio 1 e 2:
 class Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
    editora: string;
    
    constructor(titulo: string,autor: string,anoPublicacao: number,editora: string){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
        this.editora = editora
    }

    exibirDados():void{
        console.log(`
            Titulo: ${this.titulo}\n
            Autor: ${this.autor}\n
            Ano de Publicacao: ${this.anoPublicacao}\n
            Editora: ${this.editora}
        `);
    }


 }

let LoveCraft: Livro = new Livro("Call of Chtullu","H. P. Lovecraft",1928,"Darkside Books");
let DeathNote: Livro = new Livro("DeathNote","Shinigami",2000,"Kira");
LoveCraft.exibirDados();
DeathNote.exibirDados();
*/

/*Exercicio 3:
class Usuario{
    nome:string;
    email:string;

    constructor(nome:string,email:string){
        this.nome = nome
        this.email = email
    }

    boasVindas(): void{
        console.log(`Bem-vindo(a), ${this.nome}!\nSeu email e ${this.email}.`);
    }
}
const Lucas: Usuario = new Usuario("Lucas Rafael Bersot Linares","lucasblinares@gmail.com");
Lucas.boasVindas();
*/

/*Exercicio 4:
class Carro{
    marca:string;
    modelo:string; 
    ano:number;

    constructor(marca:string,modelo:string,ano:number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    mostrarCarro(): void{
        console.log(`
            Informacoes:\n
            Marca: ${this.marca}
            Modelo: ${this.modelo}
            Ano: ${this.ano}
        `)
    }
}

let fusca: Carro = new Carro("Volkswagen","Fusca",2010);
fusca.mostrarCarro()
fusca.ano = 2020
fusca.mostrarCarro()
*/

/*Exercicio 5:
export class Produto {
    nome : string
    preco : number
    constructor(nome: string, preco:number){
        this.nome = nome
        this.preco = preco
    }
    mostrarInformacoes (): void {
        console.log(`
            Informacoes:\n
            Nome: ${this.nome}\n
            Preco: ${this.preco}
        `)
    }
}

const prod = new Produto ("Notebook", 3500)
prod.mostrarInformacoes();
*/