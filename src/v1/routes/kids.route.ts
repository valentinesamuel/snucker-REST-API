import express, {Request, Response} from 'express'
import {successResponse} from '../utils/response_parser'

const kidsRouter = express.Router()

kidsRouter.get('/', (_req: Request, res: Response) => {
	successResponse(res, 'return images for children home page', {
		images: 'images',
		text: 'paragraphs'
	})
})

kidsRouter.get('/shoes', (_req: Request, _res: Response) => {
	// filter products by shoes in the dv
})

kidsRouter.get('/clothing', (_req: Request, _res: Response) => {
	// filter products by clothing in the dv
})

kidsRouter.get('/accessories', (_req: Request, _res: Response) => {
	// filter products by accessories in the dv
})

export {kidsRouter}
