import { Pessoa } from "./Pessoa"

export class Estudante extends Pessoa {
    constructor(
    id: string,
    nome: string,
    email: string,
    data_nasc: Date,
    turma_id: string,
    ) {
    super(
    id,
    nome,
    email,
    data_nasc,
    turma_id
    )
    }
    
    
   }