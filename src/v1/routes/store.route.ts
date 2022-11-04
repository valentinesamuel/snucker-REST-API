import express, {Request, Response} from 'express'
import {successResponse} from '../utils/response_parser'

const router = express.Router()

router.get('/', (_req: Request, res: Response) => {
	successResponse(res, 'return ibased on req', {
		whatever: 'anything',
		yeah: 'na yuo sabi'
	})
})
