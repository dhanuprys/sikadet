import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import parseBearerToken from '../utils/parseBearerToken';

function shouldLogin(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers['authorization'];
    
    if (!authorization) {
        return res.status(401).send({
            error: 'Authorization not found'
        });
    }
    
    try {
        const token = parseBearerToken(authorization);

        req.user = jwt.verify(token, process.env.JWT_SECRET as string);
    } catch (error) {
        return res.status(401).send({
            error: 'Invalid token'
        });
    }

    next();
}

export default {
    shouldLogin
};