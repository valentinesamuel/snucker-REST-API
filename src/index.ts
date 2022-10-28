import express, {Application, NextFunction, Request, Response} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {loggger} from './v1/middleware/logger';
dotenv.config();

const PORT = process.env.PORT ?? 5000;
const app: Application = express();

app.use(
	cors({
		origin: '*'
	})
);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(loggger);
app.use('/', (_req: Request, res: Response, _next: NextFunction) => {
	res.status(200).send({data: 'Hello from my own personal server'});
});

function startServer(): any {
	try {
		app.listen(PORT, () => {
			console.log(`Server is Listening on port ${PORT}...`);
		});
	} catch (error) {
		console.error(error);
	}
}

startServer();
