import React from "react";
import {Button, SafeAreaView, StatusBar, StyleSheet, Text,} from "react-native";
import {StackActions, useNavigation} from "@react-navigation/native";


export function SplashScreen() {
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Text>Hello world Splash</Text>
      <Button title={"Go to event list"} onPress={(ev)=> {
        nav.dispatch(StackActions.push("EventList"));
      }
      }/>
      <Button title={"Go to Sermons"} onPress={(ev)=> {
        nav.dispatch(StackActions.push("Sermon"));
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
