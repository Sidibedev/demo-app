import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import React from "react";
import TextField from "./TextField";
import Button from "./Button";
import { Formik } from "formik";
import { UserRegisterInput } from "../types";
import { createUser } from "../api/endpoint";
import { isSuccess } from "../utils";
import { RegisterValidationSchema } from "../api/validation";


export default function RegisterForm() {
  const [loading, setLoading] = React.useState(false);

  const registerUser = (user: UserRegisterInput) => {
    setLoading(true);
    createUser(user)
      .then((resp: any) => {
        if (isSuccess(resp)) {
          alert("Congrats!!!");
        } else {
          alert(`Oops account creation failed, Error: ${resp.message}`);
        }
      })
      .catch(() => alert("something went wrong"))
      .finally(() => setLoading(false));
  };

  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.margin40}
    >
      <Formik
        initialValues={{ fullname: "", email: "", password: "" }}
        onSubmit={(values) => registerUser(values)}
        validationSchema={RegisterValidationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          touched,
        }) => (
          <>
            <TextField
              onChangeText={handleChange("fullname")}
              onBlur={handleBlur("fullname")}
              value={values.fullname}
              label="Full name"
              error={errors.fullname && touched.fullname ? errors.fullname : ""}
              placeholder="Enter your fullname"
            />
            <TextField
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
              label="Email"
              error={errors.email && touched.email ? errors.email : ""}
              placeholder="Enter your email"
            />
            <TextField
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry={true}
              label="Password"
              error={errors.password && touched.password ? errors.password : ""}
              placeholder="Enter your password"
            />
            <View style={styles.margin40}>
              <Button
                isLoading={loading}
                disabled={!isValid}
                title="Sign Up"
                onPress={() => handleSubmit()}
              />
            </View>
          </>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({ margin40: { marginTop: 30 } });
