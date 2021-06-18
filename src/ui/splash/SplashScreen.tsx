import React from "react";
import {Button, SafeAreaView, StatusBar, StyleSheet, Text,} from "react-native";
import {StackActions, useNavigation} from "@react-navigation/native";


export function SplashScreen() {
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Text>Hello world Splash</Text>
      <Button title={"Goto event list"} onPress={(ev)=> {
        nav.dispatch(StackActions.push("EventList"));
      }
      }/>
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
