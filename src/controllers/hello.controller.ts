import { Request, Response } from 'express';


const helloWorld = async (_req: Request, res: Response) => {
    res.send('Hello World');
};

export default { helloWorld }