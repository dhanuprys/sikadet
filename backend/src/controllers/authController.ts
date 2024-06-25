import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import process from 'process';

function login(req: Request, res: Response) {
    const token = jwt.sign(
        {
            username: 'dhanu',
            password: 'dhanu'
        },
        process.env.JWT_SECRET as string,
        {
            expiresIn: '1h'
        }
    );

    return res.send({
        token
    });
}

export default {
    login
}