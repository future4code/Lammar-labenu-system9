import { BaseDatabase } from "../BaseDataBase"
import { TABLE_ESTUDANTE_HOBBY } from "../TABLE_NAME"

export class EstudanteHobby extends BaseDatabase {
    TABLE_NAME = TABLE_ESTUDANTE_HOBBY

    public async getAll() {
        return super.getAll()
      }
    
    public async create(estudanteHobby: EstudanteHobby) {
        super.create(estudanteHobby)
    }
}