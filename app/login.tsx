// import { useAuth } from '../../context/auth';
import { Text, View } from '../components/Themed';
import Button from '../components/form/Button';
import TextInput from '../components/form/TextInput';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Field, ErrorMessage } from 'formik';
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
