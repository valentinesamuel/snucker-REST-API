import {BrandRepository} from '../repositories/brand.repository'

const BrandService = (): any => {
	// Get Brand
	const getBrand = async (requestBody: any) => {
		const brand = await BrandRepository().getBrand(requestBody)
		if (brand === null) {
			throw new Error('Brand not found')
		}
		return brand
	}

	return {
		getBrand
	}
}

export {BrandService}
