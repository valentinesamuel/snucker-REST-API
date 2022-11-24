import express, {Request, Response} from 'express'
import {successResponse} from '../utils/response_parser'

const womenRouter = express.Router()

womenRouter.get('/', (_req: Request, res: Response) => {
	successResponse(res, 'return images for women home page', {
		images: 'images',
		text: 'paragraphs'
	})
})

womenRouter.get('/shoes', (_req: Request, _res: Response) => {
	// filter products by shoes in the dv
})

womenRouter.get('/clothing', (_req: Request, _res: Response) => {
	// filter products by clothing in the dv
})

womenRouter.get('/accessories', (_req: Request, _res: Response) => {
	// filter products by accessories in the dv
})

export {womenRouter}
