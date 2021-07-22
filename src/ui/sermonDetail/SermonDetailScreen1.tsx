import React, {Component} from "react";
import {SafeAreaView, StatusBar, StyleSheet, Text, View,} from "react-native";
import { WebView } from 'react-native-webview';
import { ScrollView } from "react-native-gesture-handler"

class Sermon1 extends Component {
  render() {
    return  <View style={styles.container}>
      <WebView
    source={{uri: 'https://www.hoc5.church/sermons/the-compassion-of-our-lord'}}
    style={{ marginTop: 0, width: 380}}
  />
  </View>
  }
}

class Notes1 extends Component {
  render() {
    return  <View style={styles.container}>
      <WebView
    source={{uri: 'https://drive.google.com/file/d/18MO5A05wH_b9zKdMlc_heat49xhWZ8rb/view'}}
    style={{ marginTop: 0, height: 500, width: 380}}
  />
  </View>
  }
}


export function SermonDetailScreen1() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Sermon1/>
      <ScrollView style={{flex:1}}>
            <Notes1/>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  scrollViewContainer: {
    paddingVertical: 0
  }
});
