import {Product} from '../../models/product.mongo'

const BrandRepository = () => {
	const getBrand = async (brandName: string) => {
		const brand = await Product.find({brand: {$eq: brandName}})
		return brand
	}
	return {
		getBrand
	}
}
export {BrandRepository}

// export const getBrand = async (brandName: string) => {
// 	const brand = await Product.find({brand: {$eq: brandName}})
// 	return brand
// }
