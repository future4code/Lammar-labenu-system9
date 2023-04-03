import { Request, Response } from "express"
import { MetodoTurma } from "../database/TurmaDataBase"


export const getAllTurma = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const metodoTurma = new MetodoTurma
        const result = await metodoTurma.getAll()
        res.status(200).send({ turmas: result })
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}