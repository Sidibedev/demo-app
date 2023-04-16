import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import FONTS from "../styles/fonts";
import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.layout}>
        <Header />
        <RegisterForm />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    padding: 40,
  },
});
