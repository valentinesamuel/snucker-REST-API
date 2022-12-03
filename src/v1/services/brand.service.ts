import {ContainerService} from './index'

const BrandService = (): any => {
	// Get Brand
	const getBrandProduct = async (requestBody: any) => {
		const brand = await ContainerService.getBrandProducts(requestBody)
		if (brand === null) {
			throw new Error('Brand not found')
		}
		return brand
	}

	return {
		getBrandProduct
	}
}

export {BrandService}
