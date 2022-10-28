import express, {Request, Response} from 'express';
import {successResponse} from '../utils/responseParser';

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
	successResponse(res, 'return ibased on req', {
		whatever: 'anything',
		yeah: 'na yuo sabi'
	});
});
