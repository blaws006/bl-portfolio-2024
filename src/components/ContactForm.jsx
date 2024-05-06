import { Formik, Form, Field } from 'formik'

const ContactForm = () => {
  return (
    <Formik initialValues={{
      email: '',
      message: ''
    }} onSubmit={values => console.log(values)} className=''>
      <Form className='flex flex-col align-middle content-center mx-auto sm:container'>
        <label htmlFor='email'>Email Address</label> <br />
        <Field name='email' className='border-2 block mb-2' />
        <label htmlFor='message'>Message</label><br />
        <Field name='message' className='border-2 block mb-2'></Field>
        <button type='submit' className='bg-black text-white p-4 w-2/4 self-center'>Submit</button>
      </Form>
    </Formik>
  )
}

export default ContactForm