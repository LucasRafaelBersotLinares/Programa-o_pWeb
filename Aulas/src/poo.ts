export class Aluno{
    nome: string;
    idade: number;
    curso: string;
    matricula: string;

    constructor(nome:string, idade:number,curso:string,matricula:string){
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }

    imprimir(): void{
        console.log(`Nome: ${this.idade}, Idade: ${this.idade}, Curso: ${this.curso}, Matricula: ${this.matricula}`);
    }
}