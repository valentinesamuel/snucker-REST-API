import {IReview} from './review.types'

export interface IProduct {
	id: number
	image: string
	name: string
	category: string
	price: number
	isAccessory: boolean
	accessoryType: string | null
	description: string
	sizes: string[]
	gender: string
	age: string
	kidAge: string[] | null
	colors: string[]
	brand: string
	activities: string[]
	belongsToCollection: boolean
	collections: string[] | null
	athlete: string | null
	sport: string[]
	productDetail: {
		title: string
		description: string
		benefits: string[]
		details: string[]
		moreDetails: string[]
	}
	reviews: IReview[]
}
