import {NextFunction, Request, Response} from 'express'
import {IQueryObj} from '../types/utility.types'

/**
 * @description A middleware function that parses the query string from the client to a query format for mongodb
 * @param {Object} request The request object
 * @param {Object} _response The response object
 * @param {function} next The next function
 */

const queryParser: any = (
	request: Request,
	_response: Response,
	next: NextFunction
) => {
	const queryString = request.url
	let key
	let value
	const queryObjs: IQueryObj<string[] | string> = {}
	queryString.split('&').forEach((query) => {
		key = query.split('=')[0].replace(/\/shop\/\?/g, '')
		value = query.split('=')[1].replace(/%/g, ' ').split('+')
		if (key === 'price') {
			value = value.join()
		}
		queryObjs[key] = value
	})
	console.log(queryObjs)
	// ======
	//  If any editing is to be done, use below method
	// const {gender, sport, name, price, brand} = queryObjs
	// const queryObject = {
	// 	gender,
	// 	sport,
	// 	name,
	// 	price,
	// 	brand
	// }
	// console.log(queryObject)
	next()
}

export {queryParser}
