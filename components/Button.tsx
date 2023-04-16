import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import FONTS from "../styles/fonts";
export type BaseButtonProps = TouchableOpacity["props"];

interface ButtonProps extends BaseButtonProps {
  title: string;
  isLoading?:boolean
}
export default function Button({ title, disabled, isLoading, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, { opacity: disabled ? 0.2 : 1 }]}
      {...rest}
    >


    {isLoading ? <ActivityIndicator color={"white"}/> :
      <Text style={styles.buttonText}>{title}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    height: 45,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontFamily: FONTS.Medium,
    fontSize: 18,
    textAlign: "center",
  },
});
