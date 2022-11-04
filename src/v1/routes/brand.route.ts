import express, {Request, Response} from 'express'
import {successResponse} from '../utils/response_parser'

const router = express.Router()

router.get('/', (_req: Request, res: Response) => {
	successResponse(res, 'return images for different brands home page', {
		images: 'images',
		text: 'paragraphs'
	})
})

router.get('/:collection', (_req: Request, _res: Response) => {
	// filter products by collection in the dv
})
