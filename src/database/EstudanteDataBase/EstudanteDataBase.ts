import { Estudante } from "../../models/Estudante"
import { BaseDatabase } from "../BaseDataBase"
import { TABLE_ESTUDANTE } from "../TABLE_NAME"

export class EstudanteDataBase extends BaseDatabase {
    TABLE_NAME= TABLE_ESTUDANTE

    public async getAll() {
        return super.getAll()
      }
    
    public async create(Estudante: Estudante) {
        super.create(Estudante)
    }
    
   }
   