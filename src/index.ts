import express, {Application, NextFunction, Request, Response} from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {loggger} from './v1/middleware/logger'
import {errorResponse, successResponse} from './v1/utils/response_parser'
import {queryParser} from './v1/middleware/query_parser'
import {storeRouter} from './v1/routes/store.route'
dotenv.config()

const PORT = process.env.PORT ?? 5000
const app: Application = express()

app.use(
	cors({
		origin: '*'
	})
)
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(loggger)

app.get('/', (_req: Request, res: Response, _next: NextFunction) => {
	successResponse(res, 'Welcome to my server', {data: 'Hello from my server'})
})

app.get('/failed', (_req: Request, res: Response, _next: NextFunction) => {
	errorResponse(res, 'This was failed on purpose', 'You cannot go here')
})

app.get(
	'/shop',
	queryParser,
	(_req: Request, res: Response, _next: NextFunction) => {
		successResponse(res, 'You are querying', {data: 'Get you data'})
	}
)

app.use('/v1/store', storeRouter)

app.use((_req: Request, res: Response) => {
	errorResponse(res, {message: 'Page not Found'}, 'Missing Page', 404)
})

app.use((_req: Request, res: Response) => {
	errorResponse(res, {message: 'Server Error'})
})

function startServer(): any {
	try {
		app.listen(PORT, () => {
			console.log(`Server is Listening on port ${PORT}...`)
		})
	} catch (error) {
		console.error(error)
	}
}

startServer()
