const database = require('../database/connection')

class TaskController {
    novaTarefa(request,response){

        const {p1,p2,p3,p4,p5} = request.body

        console.log(p1,p2,p3,p4,p5)

        database.insert({p1,p2,p3,p4,p5}).table("perguntas").then(data=>{
            console.log(data)
            response.json({message:"Criado com sucesso"})
        }).catch(error=>{
            console.log(error)
        })
    }
}

module.exports = new TaskController()