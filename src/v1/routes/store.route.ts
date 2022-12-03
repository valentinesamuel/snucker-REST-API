import express, {Request, Response} from 'express'
import {successResponse} from '../utils/response_parser'
import {menRouter} from './men.route'
import {womenRouter} from './women.route'
import {kidsRouter} from './kids.route'
import {brandRouter} from './brand.route'

const storeRouter = express.Router()

storeRouter.get('/', (_req: Request, res: Response) => {
	successResponse(res, 'return ibased on req', {
		whatever: 'anything',
		yeah: 'na yuo sabi'
	})
})

storeRouter.use('/men', menRouter)
storeRouter.use('/women', womenRouter)
storeRouter.use('/kids', kidsRouter)
storeRouter.use('/brand', brandRouter)

export {storeRouter}
