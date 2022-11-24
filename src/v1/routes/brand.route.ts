import express, {Request, Response} from 'express'
import {successResponse} from '../utils/response_parser'

const brandRouter = express.Router()

brandRouter.get('/', (_req: Request, res: Response) => {
	successResponse(res, 'return images for different brands home page', {
		images: 'images',
		text: 'paragraphs'
	})
})

export {brandRouter}
