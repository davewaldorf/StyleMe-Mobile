import { Formik } from "formik";
import { Field, ErrorMessage } from "formik";
import React from "react";
import { Text, View } from "../../components/Themed";
import Button from "../../components/form/Button";
import { StyleSheet } from "react-native";
import FormInput from "./FormInput";
import {FormInputProps} from "./FormInput";

interface FormProps {
  inputs: FormInputProps[];
  initialValues: any;
  validationSchema: any;
  buttonLabel: string;
}


export default function Form({inputs, initialValues, validationSchema, buttonLabel}: FormProps) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Handle form submission here
        console.log(values);
      }}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <Text style={styles.title}>LOGIN</Text>
          {inputs.map((input) => (
            <FormInput key={input.label} label={input.label} icon={input.icon} fieldType={input.fieldType}/>
          ))}
          <Button label={buttonLabel} onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: { 
    color: '#223e4b', 
    fontSize: 20, 
    marginBottom: 16,
    fontFamily: 'Roboto-Bold'
  },
});