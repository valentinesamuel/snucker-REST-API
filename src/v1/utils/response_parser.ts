import {Response} from 'express'

/**
 * @description A function that facilitates the response of a successful request
 * @param {Response}response Http Response Object
 * @param {string}message Custom success message
 * @param {object}responseData Http server response data
 * @param {number}responseCode [status=200] Http response status code
 * @returns {Response} Http response with status, custom message, http response code and server response data
 */
function successResponse(
	response: Response,
	message: string,
	responseData: object,
	responseCode: number = 200
): Response {
	const responseBody = {
		status: 'Successful',
		responseCode,
		message,
		responseData
	}
	return response.status(responseCode).json(responseBody)
}

/**
 * @description A function that facilitates the response of a failed request
 * @param {Response}response Http Response Object
 * @param {any}errors Http errors
 * @param {string}message Custom error message
 * @param {number}responseCode [responseCode=500] Http response status code
 * @returns {Response} Http response with errors, status, custom message and http response code
 */
function errorResponse(
	response: Response,
	errors: any,
	message?: string,
	responseCode: number = 500
): Response {
	let errorMessage
	if (message == null) {
		switch (responseCode) {
			case 400:
				errorMessage = 'Bad Request'
				break
			case 403:
				errorMessage = 'Forbidden User Access'
				break
			case 404:
				errorMessage = 'Resource Not Found'
				break
			case 422:
				errorMessage = 'Invalid User Input'
				break
			default:
				errorMessage = 'Internal Server Error'
				break
		}
	} else {
		errorMessage = message
	}

	const responseBody = {
		error: errors,
		status: 'Failed',
		responseCode,
		message: errorMessage
	}
	return response.status(responseCode).json(responseBody)
}
export {successResponse, errorResponse}
