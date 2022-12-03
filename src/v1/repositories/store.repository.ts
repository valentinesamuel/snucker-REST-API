import {Product} from '../../models/product.mongo'

export const getQueriedProducts = async (requestQuery: any) => {
	// TODO: Desctructure all the params from here
	const products = await Product.find({key: {$in: requestQuery}})
	return products
}
