import express, {Request, Response} from 'express'
import {successResponse} from '../utils/responseParser'

const router = express.Router()

router.get('/', (_req: Request, res: Response) => {
	successResponse(res, 'return images for children home page', {
		images: 'images',
		text: 'paragraphs'
	})
})

router.get('/shoes', (_req: Request, _res: Response) => {
	// filter products by shoes in the dv
})

router.get('/clothing', (_req: Request, _res: Response) => {
	// filter products by clothing in the dv
})

router.get('/accessories', (_req: Request, _res: Response) => {
	// filter products by accessories in the dv
})
