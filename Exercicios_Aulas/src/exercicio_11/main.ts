import { Prontuario } from "./classes/prontuario";
import { Paciente } from "./classes/paciente";
import { Remedio } from "./classes/remedio";
import { Contato } from "./classes/contato";
import { Pessoa } from "./classes/pessoa";
import { Medico } from "./classes/medico";
import { Endereco } from "./classes/endereco";

const enderecoP = new Endereco('Fedrerico Ozanan','150','Tatui','18271620')
const contatoP = new Contato('11954956612','lucasblinares@gmail.com')
const contatoM = new Contato('119549612','lucasblies@gmail.com')
const enderecoM = new Endereco('Fererico Oznan','10','Taui','1827620')
const pessoaP = new Pessoa('Lucas',19,enderecoP,contatoP)
const pessoaM = new Pessoa('Joao',25,enderecoM,contatoM)
const remedios = [new Remedio('Dipirona', '10l'), new Remedio('Leuzadina','100L')]
const paciente = new Paciente(pessoaP,remedios)
const medico = new Medico(pessoaM,'Cardiologo')

const pronturario = new Prontuario(paciente,medico)

pronturario.mostrar()