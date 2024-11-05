import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateContactForm } from '../utils/validateContactForm';

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
			}}
			validate={validateContactForm}>
			<Form className='flex flex-col align-middle content-center mx-auto sm:container my-32'>
				<label htmlFor='email'>Email Address</label> <br />
				<Field
					name='email'
					className='border-2 block'
				/>
				<ErrorMessage name='email'>{(msg) => <p className='text-red-700'>{msg}</p>}</ErrorMessage>
				<label
					htmlFor='subject'
					className='mt-6'>
					Subject Line
				</label>{' '}
				<br />
				<Field
					name='subject'
					className='border-2 block'
				/>
				<ErrorMessage name='subject'>{(msg) => <p className='text-red-700'>{msg}</p>}</ErrorMessage>
				<label
					htmlFor='message'
					className='mt-6'>
					Message
				</label>
				<br />
				<Field
					name='message'
					as='textarea'
					className='border-2 block h-auto text-lg resize-y'></Field>
				<ErrorMessage name='message'>{(msg) => <p className='text-red-700'>{msg}</p>}</ErrorMessage>
				<button
					type='submit'
					className='bg-black hover:bg-white text-white hover:text-black hover: border-black hover:border-x-2 hover:border-y-2 p-4 sm:w-2/6 lg:w-2/12 self-center hover:scale-125 ease-out duration-300 mt-8'>
					Submit
				</button>
			</Form>
		</Formik>
	);
};

export default ContactForm;
