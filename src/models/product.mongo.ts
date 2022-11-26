import mongoose from 'mongoose'
import {ProductDetail} from './product_detail.mongo'
import {Review} from './review.mongo'

const ProductSchema = new mongoose.Schema({
	id: {
		type: Number,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	isAccessory: {
		type: Boolean,
		required: true
	},
	accessoryType: {
		type: String,
		required: true,
		default: null
	},
	description: {
		type: String,
		required: true
	},
	sizes: {
		type: [String],
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	},
	kidsAge: {
		type: [String],
		rrequired: true,
		default: null
	},
	colors: {
		type: [String],
		required: true
	},
	brand: {
		type: String,
		required: true
	},
	activities: {
		type: [String],
		required: true
	},
	belongsToCollection: {
		type: Boolean,
		required: true
	},
	collections: {
		type: [String],
		required: true,
		default: null
	},
	athlete: {
		type: String,
		required: true,
		default: null
	},
	sport: {
		type: [String],
		required: true
	},
	productDetail: {
		type: ProductDetail,
		required: true
	},
	reviews: Review
})

const Product = mongoose.model('Product', ProductSchema)
export {Product}
