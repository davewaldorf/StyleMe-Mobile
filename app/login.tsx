import * as Yup from 'yup';
import  Form  from '../components/form/Form';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required')
});
export default function Login() {
  return (
    <Form
      inputs={[
        { label: 'email', icon: 'email' },
        { label: 'password', icon: 'lock' }
      ]}
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      buttonLabel="Login"
    />
  );
}
