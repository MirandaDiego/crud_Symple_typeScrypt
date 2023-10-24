import { Request, Response } from "express";
import { User } from "../models/User";
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';


export const createUser = async (req: Request, res: Response) => {
    let { name, email, password } = req.body;

    if (req.body.name && req.body.email && req.body.password) {

        let hashUser = await User.findOne({ where: { email } });

        console.log('dados pegos, email encontrado:', email);

        if (!hashUser) {

            const hashedPassword = await bcrypt.hash(password, 10);
            let newUser = await User.create({ name, email, password: hashedPassword });
            res.json({ newUser });
        } else {
            res.json({ error: 'E-mail já existe' });
        }
    } else {

        res.json({ error: 'Erro ao criar usuário' });
    }
}


export const All = async (req: Request, res: Response) => {
    console.log('ESTOUUUUU AQUIIIIII')
    const users = await User.findAll()
    res.json(users)
}

export const login = async (req: Request, res: Response) => {
    if (req.body.email && req.body.password) {
        let email: string = req.body.email;
        let password: string = req.body.password;

        let user = await User.findOne({
            where: { email, password }
        });

        if (user) {
            const token = JWT.sign(
                { id: user.id, email: user.email },
                '4321',
                { expiresIn: '1h' }
            );
            let newUser = {
                id: user.id,
                nome: user.name,
                email: user.email,

            }
            res.json({ status: true, token, user: newUser })
            return
        }
        res.status(400).json({ status: false })
    }else{
        
    }
   
}