import {Request, Response} from 'express'
import {ContainerService} from '../services'
import {successResponse} from '../utils/response_parser'

export const getBrandProducts = (req: Request, res: Response) => {
	const brandName = req.params
	const brandProducts = ContainerService.getBrandProducts(brandName)
	successResponse(res, 'Found the brand items', brandProducts)
}
