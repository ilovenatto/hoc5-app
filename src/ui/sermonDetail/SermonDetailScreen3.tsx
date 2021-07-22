import React, {Component} from "react";
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
import { WebView } from 'react-native-webview';

class MyWeb3 extends Component {
  render() {
    return  <View style={styles.container}>
      <WebView
    source={{uri: 'https://www.youtube.com/watch?v=gNLvdGd7_Yg'}}
    style={{height: 100, width: 380}}
  />
  </View>
  }
}

export function SermonDetailScreen3() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <MyWeb3/>
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