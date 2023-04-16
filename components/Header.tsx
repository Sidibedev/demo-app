import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FONTS from '../styles/fonts';

export default function Header() {
  return (
    <View>
    <Text style={styles.headerTitle}>Get Started</Text>
    <Text style={styles.headerDescription}>Create your account now!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    layout: {
        padding: 20
    },
    headerTitle: {
        fontFamily: FONTS.Bold,
        fontSize: 25
    },
    headerDescription: {
        fontFamily: FONTS.Regular,
        fontSize: 18,
        marginTop: 5
    }
  });
  