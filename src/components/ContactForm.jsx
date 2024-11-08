import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateContactForm } from '../utils/validateContactForm';
import { useState } from 'react';
import Loading from './Loading';

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';

const ContactForm = () => {
	const [loading, setLoading] = useState(false);
	const [open, setOpen] = useState(false);
	const handleSubmit = async (values, { resetForm }) => {
		setLoading(true);

		const formData = new FormData();
		formData.append('access_key', '129a9ac4-b456-4a35-b676-326410d1de11');
		formData.append('email', values.email);
		formData.append('subject', values.subject);
		formData.append('message', values.message);

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		try {
			const res = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: json
			});
			const data = await res.json();
			if (data) {
				setOpen(true);
				console.log('Success', data);
				setLoading(false);

				resetForm();
			}
		} catch (error) {
			console.error('Error', error);
		}
	};

	return (
		<Formik
			initialValues={{
				email: '',
				subject: '',
				message: ''
			}}
			onSubmit={handleSubmit}
			validate={validateContactForm}>
			<Form className='flex flex-col align-middle content-center mx-auto sm:container my-32'>
				{loading && <Loading />}
				{open && (
					<>
						<Dialog
							open={open}
							onClose={setOpen}
							className='relative z-10'>
							<DialogBackdrop
								transition
								className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'
							/>

							<div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
								<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
									<DialogPanel
										transition
										className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95'>
										<div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
											<div className='sm:flex sm:items-start'>
												<div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
													<DialogTitle
														as='h3'
														className='text-base font-semibold text-gray-900'>
														Thank You!
													</DialogTitle>
													<div className='mt-2'>
														<p className='text-sm text-gray-500'>{`Your message has been sent! I'll get back to you as soon as possible.`}</p>
													</div>
												</div>
											</div>
										</div>
										<div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row justify-center sm:px-6'>
											<button
												type='button'
												onClick={() => setOpen(false)}
												className='inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-black hover:border-black hover:border-2 sm:ml-3 sm:w-auto'>
												Close
											</button>
										</div>
									</DialogPanel>
								</div>
							</div>
						</Dialog>
					</>
				)}
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
