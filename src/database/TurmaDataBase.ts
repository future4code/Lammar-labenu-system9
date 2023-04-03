import { BaseDatabase } from "./BaseDataBase"
import { TABLE_TURMA } from "./TABLE_NAME"


export class MetodoTurma extends BaseDatabase {
    TABLE_NAME= TABLE_TURMA

    public async getAll() {
        return super.getAll()
      }
    
   }