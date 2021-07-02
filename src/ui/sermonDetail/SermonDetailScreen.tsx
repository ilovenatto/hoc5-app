import React from "react";
import {SafeAreaView, StatusBar, StyleSheet, Text,} from "react-native";

export function SermonDetailScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Text>Sermon Detail Screen</Text>
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
