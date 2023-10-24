import { Request, Response } from "express";
import { Games } from "../models/Games";

export const createGames = async(req:Request, res:Response) =>{
    let { name, cost, category, photo } = req.body

    let newGame = await Games.create({name, cost, category, photo})
    //res.render('')

    res.json({newGame})

}

export const All = async(req:Request, res:Response) => {
    const games = await Games.findAll()

    res.json(games)
}
export const findOne = async(req:Request, res:Response) => {
    const {id} =req.params

    const game = await Games.findByPk(id)

    res.json(game)
}
export const deleteGames = async(req:Request, res:Response) => {
    
    const  id  = req.params.id

    try{
     const game = await Games.findByPk(id)
     await game?.destroy()

        res.json('').status(200)

    }catch{
        res.json('').status(400)
    }

}
export const editGames = async (req:Request, res:Response) => {
    const id = req.params.id

    let game = await Games.findByPk(id);
    if(game){
        if(req.body.name){
            game.name = req.body.name
        }
        if(req.body.coast){
            game.cost = req.body.cost
        }
        if(req.body.category){
            game.category = req.body.category
        }
        if(req.body.photo){
            game.photo = req.body.photo
        }

        await game.save()


        res.json().status(200)
    }else{
        res.json({error: 'error'})
    }

}