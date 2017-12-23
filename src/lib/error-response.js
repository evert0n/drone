function createErrorResponse(errors) {

	if (errors.hasOwnProperty('name') && errors.hasOwnProperty('errors')) {
		return errors;
	}

	if (!Array.isArray(errors)) {
		errors = [{
			name: errors.name,
			message: errors.message
		}];
	}

	return {
		code: 500,
		name: 'InternalServerError',
		errors: errors
	}

}

module.exports = createErrorResponse;