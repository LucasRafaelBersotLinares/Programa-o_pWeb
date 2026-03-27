import { Heroi } from "./heroiconfig";

type classe = {
    classe: string;
}

let mago = new Heroi("Lucas", "Mago", 70,60);
let guerreiro = new Heroi("Lucas", "Espadachim", 70,20);
let arqueiro = new Heroi("Lucas", "Arqueiro", 70,2);
let erro = new Heroi("Lucas", "X", 70,60);
guerreiro.ataque();
mago.ataque();
arqueiro.ataque();
erro.ataque();

console.log(`
    DADOS:
    Nome:${mago.nome}\n
    Classe:${mago.classe}\n
    Dano:${mago.dano}\n
    Recurso:${mago.recurso}
`)

console.log(`
    DADOS:
    Nome:${guerreiro.nome}\n
    Classe:${guerreiro.classe}\n
    Dano:${guerreiro.dano}\n
    Recurso:${guerreiro.recurso}
`)

console.log(`
    DADOS:
    Nome:${arqueiro.nome}\n
    Classe:${arqueiro.classe}\n
    Dano:${arqueiro.dano}\n
    Recurso:${arqueiro.recurso}
`)