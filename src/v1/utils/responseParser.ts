import {Response} from 'express';

/**
 * @description A function that facilitates the response of a successful request
 * @param {Response}response Http Response Object
 * @param {string}message Custom success message
 * @param {object}responseData Http server response data
 * @param {number}responseCode Http response status code
 * @returns {Response} Http response with status, custom message, http response code and server response data
 */
function successResponse(
	response: Response,
	message: string,
	responseData: object,
	responseCode: number
): Response {
	const responseBody = {
		status: 'success',
		responseCode,
		message,
		responseData
	};
	return response.status(responseCode).json(responseBody);
}

export = {
	successResponse
};
