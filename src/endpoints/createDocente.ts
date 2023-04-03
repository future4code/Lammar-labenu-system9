import { Request, Response } from "express"
import connection from "../database/connection"


export const createDocentes = async (req: Request, res: Response) => {
    let errorCode = 400
    const docente = {
        id: req.body.id,
        nome: req.body.nome,
        email: req.body.email,
        dataNacimento: req.body.data_nasc,
        turmaId: req.body.turma_id
    }
    try {

        if(!docente){
            throw new Error("todas as informações são necessarias")   
        }


        await connection("docente").insert(
            {
                id: docente.id,
                nome: docente.nome,
                email: docente.email,
                data_nasc: docente.dataNacimento,
                turma_id: docente.turmaId
            }
        )


        res.status(200).send("docente criado com sucesso!")
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
}