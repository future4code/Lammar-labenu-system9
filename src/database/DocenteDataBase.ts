import { BaseDatabase } from "./BaseDataBase"
import { TABLE_DOCENTE } from "./TABLE_NAME"

export class MetodoDocente extends BaseDatabase {
 
    TABLE_NAME= TABLE_DOCENTE

    public async getAll() {
        return super.getAll()
      }
    

   }
   