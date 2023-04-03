import { Pessoa } from "../models/Pessoa"

export class Docente extends Pessoa {
    constructor(
    id: string,
    nome: string,
    email: string,
    dataNasc: Date,
    turma: string,
    private especialidades: string[]
    ) {
    super(
    id,
    nome,
    email,
    dataNasc,
    turma,
    )
    this.especialidades = especialidades
    }

}
