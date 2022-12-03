import {Product} from '../../models/product.mongo'

export const getBrandProducts = async (brandName: any) => {
	const brand = await Product.find({brand: {$eq: brandName}})
	return brand
}
