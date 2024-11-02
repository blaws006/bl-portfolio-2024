import { Formik, Form, Field } from 'formik';

const ContactForm = () => {
	return (
		<Formik
			initialValues={{
				email: '',
				subject: '',
				message: ''
			}}
			onSubmit={async (values, { resetForm }) => {
				const formData = new FormData();
				formData.append('access_key', '129a9ac4-b456-4a35-b676-326410d1de11');
				formData.append('email', values.email);
				formData.append('subject', values.subject);
				formData.append('message', values.message);

				const object = Object.fromEntries(formData);
				const json = JSON.stringify(object);

				const res = await fetch('https://api.web3forms.com/submit', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json'
					},
					body: json
				}).then((res) => res.json());

				if (res.success) {
					console.log('Success', res);
					resetForm();
				}
			}}>
			<Form className='flex flex-col align-middle content-center mx-auto sm:container my-32'>
				<label htmlFor='email'>Email Address</label> <br />
				<Field
					name='email'
					className='border-2 block mb-8'
				/>
				<label htmlFor='subject'>Subject Line</label> <br />
				<Field
					name='subject'
					className='border-2 block mb-8'
				/>
				<label htmlFor='message'>Message</label>
				<br />
				<Field
					name='message'
					as='textarea'
					className='border-2 block mb-8 h-auto text-lg resize-y'></Field>
				<button
					type='submit'
					className='bg-black hover:bg-white text-white hover:text-black hover: border-black hover:border-x-2 hover:border-y-2 p-4 sm:w-2/6 lg:w-2/12 self-center hover:scale-125 ease-out duration-300'>
					Submit
				</button>
			</Form>
		</Formik>
	);
};

export default ContactForm;
