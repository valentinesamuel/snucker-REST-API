import mongoose from 'mongoose'

const ProductDetailSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	benefits: {
		type: [String],
		required: true
	},
	details: {
		type: [String],
		required: true
	},
	moreDetails: {
		type: [String],
		required: true
	}
})

const ProductDetail = mongoose.model('ProductDetail', ProductDetailSchema)
export {ProductDetail}
