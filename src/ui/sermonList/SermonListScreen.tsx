import React from "react";
import {Button, SafeAreaView, StatusBar, StyleSheet, Text,} from "react-native";
import {StackActions, useNavigation} from "@react-navigation/native";

export function SermonListScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Text>Sermon List Screen</Text>
      <Button title="Go to Sermon Detail" onPress={ (event) =>
      {navigation.dispatch(StackActions.push("SermonDetail"));}
      } />
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
