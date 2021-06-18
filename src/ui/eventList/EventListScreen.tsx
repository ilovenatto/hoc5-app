import React from "react";
import {SafeAreaView, StatusBar, StyleSheet, Text,} from "react-native";


export function EventListScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Text>Hello world Splash</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
