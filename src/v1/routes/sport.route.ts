import express, {Request, Response} from 'express'
import {successResponse} from '../utils/responseParser'

const router = express.Router()

router.get('/', (_req: Request, res: Response) => {
	successResponse(res, 'return images for different sports home page', {
		images: 'images',
		text: 'paragraphs'
	})
})

router.get('/:sport', (_req: Request, _res: Response) => {
	// filter products by sport in the dv
})
