import React, {Component} from "react";
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
import { WebView } from 'react-native-webview';

class MyWeb2 extends Component {
  render() {
    return  <View style={styles.container}>
      <WebView
    source={{uri: 'https://www.youtube.com/watch?v=e7cmJVoq7bk'}}
    style={{height: 100, width: 380}}
  />
  </View>
  }
}

export function SermonDetailScreen2() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <MyWeb2/>
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
