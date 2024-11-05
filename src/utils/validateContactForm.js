export const validateContactForm = (values) => {
	const errors = {};
	const { email, subject, message } = values;
	const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!email) {
		errors.email = 'Required';
	} else if (!emailReg.test(email)) {
		errors.email = 'Email should be a valid email format (i.e., yourname@company.com)';
	}
	if (!subject) {
		errors.subject = 'Required';
	}
	if (!message) {
		errors.message = 'Required';
	} else if (message.length <= 5) {
		errors.message = 'Message needs to be longer than 5 characters!';
	}

	return errors;
};
