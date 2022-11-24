import express, {Request, Response} from 'express'
import {successResponse} from '../utils/response_parser'

const collectionRouter = express.Router()

collectionRouter.get('/', (_req: Request, res: Response) => {
	successResponse(res, 'return images for different collections home page', {
		images: 'images',
		text: 'paragraphs'
	})
})

collectionRouter.get('/:brand-series', (_req: Request, _res: Response) => {
	// filter products by brand series in the dv
})

collectionRouter.get('/:athlete', (_req: Request, _res: Response) => {
	// filter products by athlete in the dv
})

export {collectionRouter}
