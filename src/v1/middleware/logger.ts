import {NextFunction, Request, Response} from 'express';
import {DateTime} from 'luxon';

/**
 * @description A middleware function that logs server request to endpoints
 * @param {Object} request The request object
 * @param {Object} response The response object
 * @param {function} next The next function
 */

const loggger: any = (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	const {method, url} = request;

	const startTime = DateTime.local();
	response.on('close', () => {
		const log = `[${method}: ${url}]:  Finished with ${
			response.statusCode
		} response in ${
			DateTime.local().diff(startTime, 'milliseconds').milliseconds
		} ms`;
		console.log(log);
	});
	next();
};

export {loggger};
