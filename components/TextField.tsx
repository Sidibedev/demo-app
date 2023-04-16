import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import FONTS from "../styles/fonts";

export type BaseInputProps = TextInput["props"];

interface TextFieldProps extends BaseInputProps {
  label?: string;
  error?:string
}

export default function TextField({ label, error, ...rest }: TextFieldProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        // onChangeText={(text) => setText(text)}
        style={[styles.inputStyle, {borderColor: error ? "red" : "#ccc"}]}
        {...rest}
      />
      {error &&
      <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  inputStyle: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontFamily: FONTS.Regular
  },
  label: {
    color: "gray",
    marginBottom: 10,
    fontFamily: FONTS.Light,
  },
  errorText: {
    fontFamily: FONTS.Light,
    color: "red",
    fontSize: 12,
    marginTop: 4
  }
});
