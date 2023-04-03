import { Request, Response } from "express"
import { MetodoDocente } from "../database/DocenteDataBase"



export const getAllDocentes = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const docente = new MetodoDocente()
        const result = await docente.getAll()
        res.status(200).send({ docentes:  result})
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}