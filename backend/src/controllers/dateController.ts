import { Request, Response } from 'express';

function getDatePerMonth(req: Request, res: Response) {

}

function getSpecificDate(req: Request, res: Response) {

}

function createDate(req: Request, res: Response) {
    res.send('OK');
}

export default {
    getDatePerMonth,
    getSpecificDate,
    createDate
}