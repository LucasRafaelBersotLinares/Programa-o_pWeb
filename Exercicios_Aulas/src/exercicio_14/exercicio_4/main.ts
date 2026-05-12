import {Pessoa} from "./classes/pessoa"

let object = new Pessoa("LUCAS RAFAEL BERSOT LINARES", "lucasblinares@gmail.com", "22/07/2006")
object.validarDataNascimento()
object.validarNome()
object.validarEmail()