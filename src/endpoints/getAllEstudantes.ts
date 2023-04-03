import { Request, Response } from "express"
import { EstudanteDataBase} from "../database/EstudanteDataBase/EstudanteDataBase"


export const getAllEstudantes = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const metodoEstudante = new EstudanteDataBase
        const result = await metodoEstudante.getAll()
        res.status(200).send({ estudantes: result })
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}