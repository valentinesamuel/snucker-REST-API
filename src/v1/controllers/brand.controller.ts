import {Request, Response} from 'express'

const BrandController = (
	// FIXME: Create types for parameters and type for the return value of the function
	serviceContainer: any,
	successResponse: any,
	errorResponse: any
): any => {
	/** @desc Fetch Brand Details
	 * @param {object} req = The request object
	 * @param {object} res = The response object
	 * @route GET /v1/brand
	 */
	const getBrandDetails = async (
		req: Request,
		res: Response
	): Promise<void> => {
		try {
			const brand = await serviceContainer.brandService.getBrand(req.body)
			successResponse(res, 'Found the brand', brand)
		} catch (error) {
			errorResponse(res, ['Not Found'], 404)
		}
	}
	return {
		getBrandDetails
	}
}

export {BrandController}
