import { Request, Response } from "express"
import { EstudanteDataBase} from "../database/EstudanteDataBase/EstudanteDataBase"
import { EstudanteHobby } from "../database/EstudanteDataBase/EstudanteHobbyDataBase"
import { HobbyDataBase } from "../database/EstudanteDataBase/HobbyDataBase"
import { Estudante } from "../models/Estudante"
import { Hobby } from "../models/Hobby"


export const createEstudantes = async (req: Request, res: Response) => {
    let errorCode = 400
    const id:string = Math.floor(Date.now() * Math.random()).toString(36)
    const nome:string = req.body.nome
    const email:string = req.body.email
    const data_nasc:Date = req.body.data_nasc
    const turma_id:string =  req.body.turma_id
    const hobbies:any = req.body.hobbies


    const estudante = new Estudante(
        id,
        nome,
        email,
        data_nasc,
        turma_id
        )
        
        
    
    try {

        if(!estudante){
            throw new Error("todas as informações são necessarias")   
        }
       
        
        
        const estudanteHobby = new EstudanteHobby
        const hobby = new HobbyDataBase
        const estudanteDataBase = new EstudanteDataBase


        const hobbyGetAll = await hobby.getAll()
        
        
       
        await estudanteDataBase.create(estudante)
        for(let i = 0; i < hobbies.length; i++){
            
            
            const Busca:any = hobbyGetAll.find(result=> result.nome === hobbies[i]);

           
            
          

            const dados:any = {
                id: Math.floor(Date.now() * Math.random()).toString(36),
                nome: hobbies[i]
            }
            
            if(Busca){
                const dadosEstudanteHobby:any = {
                    estudante_id: id,
                    hobby_id: Busca.id
                }
                // throw new Error("result")
                await estudanteHobby.create(dadosEstudanteHobby)
                
                // 
            }else{
                const dadosEstudanteHobby:any = {
                    estudante_id: id,
                    hobby_id: dados.id
                }
                await hobby.create(dados)
                await estudanteHobby.create(dadosEstudanteHobby)
                // throw new Error("hobby já existe")

            }
        }
        
        res.status(200).send("Estudante criado com sucesso!")
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    
    }
}