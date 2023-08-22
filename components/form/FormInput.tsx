import { Field, ErrorMessage } from "formik";
import { Text, View } from "../../components/Themed";
import TextInput from "./TextInput";
import   DatePicker   from "./DatePicker";
import  {CountryInput}  from "./CountryInput";
import { GenderInput } from "./GenderPicker";
import { StyleSheet } from "react-native";

export interface FormInputProps {
  label: string;
  icon: string;
  fieldType?: string;
} 

export default function FormInput({ fieldType, label, icon }: FormInputProps) {
  let component;

  switch (fieldType) {
    case 'date':
      component = DatePicker;
      break;
    case 'country':
      component = CountryInput;
      break;
    case 'gender': 
      component = GenderInput;
      break;
    default:
      component = TextInput;
  }

  console.log(component);

  return (
    <View style={styles.input}>
    <Field
      name={label}
      component={component}
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

