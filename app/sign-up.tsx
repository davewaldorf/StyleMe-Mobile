import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Form from "../components/form/Form"; // Make sure the path is correct

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  dateOfBirth: Yup.date().required("Date of Birth is required"),
  gender: Yup.string().required("Gender is required"),
  country: Yup.string().required("Country is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function SignUp() {
  const initialValues = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    country: "",
    email: "",
    password: "",
  };

  return (
          <>
            <Text style={styles.title}>Create an Account</Text>
            <Form
              inputs={[
                { label: "firstName", icon: "person" },
                { label: "lastName", icon: "person" },
                { label: "dateOfBirth", icon: "calendar", fieldType:'date' },
                { label: "gender", icon: "gender-male-female", fieldType:'gender' },
                { label: "country", icon: "earth", fieldType:'country' },
                { label: "email", icon: "email" },
                { label: "password", icon: "lock" },
              ]}
              initialValues={initialValues}
              validationSchema={validationSchema}
              buttonLabel="Sign Up"
            />
            <Text style={styles.bottomText}>
              Already Have An Account?{" "}
              </Text>
              <Text
                style={styles.signinLink}
                onPress={() => {
                  // Add navigation logic to your sign-in page
                  console.log("Navigate to Sign In page");
                }}
              >
                Sign In
              </Text>
          </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#223e4b",
    fontSize: 24,
    marginBottom: 20,
    fontFamily: "Roboto-Bold",
  },
  bottomText: {
    marginTop: 12,
    color: "#666666",
  },
  signinLink: {
    color: "#0066cc",
  },
});
