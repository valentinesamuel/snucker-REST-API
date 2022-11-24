import express, {Request, Response} from 'express'
import {successResponse} from '../utils/response_parser'

const menRouter = express.Router()

menRouter.get('/', (_req: Request, res: Response) => {
	successResponse(res, 'return images for men home page', {
		images: 'images',
		text: 'paragraphs'
	})
})

menRouter.get('/shoes', (_req: Request, _res: Response) => {
	// filter products by shoes in the dv
})

menRouter.get('/clothing', (_req: Request, _res: Response) => {
	// filter products by clothing in the dv
})

menRouter.get('/accessories', (_req: Request, _res: Response) => {
	// filter products by accessories in the dv
})

export {menRouter}
