import express, {Request, Response} from 'express'
import {successResponse} from '../utils/response_parser'

const storeRouter = express.Router()

storeRouter.get('/', (_req: Request, res: Response) => {
	successResponse(res, 'This is the store bare endpoint', {
		location: '/store',
		yeah: 'na you sabi'
	})
})

export {storeRouter}
