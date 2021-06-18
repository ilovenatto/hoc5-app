import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LOG} from "./src/util/HocLogger";

export default function App() {
  LOG.debug("Hello world logger")
  return (
    <View style={styles.container}>
      <Text>Hello Caden and Josh and Dan!! </Text>
      <Text>CHANGE ME and try this out</Text>
      <Text>Hello world..</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
