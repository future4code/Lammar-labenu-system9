import { Estudante } from "../../models/Estudante"
import { Hobby } from "../../models/Hobby"
import { BaseDatabase } from "../BaseDataBase"
import { TABLE_HOBBY } from "../TABLE_NAME"

export class HobbyDataBase extends BaseDatabase {
    TABLE_NAME = TABLE_HOBBY

    public async getAll() {
        return super.getAll()
      }
    
    public async create(Hobby: Hobby) {
        super.create(Hobby)
    }
    
   }
   