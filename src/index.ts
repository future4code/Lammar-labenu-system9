import express from "express"
import cors from 'cors'
import { getAllTurma } from "./endpoints/getAllTurma"
import { getAllEstudantes } from "./endpoints/getAllEstudantes"
import { getAllDocentes } from "./endpoints/getAllDocente"
import { createEstudantes } from "./endpoints/createEstudante"
import { createDocentes } from "./endpoints/createDocente"
import { EstudanteDataBase } from "./database/EstudanteDataBase/EstudanteDataBase"

const app = express()
app.use(express.json())
app.use(cors())
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});






// Get all turmas - retorna todas as turmas
app.get("/all_turma", getAllTurma)

// Get all estudantes - retorna todas os estudantes
app.get("/all_estudantes", getAllEstudantes)

// Get all docentes - retorna todas os docentes
app.get("/all_docente", getAllDocentes)

app.post("/create_estudantes", createEstudantes)

app.post("/create_docente", createDocentes)