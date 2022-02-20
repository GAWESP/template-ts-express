import { Request, Response } from 'express'

export const HelloWorld = async (req:Request,res:Response,next:any) => {
    try {
        res.send('hello world')
        // res.send({ text:'hello world' })
        // res.json({ text:'hello world' })
        
    } catch (error) {
        next(error)
    }
}