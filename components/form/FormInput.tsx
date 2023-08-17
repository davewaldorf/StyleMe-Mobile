import { Field, ErrorMessage } from "formik";
import { Text, View } from "../../components/Themed";
import TextInput from "./TextInput";
import { StyleSheet } from "react-native";

export interface FormInputProps {
  label: string;
  icon: string;
} 

export default function FormInput({ label, icon }: FormInputProps) {
  return (
    <View style={styles.input}>
    <Field
      name={label}
      component={TextInput}
      icon={icon}
      placeholder={`Enter your ${label}`}
      autoCapitalize="none"
      autoCompleteType={label}
      returnKeyType="next"
      returnKeyLabel="next"
    />
    <ErrorMessage name={label} component={Text} style={styles.errorText} />
  </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
    width: '80%',
    backgroundColor: '#f0f0f0'
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});

