import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();
const PORT: Number = 5000;

app.use(cors({
	origin: '*'
}))
app.use('/', (_req: Request, res: Response, _next: NextFunction) => {
	res.status(200).send({data: 'Hello from my own personal server'});
});

app.listen(PORT, () => {
	console.log(`Server is Listening on port ${PORT}...`);
});
