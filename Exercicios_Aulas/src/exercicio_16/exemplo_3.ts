class Endereco {
    cidade: string
    pais: string

    constructor(cidade: string, pais:string){
        this.cidade = cidade
        this.pais = pais
    }
}

class Fabricante {
    nome: string
    endereco: Endereco

    constructor(nome: string, endereco: Endereco){
        this.nome = nome
        this.endereco = endereco
    }
}

class Produto {
    id: number
    nome: string
    preco: number
    fabricante: Fabricante

    constructor(id:number,nome:string,preco:number,fabricante:Fabricante){
        this.id=id
        this.nome=nome
        this.preco=preco
        this.fabricante=fabricante
    }
}

/* Significado em JSON

{
    "id": 3,
    "nome": "Smartphone",
    "preco": 1800.00,
    "fabricante": {
        "nome": "Samsung",
        "endereco": {
            "cidade": "São Paulo",
            "pais": " Brasil"
        }
    }
}


*/