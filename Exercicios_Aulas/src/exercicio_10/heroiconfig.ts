import { nodeModuleNameResolver } from "typescript";

export class Heroi {
    nome: string;
    classe: string;
    dano: number;
    custo: number;
    recurso: number;

    constructor(nome: string, classe: string, dano: number, custo: number){
        this.nome = nome;
        this.classe = classe;
        this.dano = dano;
        this.custo = custo;
        switch(this.classe){
            case 'Espadachim':
                this.recurso = 50;
                break;
            case 'Mago':
                this.recurso = 40;
                break;
            case 'Arqueiro':
                this.recurso = 10;
                break;
            default:
                this.recurso = -1;
        }
    }

    ataque():void{
        let aux = this.recurso - this.custo
        if(aux<0){
            console.log(`Ataque de ${this.nome} falhou por falta de recurso`);
            return;
        }
        this.recurso = aux;
        console.log(`Ataque de ${this.nome} bem sucedido, restando ${this.recurso}`);
        return;
    }
}
