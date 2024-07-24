import { Formik, Form, Field } from 'formik';

const ContactForm = () => {
	return (
		<Formik
			initialValues={{
				email: '',
				message: ''
			}}
			onSubmit={(values) => console.log(values)}
			className=''
		>
			<Form className='flex flex-col align-middle content-center mx-auto sm:container my-32'>
				<label htmlFor='email'>Email Address</label> <br />
				<Field name='email' className='border-2 block mb-8' />
				<label htmlFor='message'>Message</label>
				<br />
				<Field name='message' as='textarea' className='border-2 block mb-8 h-auto text-lg resize-y'></Field>
				<button type='submit' className='bg-black hover:bg-white text-white hover:text-black hover: border-black hover:border-x-2 hover:border-y-2 p-4 sm:w-2/6 lg:w-2/12 self-center hover:scale-125 ease-out duration-300'>
					Submit
				</button>
			</Form>
		</Formik>
	);
};

export default ContactForm;
