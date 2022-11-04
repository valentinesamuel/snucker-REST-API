import express, {Request, Response} from 'express'
import {successResponse} from '../utils/responseParser'

const router = express.Router()

router.get('/', (_req: Request, res: Response) => {
	successResponse(res, 'return images for different collections home page', {
		images: 'images',
		text: 'paragraphs'
	})
})

router.get('/:brand-series', (_req: Request, _res: Response) => {
	// filter products by brand series in the dv
})

router.get('/:athlete', (_req: Request, _res: Response) => {
	// filter products by athlete in the dv
})
