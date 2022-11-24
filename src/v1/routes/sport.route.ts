import express, {Request, Response} from 'express'
import {successResponse} from '../utils/response_parser'

const sportRouter = express.Router()

sportRouter.get('/', (_req: Request, res: Response) => {
	successResponse(res, 'return images for different sports home page', {
		images: 'images',
		text: 'paragraphs'
	})
})

sportRouter.get('/:sport', (_req: Request, _res: Response) => {
	// filter products by sport in the dv
})

export {sportRouter}
