/* let query = 'gender=men&price=asc&brand=nike';
let queryArray = query.split('&')
console.log(queryArray);
let queryObject = queryArray.forEach(query => {
  key = query.split('=')[0];
value = query.split('=')[1];
queryObj[key] = value;
});
 */

import {NextFunction, Request, Response} from 'express'

// let queryObj = {}
// let query =
// 	'gender=male+female&brand=nike+puma+diadora&price=asc&name=High%Tight+Nike%Kyrie%2&sport=basketball+football+American%Football+track%and%field'
// /*
//  */
// let querySections = query.split('&').forEach((query) => {
// 	key = query.split('=')[0]
// 	value = query.split('=')[1]
// 	queryObj[key] = value.replace(/%/g, ' ').split('+')
// })
// console.log('=========')
// console.log(queryObj)
/**
 * @description A middleware function that parses the query string from the client to a query format for mongodb
 * @param {Object} request The request object
 * @param {Object} response The response object
 * @param {function} next The next function
 */

const queryParser: any = (
	request: Request,
	_response: Response,
	next: NextFunction
) => {
	console.log(request.url)
	// Destructure the url into mongodb format
	next()
}

export {queryParser}
